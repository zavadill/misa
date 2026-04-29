"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results and allows optimization based on data.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Through SEO, paid ads, and content marketing, your website can rank higher in search engines and reach more relevant users.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "It depends on the strategy. Paid ads can work almost instantly, while SEO usually takes a few months.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Using metrics like traffic, conversions, ROI, CTR, and engagement rates.",
  },
];

export default function FAQRightSide() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex-1">
      <div className="divide-y">
        {faqs.map((faq, index) => (
          <div key={index} className="py-5">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-semibold text-base sm:text-lg">
                {faq.question}
              </span>
              <span className="text-base sm:text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}