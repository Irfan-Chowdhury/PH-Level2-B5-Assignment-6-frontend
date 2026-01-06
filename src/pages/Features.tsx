import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Zap, Globe, CreditCard, LineChart } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Mobile First",
    description: "A seamless experience across all devices with a responsive mobile-first design."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Bank-Grade Security",
    description: "Secure transactions with two-factor authentication and strong encryption."
  },
  {
    icon: <Zap className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Lightning Fast",
    description: "Instant money transfers with minimal delays and low fees."
  },
  {
    icon: <CreditCard className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Easy Payments",
    description: "Pay bills, recharge mobiles, and send money with a few taps."
  },
  {
    icon: <LineChart className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Smart Insights",
    description: "Track spending patterns and manage your budget with powerful analytics."
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Global Access",
    description: "Access your wallet from anywhere in the world, 24/7."
  }
];

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Features
          </motion.h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover the powerful features that make DigiWallet the most secure, fast, and user-friendly wallet service.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
