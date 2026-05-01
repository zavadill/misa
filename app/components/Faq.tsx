"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Proč investovat do sociálních sítí a online marketingu?",
    answer:
      "Díky nim oslovíte lidi tam, kde už tráví čas – a můžete měřit, co funguje. Kombinace obsahu, reklamy a webu vám přivádí zájemce, posiluje značku a dává přehledné čísla místo pocitů.",
  },
  {
    question: "Jak zlepšíte viditelnost mého webu ve vyhledávání?",
    answer:
      "Pracujeme na struktuře stránek, obsahu i technickém základu (SEO), doplňujeme to cílenou reklamou tam, kde dává smysl. Cíl je, aby vás našli ti, kteří už hledají právě vaše služby.",
  },
  {
    question: "Jak brzy uvidím první výsledky?",
    answer:
      "Záleží na kanálu a rozpočtu. U placené reklamy často během dnů, u organického růstu na sítích a SEO počítejte spíš s týdny až měsíci – ale s jasným plánem a pravidelným vyhodnocováním.",
  },
  {
    question: "Jak měříte úspěch kampaní a obsahu?",
    answer:
      "Sledujeme například návštěvnost, konverze, návratnost investic (ROI), zapojení u příspěvků a cenu za kontakt. Vždy vycházíme z cílů, které si na začátku společně nastavíme.",
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