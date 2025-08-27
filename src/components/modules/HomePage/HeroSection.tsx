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
    </>
  );
}
