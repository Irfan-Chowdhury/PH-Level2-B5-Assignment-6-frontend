import React from "react";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  Scale,
  Mail,
  Clock,
} from "lucide-react";

const Terms = () => {
  const updatedDate = "January 6, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: "Acceptance of terms",
      points: [
        "By using PayWave, you agree to these Terms & Conditions.",
        "If you do not agree, please stop using the service.",
        "We may update these terms from time to time; changes apply after they are posted.",
      ],
    },
    {
      id: "eligibility",
      icon: ShieldCheck,
      title: "Eligibility and account",
      points: [
        "You must provide accurate information during registration.",
        "You are responsible for keeping your login, PIN, and OTP confidential.",
        "We may suspend accounts that appear fraudulent or violate these terms.",
      ],
    },
    {
      id: "services",
      icon: CreditCard,
      title: "Services and payments",
      points: [
        "PayWave provides wallet services such as adding money, sending money, withdrawing, and viewing history.",
        "Transaction limits, fees, and availability may vary by region or method.",
        "Some features may require verification for security or legal compliance.",
      ],
    },
    {
      id: "prohibited",
      icon: AlertTriangle,
      title: "Prohibited activities",
      points: [
        "Using PayWave for illegal purposes or prohibited transactions.",
        "Attempting to hack, exploit, or overload the platform.",
        "Using another person’s account without permission.",
        "Providing false identity or verification documents.",
      ],
    },
    {
      id: "liability",
      icon: Scale,
      title: "Liability and disclaimers",
      points: [
        "We work to keep PayWave reliable, but we do not guarantee uninterrupted service.",
        "We are not responsible for losses caused by your device compromise, sharing OTP/PIN, or third-party scams.",
        "If the law allows, our total liability is limited to the amount of the disputed transaction.",
      ],
    },
    {
      id: "termination",
      icon: Clock,
      title: "Suspension or termination",
      points: [
        "We may suspend or terminate access to protect users, comply with law, or enforce these terms.",
        "You can stop using the service anytime; some records may remain for legal and security reasons.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-10">
          <span className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700">
            Legal
          </span>

          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Terms & conditions
          </h1>

          <p className="mt-3 max-w-3xl text-base md:text-lg text-gray-600">
            These terms explain the rules for using PayWave services, your responsibilities, and
            how we handle issues like account safety and prohibited activity.
          </p>

          <div className="mt-2 text-sm text-gray-500">
            Last updated: <span className="font-semibold text-gray-700">{updatedDate}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* Side nav */}
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
              <p className="text-xs font-semibold text-indigo-800">Important</p>
              <p className="mt-1 text-sm text-indigo-800/90">
                Never share your OTP, PIN, or password. PayWave support will never ask for them.
              </p>
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-6">
            {/* Intro card */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Quick summary (easy to understand)
                  </h2>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-gray-900">You can</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Use PayWave to add money, transfer, withdraw, and track transactions.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-gray-900">You must</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Keep your account safe and use the service legally.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-500">
                    Note: This is a UI template. Replace with your official legal terms reviewed
                    by a professional if needed.
                  </p>
                </div>
              </div>
            </section>

            {/* Terms sections */}
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
                    For questions about these terms, contact our support team.
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
                    Tip: Update the email, limits, fees, and legal parts to match your real policy.
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

export default Terms;
