"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Důkladně pochopili náš obor i cílovku a připravili kampaně, které opravdu oslovují naše zákazníky – bez zbytečného chaosu v komunikaci.",
    name: "Michaela Zavadilová",
    role: "CEO, Basecamp Corp",
  },
  {
    id: 2,
    text: "Kreativní nápady a srozumitelné nastavení reklamy nám pomohly držet krok s konkurencí a konečně mít v marketingu systém.",
    name: "Jan Novák",
    role: "Marketingový ředitel",
  },
  {
    id: 3,
    text: "Spolupráce s nimi byla jedno z nejlepších rozhodnutí pro růst značky. Doporučuji každému, kdo to s online prezentací myslí vážně.",
    name: "Petr Svoboda",
    role: "Zakladatel, StartupX",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 150);
  };

  const prevSlide = () => {
    const newIndex =
      current === 0 ? testimonials.length - 1 : current - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      current === testimonials.length - 1 ? 0 : current + 1;
    changeSlide(newIndex);
  };

  const testimonial = testimonials[current];

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      
      {/* FIXED HEIGHT CONTAINER */}
      <div className="min-h-[120px] sm:min-h-[160px] flex items-start">
        <p
          className={`text-xl sm:text-3xl text-black font-bold transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          "{testimonial.text}"
        </p>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-5">
          <span className="w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full" />
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-lg">
              {testimonial.name}
            </p>
            <p className="text-xs">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex flex-row gap-2 sm:gap-5 items-center">
          <button
            onClick={prevSlide}
            className="px-2 sm:px-3 sm:py-1 rounded-full border border-pink-200 shadow-xs bg-pink-200"
          >
            <ArrowLeft />
          </button>

          <p>
            {current + 1}/{testimonials.length}
          </p>

          <button
            onClick={nextSlide}
            className="px-2 sm:px-3 sm:py-1 rounded-full border border-pink-200 shadow-xs bg-pink-200"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;