import React from "react";
import { ShieldCheck, Lock, Eye, FileText, Mail, Clock } from "lucide-react";

const Privacy = () => {
  const updatedDate = "January 6, 2026";

  const sections = [
    {
      id: "overview",
      icon: FileText,
      title: "Privacy overview",
      points: [
        "We collect only the information needed to provide wallet services.",
        "We do not sell your personal data.",
        "We use security measures to protect your account and transactions.",
      ],
    },
    {
      id: "data-we-collect",
      icon: Eye,
      title: "Data we collect",
      points: [
        "Account info (name, phone number, email).",
        "Verification info (if required by law or security).",
        "Transaction info (amount, time, sender/receiver, reference notes).",
        "Device and usage info (app events, IP address, browser type).",
      ],
    },
    {
      id: "how-we-use",
      icon: ShieldCheck,
      title: "How we use your data",
      points: [
        "To create and manage your account.",
        "To process payments, cash-in, and cash-out.",
        "To prevent fraud and improve security.",
        "To provide customer support and service updates.",
      ],
    },
    {
      id: "sharing",
      icon: Eye,
      title: "When we share information",
      points: [
        "With trusted service providers who help run the platform (hosting, analytics, support).",
        "When required by law or valid legal requests.",
        "To protect users and the platform from fraud or abuse.",
      ],
    },
    {
      id: "security",
      icon: Lock,
      title: "Security",
      points: [
        "We use encryption and access controls to reduce risk.",
        "You should use a strong password and keep your login confidential.",
        "If you notice suspicious activity, contact support immediately.",
      ],
    },
    {
      id: "retention",
      icon: Clock,
      title: "Data retention",
      points: [
        "We keep data only as long as needed for service, legal, and security reasons.",
        "Some records may be stored longer to meet compliance requirements.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Top header */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700">
              Legal
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Privacy policy
            </h1>

            <p className="max-w-3xl text-base md:text-lg text-gray-600">
              This page explains what information we collect, how we use it, and the choices you
              have when using our digital wallet services.
            </p>

            <div className="text-sm text-gray-500">
              Last updated: <span className="font-semibold text-gray-700">{updatedDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* Left side nav */}
          <aside className="lg:sticky lg:top-6 h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">On this page</div>

            <nav className="mt-3 space-y-2 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {s.title}
                </a>
              ))}
              <a
                href="#contact"
                className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
              >
                Contact
              </a>
            </nav>

            <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="text-xs font-semibold text-indigo-800">Tip</p>
              <p className="mt-1 text-sm text-indigo-800/90">
                Keep your account safe: use a strong password and never share OTP or PIN.
              </p>
            </div>
          </aside>

          {/* Main sections */}
          <div className="space-y-6">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                    <s.icon className="h-5 w-5 text-indigo-600" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">{s.title}</h2>
                    <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-600">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}

            {/* Your rights */}
            <section
              id="rights"
              className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                  <ShieldCheck className="h-5 w-5 text-indigo-600" />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Your choices</h2>
                  <p className="mt-3 text-sm md:text-base text-gray-600">
                    Depending on your location and applicable laws, you may have rights to access,
                    correct, or delete your data, and to object to certain processing.
                  </p>

                  <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm text-gray-700">
                      You can request changes by contacting support. We may ask for verification
                      to protect your account.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Contact</h2>
                  <p className="mt-3 text-sm md:text-base text-gray-600">
                    Questions about privacy? Contact our support team and we’ll help.
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-200 p-4">
                      <div className="text-sm font-semibold text-gray-900">Email</div>
                      <div className="mt-1 text-sm text-gray-600">support@paywave.com</div>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-4">
                      <div className="text-sm font-semibold text-gray-900">Response time</div>
                      <div className="mt-1 text-sm text-gray-600">Usually within 24–48 hours</div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-500">
                    Note: This is a UI template. Replace contact details and legal text with your
                    official policy.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
