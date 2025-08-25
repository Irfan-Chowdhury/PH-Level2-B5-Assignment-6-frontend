import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this Digital Wallet?",
    answer:
      "Our Digital Wallet is a secure platform that allows you to store money, transfer funds, pay bills, and manage your finances easily, just like bKash or Nagad.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Simply sign up using your mobile number or email. After verification, your wallet account will be created instantly.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes! We use industry-standard encryption and secure servers to ensure your money and transactions are fully protected.",
  },
  {
    question: "What fees are applied?",
    answer:
      "Most transactions are free. However, minimal service charges may apply for cash-out and specific services. Check our Pricing page for details.",
  },
  {
    question: "Can I use it internationally?",
    answer:
      "Currently, our services are available locally. International support is coming soon!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Got questions? We’ve got answers! Here are the most common queries about our wallet service.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
