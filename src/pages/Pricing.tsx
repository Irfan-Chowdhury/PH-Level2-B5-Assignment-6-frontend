import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for individuals just starting with digital wallets.",
    features: [
      "Free wallet creation",
      "Send & receive money",
      "Basic security features",
      "24/7 support"
    ],
    button: "Get Started",
    highlight: false
  },
  {
    name: "Standard",
    price: "$4.99/mo",
    description: "For users who need more advanced features and higher limits.",
    features: [
      "Everything in Basic",
      "Higher transaction limits",
      "Bill payments & mobile recharge",
      "Priority support"
    ],
    button: "Choose Standard",
    highlight: true
  },
  {
    name: "Premium",
    price: "$9.99/mo",
    description: "Best for agents & power users with premium services.",
    features: [
      "Everything in Standard",
      "Exclusive agent features",
      "Advanced analytics & insights",
      "Dedicated account manager"
    ],
    button: "Go Premium",
    highlight: false
  }
];

const Pricing = () => {
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
            Simple & Transparent Pricing
          </motion.h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Choose the plan that suits you best. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl shadow-lg border ${
                plan.highlight ? "bg-indigo-600 text-white scale-105" : "bg-gray-50"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
              <p className="mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-indigo-600"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.button}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
