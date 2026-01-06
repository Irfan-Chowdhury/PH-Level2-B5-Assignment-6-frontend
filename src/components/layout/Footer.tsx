import { Link } from "react-router";


export default function Footer() {

    return (
        <>
        <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} DigiWallet. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-white">Privacy</Link>
                <Link to="/terms" className="hover:text-white">Terms</Link>
                <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
            </div>
        </footer>
        </>

    )
}