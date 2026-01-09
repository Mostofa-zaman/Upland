import { useState } from "react";
import faqImg from "../../assets/faq.png";

const faqs = [
  {
    question: "What is the free trial period?",
    answer:
      "You can use all premium features for free for 30 days. No credit card required.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No, you can start the free trial without adding any payment details.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings.",
  },
  {
    question: "Is customer support available?",
    answer: "Absolutely! Our support team is available 24/7 to help you.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="md:w-1/2 relative">
            {/* Image */}
            <img
              src={faqImg}
              alt="FAQ illustration"
              className="w-full rounded-lg"
            />

            {/* Play Button Overlay */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-4 shadow-lg hover:bg-white transition">
                {/* Triangle Play Icon */}
                <svg
                  className="w-15 h-15 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </button>
          </div>

          {/* FAQ Content */}
          <div className="md:w-1/2 min-h-105">
            <h2 className="text-4xl font-extrabold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg"
                  >
                    {faq.question}
                    <span className="text-2xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeIndex === index && (
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
