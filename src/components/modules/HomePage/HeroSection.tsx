import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Smartphone, Zap } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetDivisionsQuery } from "@/redux/features/division/division.api";
import { useState } from "react";

export default function HeroSection() {
  const [selectedDivision, setSelectedDivision] = useState<string | undefined>(
    undefined
  );

  const { data: divisionData, isLoading: divisionIsLoading } =
    useGetDivisionsQuery(undefined);

  const divisionOption = divisionData?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    })
  );

  return (
    <>
  <section className="flex flex-col min-h-screen">
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
          <Button className="bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700">
            Get Started
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              The Future of Digital Wallets
            </motion.h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Secure, fast, and user-friendly. Manage your money anytime, anywhere with DigiWallet.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <Link to="/register">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-indigo-600 border-white hover:bg-white hover:text-indigo-600">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Smartphone className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
              <p className="text-gray-600">Seamless experience across all devices with responsive design.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <ShieldCheck className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Bank-grade encryption and two-factor authentication for safety.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Zap className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Instant money transfers and low transaction delays.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
  </section>

    <section className="relative overflow-hidden py-32 min-h-screen">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Logo />
            </div>


      {/* Navbar */}
      {/* <header className="sticky top-0 z-50 bg-white shadow-md">
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
          <Button className="bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700">
            Get Started
          </Button>
        </nav>
      </header> */}


      {/* Hero Section */}
            {/* <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl md:text-6xl font-extrabold mb-6"
                >
                  The Future of Digital Wallets
                </motion.h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  Secure, fast, and user-friendly. Manage your money anytime, anywhere with DigiWallet.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Create Account
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                    Learn More
                  </Button>
                </div>
              </div>
            </section> */}


            <div className="mt-6 flex justify-center gap-3">
              <Select onValueChange={(value) => setSelectedDivision(value)}>
                <SelectTrigger className="w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Divisions</SelectLabel>
                    {divisionOption?.map(
                      (item: { value: string; label: string }) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {selectedDivision ? (
                <Button asChild>
                  <Link to={`/tours?division=${selectedDivision}`}>Search</Link>
                </Button>
              ) : (
                <Button disabled>Search</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
