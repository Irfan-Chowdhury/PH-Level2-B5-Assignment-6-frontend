import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = useMemo(
    () => ({
      email: "support@paywave.com",
      phone: "+880 1XXXXXXXXX",
      location: "Dhaka, Bangladesh",
      hours: [
        "Sunday – Thursday: 9:00 AM – 8:00 PM",
        "Friday – Saturday: Limited support",
      ],
    }),
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setForm({ fullName: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Header */}
      <section className="pt-12 pb-8">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Contact us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-gray-600"
          >
            Have questions, feedback, or need support? Our team is here to help you
            with any PayWave-related inquiry.
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left side (info cards) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Get in touch */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-bold text-gray-900">Get in touch</h2>

                <div className="mt-5 space-y-4 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50">
                      <Mail className="h-4 w-4 text-indigo-600" />
                    </span>
                    <span className="font-medium">{contactInfo.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50">
                      <Phone className="h-4 w-4 text-indigo-600" />
                    </span>
                    <span className="font-medium">{contactInfo.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50">
                      <MapPin className="h-4 w-4 text-indigo-600" />
                    </span>
                    <span className="font-medium">{contactInfo.location}</span>
                  </div>
                </div>
              </motion.div>

              {/* Support hours */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-bold text-gray-900">Support hours</h2>

                <div className="mt-4 flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50">
                    <Clock className="h-4 w-4 text-indigo-600" />
                  </span>

                  <div className="space-y-2 text-sm text-gray-700">
                    {contactInfo.hours.map((h) => (
                      <p key={h} className="leading-6">
                        {h}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Small note card (extra but still similar vibe, not exact) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6"
              >
                <p className="text-sm font-semibold text-indigo-900">
                  Fast help tip
                </p>
                <p className="mt-2 text-sm text-indigo-900/80 leading-6">
                  Add your transaction reference in the subject so we can support you
                  quicker.
                </p>
              </motion.div>
            </div>

            {/* Right side (form) */}
            <div className="lg:col-span-7">
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
                >
                  <h2 className="text-lg font-bold text-gray-900">
                    Send us a message
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Full name
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Email address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="How can we help you?"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Write your message here..."
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
                    >
                      Send message
                    </Button>

                    <p className="text-xs text-gray-500 leading-5">
                      We usually reply within 24–48 hours (working days).
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Message sent successfully
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">
                        Thanks for reaching out. Our support team will contact you soon.
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl"
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
