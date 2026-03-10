import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const faqs = [
  { question: "How long does it take to get my resume?", answer: "We usually deliver resumes within 2–4 business days depending on the package." },
  { question: "Can I request revisions?", answer: "Yes! All packages include revisions. The number depends on the package you choose." },
  { question: "Do you provide LinkedIn profile optimization?", answer: "Absolutely! We optimize your LinkedIn profile for recruiters and ATS compatibility." },
  { question: "What payment methods are accepted?", answer: "We accept VISA, Mastercard, PayPal, and Stripe for secure checkout." },
  { question: "Can I chat directly with your team?", answer: "Yes! You can reach out via WhatsApp or our support chat for any questions." },
  { question: "Is my data secure?", answer: "Yes! All information is protected and never shared." },
  { question: "Do you offer discounts for students?", answer: "Yes! Contact us to know about current student discounts." },
  { question: "Can I upgrade my package later?", answer: "Absolutely! You can upgrade at any time before delivery." },
  { question: "Do you provide cover letter services?", answer: "Yes, all packages include a professional cover letter." },
  { question: "What if I need urgent delivery?", answer: "We offer 12-hour expedited delivery for an additional fee." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Left Sticky Card */}
        <div className="bg-gray-50 p-10 rounded-xl shadow-md flex flex-col justify-between sticky top-24 h-fit">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">FAQ</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">
              Can't find the answer you're looking for? Chat with our team directly.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <p className="text-gray-700 font-semibold">Abubakar</p>
            <p className="text-gray-600 text-sm">Still have questions? We usually reply in minutes.</p>
            <button className="mt-2 w-60 h-13 ml-30 flex items-center justify-center gap-2 bg-[#FF6900] hover:bg-[#e65c00] text-white font-semibold py-2 px-4 rounded-lg transition">
              <MessageCircle size={18} />
              Ask on WhatsApp +
            </button>
          </div>
        </div>

        {/* Right Scrollable Questions */}
        <div
          className="max-h-175 overflow-y-auto space-y-4 pr-2"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none" // IE 10+
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm group transition hover:shadow-md"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;