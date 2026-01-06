import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";
import { motion } from "framer-motion";

import { 
  Wallet, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Send,
  ListChecks,
  ArrowRight, 
    UserPlus,
  Landmark,
  ReceiptText,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function HeroSection() {

  const features = [
    {
      icon: Send,
      title: "Send money instantly",
      desc: "Transfer money securely to any user using email or phone number in real time.",
      href: "#",
    },
    {
      icon: Wallet,
      title: "Cash-in & cash-out",
      desc: "Deposit or withdraw money easily through authorized agents nationwide.",
      href: "#",
    },
    {
      icon: ShieldCheck,
      title: "Secure digital wallet",
      desc: "Your funds stay protected with encrypted transactions and secure authentication.",
      href: "#",
    },
    {
      icon: ListChecks,
      title: "Transaction history",
      desc: "Track all your transactions with filters, pagination, and real-time updates.",
      href: "#",
    },
  ];

   const steps = [
    {
      step: "Step 01",
      title: "Create your account",
      desc: "Sign up with your email or phone number and set up your wallet in minutes.",
      icon: UserPlus,
    },
    {
      step: "Step 02",
      title: "Add money safely",
      desc: "Top up through trusted agents or supported channels and keep your balance ready.",
      icon: Landmark,
    },
    {
      step: "Step 03",
      title: "Send or withdraw fast",
      desc: "Transfer to other users or withdraw cash with quick confirmation and alerts.",
      icon: Send,
    },
    {
      step: "Step 04",
      title: "Review and track",
      desc: "See your activity, search transactions, and stay in control with smart filters.",
      icon: ReceiptText,
    },
  ];

  return (
    <>

      <main className="flex-grow">
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              The Upcoming Future of Digital Wallets
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
        </section> */}

        {/* Features Highlights */}
        {/* <section className="py-16 bg-gray-50">
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
        </section> */}

        {/* Hero Section (updated, similar vibe but original layout) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
          {/* soft blobs */}
          <div className="pointer-events-none absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-120px] h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="container mx-auto px-6 pt-16 pb-10 text-center">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" />
              A secure digital wallet platform
            </motion.div>

            {/* title */}
            <motion.h1
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Your digital{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                wallet
              </span>{" "}
              made simpler
            </motion.h1>

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-5 mx-auto max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed"
            >
              Send money, add cash, and track transactions with speed and safety. Built for users, agents,
              and businesses—without the complexity.
            </motion.p>

            {/* feature pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { icon: ShieldCheck, label: "Bank-level security" },
                { icon: Zap, label: "Instant transfers" },
                { icon: Smartphone, label: "Mobile-first UI" },
                { icon: Wallet, label: "Multi-role support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs md:text-sm font-semibold text-gray-700 shadow-sm"
                >
                  <item.icon className="h-4 w-4 text-indigo-600" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
              >
                <Link to="/register">Get started</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-xl border-gray-300 text-gray-800 hover:bg-gray-50"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="container mx-auto px-6 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "50k+", label: "active users" },
                { value: "10m+", label: "transactions" },
                { value: "99.9%", label: "uptime" },
                { value: "24/7", label: "support" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-indigo-600">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm font-semibold text-gray-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Trust section (updated) */}
        <section className="bg-white py-14 md:py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
                Built for different roles
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
                Whether you are a regular user, an agent, or an admin—PayWave keeps your workflow clean
                and organized.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Individual users",
                  desc: "Manage your wallet, send money fast, and stay informed with clear transaction history.",
                  icon: Smartphone,
                },
                {
                  title: "Business agents",
                  desc: "Handle cash-in/cash-out operations smoothly with role-based tools and tracking.",
                  icon: Wallet,
                },
                {
                  title: "Administrators",
                  desc: "Monitor activity, manage users, and keep everything secure with control dashboards.",
                  icon: ShieldCheck,
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                    <c.icon className="h-6 w-6 text-indigo-600" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>        

        {/* Features section (matches your screenshot style) */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                Powerful features for everyday <br className="hidden md:block" />
                payments
              </h2>

              <p className="mt-4 text-base md:text-lg text-gray-600">
                Everything you need to manage your money securely, quickly, and
                efficiently — all in one digital wallet.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition
                             hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                    <f.icon className="h-6 w-6 text-indigo-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {f.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {f.desc}
                  </p>

                  <a
                    href={f.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600
                               hover:text-indigo-700"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="relative overflow-hidden py-16 md:py-20">
          {/* Background (different from the screenshot) */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
          <div className="absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute -bottom-24 left-[-120px] h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative container mx-auto px-6">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700">
                Simple setup
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                How DigiWallet works
              </h2>

              <p className="mt-4 text-base md:text-lg text-gray-600">
                Start in a few clear steps. Add money, pay, withdraw, and track everything from one
                place.
              </p>
            </div>

            {/* Steps */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition
                            hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Left step rail (different structure) */}
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-indigo-600 to-purple-600 opacity-70" />

                  <div className="flex items-start justify-between">
                    <div className="text-xs font-bold tracking-wider text-gray-500">
                      {s.step}
                    </div>

                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                      <s.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
