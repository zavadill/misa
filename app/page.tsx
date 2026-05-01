import Image from "next/image";
import Hero from "./components/layout/Hero";
import { ArrowLeft, ArrowRight, Circle,  Play,  Plus } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import FAQRightSide from "./components/Faq";
import Testimonials from "./components/Slide";

export default function Home() {
  return (
    <div className="pb-20 space-y-20">
      <Hero />
      <div className="mx-5">
        <Testimonials />
      </div>
      <div id="services">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-5 py-10 gap-5">
          <h3 className="sm:flex-1 text-2xl sm:text-3xl font-bold">Služby, které dávají smysl – <br/> od prvního nápadu po měřitelné výsledky</h3>
          <h4 className="sm:flex-1 text-xs">Jsme tým, který propojuje správu sociálních sítí, marketing a tvorbu webů. Pomáháme firmám být konzistentní na všech kanálech, šetřit čas a soustředit se na to, co jim vydělává – zatímco my hlídáme obsah, kampaně a technický provoz.</h4>
        </div>
        <div className="flex flex-col sm:flex-row max-w-7xl mx-auto px-5 gap-5">
          <section className="relative flex-1 min-h-[25vw] rounded-3xl border p-5 flex flex-col justify-between overflow-hidden bg-black text-white">
            
            {/* 🔥 blob pozadí */}
            <div className="absolute w-[300px] h-[300px] bg-white/40 rounded-full blur-[100px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* content */}
            <div className="relative z-10">
              <p className="text-8xl text-white">920<span className="text-pink-300 text-6xl">+</span></p>
              <p>projektů, které máme za sebou</p>
            </div>

            <div className="relative z-10 hidden sm:flex flex-row">
              <Circle size={60} />
              <Circle size={60} />
              <Circle size={60} />
              <Circle size={60} />
              <Plus size={50} />
            </div>

          </section>
          <section
            className="relative flex-3 min-h-[50vw] sm:min-h-[25vw] rounded-3xl p-5 flex items-center justify-center rounded-br-[50px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/team/team.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-3xl rounded-br-[50px]"></div>

            <p className="text-3xl sm:text-6xl text-white/60 z-10 ">JAK PRACUJEME</p>

            <Link href={""}>
              <Play
                fill="black"
                className="absolute text-black rounded-full border-8 border-white translate-x-2 translate-y-2 w-20 sm:w-35 p-5 h-20 sm:h-35 right-0 bottom-0 bg-pink-400 z-10"
                size={120}
              />
            </Link>
          </section>  
        </div>
      </div>

      <div id="services-two" className="bg-gray-200 mx-5 py-20 rounded-2xl">
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center px-5 pb-10 gap-5">
          <h3 className="flex-1 text-2xl sm:text-3xl font-bold">Marketing, sociální sítě a weby, které přivádějí klienty</h3>
          <div className="flex-1 text-xs space-y-5">
            <h4 className=" text-xs">Od plánu obsahu přes reklamu až po rychlé a přehledné weby – stavíme na datech a na tom, co u vaší cílovky skutečně funguje. Každý kanál doplňuje ten druhý, takže vaše značka působí jednotně.</h4>
            <Link className="px-5 py-2 border rounded-full" href={""}>Více o službách</Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 px-5 text-black">
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10 ">
            <h4 className="text-2xl sm:text-3xl">Správa sociálních sítí, která nezapadne v feedu</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-xs sm:text-sm">Kalendář příspěvků, grafika, texty i komunikace s komunitou – držíme tón značky a šetříme vám čas na provoz firmy.</p>
              <Link className=" flex justify-end px-5 py-2 bg-pink-400 shadow-lg rounded-full text-black" href={""}><ArrowRight /></Link>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10">
            <h4 className="text-2xl sm:text-3xl">Marketing a kampaně s jasným cílem</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-xs sm:text-sm">Nastavíme reklamu, měříme výkon a ladíme rozpočet tak, aby přinášel co nejlepší výsledek.</p>
              <Link className=" flex justify-end px-5 py-2 bg-black rounded-full shadow-lg text-white" href={""}><ArrowRight /></Link>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10 ">
            <h4 className="text-2xl sm:text-3xl">Weby a prezentace, které prodávají</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-xs sm:text-sm">Návrh, obsah i technické zpracování – rychlé načítání, mobil a struktura, která vede návštěvníka k akci.</p>
              <Link className=" flex justify-end px-5 py-2 bg-black rounded-full shadow-lg text-white" href={""}><ArrowRight /></Link>
            </div>
          </div>
        </section>
      </div>

      <div id="team" className="mx-5">
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-5 pb-10 gap-5">
          <h3 className="flex-1 text-2xl sm:text-3xl font-bold">Náš tým</h3>
          <div className="flex-1 space-y-5">
            <h4 className=" text-xs">Za každým projektem stojí lidé, kteří rozumí sociálním sítím, kampaním i webům. Společně držíme laťku v kvalitě komunikace i v tom, co klientům reálně přináší výsledky.</h4>
            <Link className="px-5 py-2 border rounded-full" href={""}>Více o nás</Link>
          </div>
        </section>
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-5 ">
          <div className="flex-1 space-y-2 rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src={"/assets/team/misa.png"}
              alt="Týmová fotografie Michaely Zavadilové."
              width={1000}
              height={2000}
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-xl font-bold">Michaela Zavadilová</p>
              <p className="text-xs text-pink-500 ">Zakladatelka</p>
            </div>
          </div>
          <div className="flex-1 space-y-2 rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src={"/assets/team/misa.png"}
              alt="Týmová fotografie Michaely Zavadilové."
              width={1000}
              height={2000}
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-xl font-bold">Michaela Zavadilová</p>
              <p className="text-xs text-pink-500 ">Zakladatelka</p>
            </div>
          </div>
          <div className="flex-1 space-y-2 rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src={"/assets/team/misa.png"}
              alt="Týmová fotografie Michaely Zavadilové."
              width={1000}
              height={2000}
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-xl font-bold">Michaela Zavadilová</p>
              <p className="text-xs text-pink-500 ">Zakladatelka</p>
            </div>
          </div>
        </section>
      </div>


      <div id="faq" className="mx-5 bg-gray-200 py-20 rounded-2xl">
        <div className="px-5 max-w-7xl mx-auto flex flex-col sm:flex-row gap-5">
          <div className="space-y-5 flex-1 pb-5">
            <h3 className="text-2xl sm:text-5xl font-bold">Časté dotazy</h3>
            <p>Odpovídáme na otázky kolem sociálních sítí, marketingu a webů – abyste měli jasno ještě před začátkem spolupráce.</p>
            <div className="pt-5">
              <Link className="px-5 py-3 rounded-full bg-pink-400 shadow-sm" href={""}>Další dotazy</Link>
              <Link className="underline px-5 py-3" href={""}>Kontakt</Link>
            </div>
          </div>
          <FAQRightSide />
        </div>
      </div>

      <div id="projects">
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-5 pb-10 gap-5">
          <h3 className="flex-1 text-2xl sm:text-3xl font-bold">Naše práce</h3>
          <div className="flex-1 space-y-5">
            <h4 className="text-xs">
              Podívejte se na projekty, které jsme realizovali pro naše klienty.
              Každý z nich je zaměřený na výkon, růst a reálné výsledky.
            </h4>
            <Link className="px-5 py-2 border rounded-full" href={""}>
              Zobrazit více
            </Link>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-3">

            <div className="bg-gray-200 h-50 sm:h-70 flex items-end p-3">
              <p className="text-xl sm:text-2xl font-bold">CAFE DISTRICT</p>
            </div>

            <div className="bg-gray-300 h-50 sm:h-70 flex items-end p-3">
              <p className="text-xl sm:text-2xl font-bold">IDENTITA ZNAČKY</p>
            </div>

            <div className="bg-gray-200 h-50 sm:h-70 flex items-end p-3">
              <p className="text-xl sm:text-2xl font-bold">E-SHOP</p>
            </div>

            <div className="bg-gray-300 h-50 sm:h-70 flex items-end p-3">
              <p className="text-xl sm:text-2xl font-bold">STARTUP</p>
            </div>

            <div className="bg-gray-200 h-50 sm:h-70 flex items-end p-3">
              <p className="text-xl sm:text-2xl font-bold">MARKETING</p>
            </div>

            <div className="bg-gray-300 h-50 sm:h-70 flex items-end p-3">
              <p className="text-xl sm:text-2xl font-bold">SEO PROJEKT</p>
            </div>

          </div>
        </section>
      </div>

      <div className="px-5">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-black px-8 py-12 text-center sm:flex-row sm:gap-6 sm:px-10 sm:py-12 sm:text-left">
          <div
            className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-pink-500/25 blur-[100px] top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-white/20 blur-[90px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />

          <p className="relative z-10 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Pojďme společně posunout váš byznys online
          </p>
          <Link
            className="relative z-10 shrink-0 rounded-full border border-white/20 bg-white px-8 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-pink-100 hover:text-black"
            href=""
          >
            Domluvit spolupráci
          </Link>
        </div>
      </div>

      

    </div>
  );
}
