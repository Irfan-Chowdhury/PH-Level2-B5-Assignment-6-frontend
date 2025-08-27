import { Link } from "react-router";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authApi, useLogoutMutation, useUserInfoQuery} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { ModeToggle } from "./ModeToggler";

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

    return (
        <>
            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <nav className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
                    <Wallet className="w-7 h-7" />
                    DigiWallet
                </Link>
                <ul className="hidden md:flex gap-6 font-medium">
                    <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-indigo-600 transition">About</Link></li>
                    <li><Link to="/features" className="hover:text-indigo-600 transition">Features</Link></li>
                    <li><Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link></li>
                    <li><Link to="/faq" className="hover:text-indigo-600 transition">FAQ</Link></li>
                </ul>

                {data?.data?.email && (
                    <Button onClick={handleLogout} variant="outline" className="text-sm">
                        Logout
                    </Button>
                )}

                {!data?.data?.email && (
                    <Button asChild className="bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700">
                        <Link to="/login">Login</Link>
                    </Button>
                )}
                </nav>
            </header>
        </>
    )
}