import Image from "next/image";
import Hero from "./components/layout/Hero";
import { ArrowLeft, ArrowRight, Circle,  Play,  Plus } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import FAQRightSide from "./components/Faq";

export default function Home() {
  return (
    <div className="pb-20 space-y-20">
      <Hero />
      <div className="mx-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <p className="text-xl sm:text-3xl text-pink-500 font-bold">"They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition."</p>
          <div className="flex flex-row  justify-between items-center">
            <div className="flex flex-row items-center gap-5">
              <span className="w-10 h-10 sm:w-15 sm:h-15 bg-black rounded-full" />
              <div className="flex flex-col">
                <p className="font-bold text-sm sm:text-lg">Michaela Zavadilová</p>
                <p className=" text-xs sm:text-xs">CEO of Basecamp Corp</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 sm:gap-5 items-center">
              <button className="px-2 sm:px-3 sm:py-1 rounded-full border border-pink-200 shadow-xs bg-pink-200">
                <ArrowLeft />
              </button>
              <p>1/3</p>
              <button className="px-2 sm:px-3 sm:py-1 rounded-full border border-pink-200 shadow-xs bg-pink-200">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-5 py-10 gap-5">
          <h3 className="sm:flex-1 text-2xl sm:text-3xl font-bold">Provide the best service with <br/> out of the box ideas</h3>
          <h4 className="sm:flex-1 text-xs">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</h4>
        </div>
        <div className="flex flex-col sm:flex-row max-w-7xl mx-auto px-5 gap-5">
          <section className="relative flex-1 min-h-[25vw] rounded-3xl border p-5 flex flex-col justify-between overflow-hidden bg-black text-white">
            
            {/* 🔥 blob pozadí */}
            <div className="absolute w-[300px] h-[300px] bg-white/20 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* content */}
            <div className="relative z-10">
              <p className="text-8xl text-white">920<span className="text-pink-300 ">+</span></p>
              <p>Project finish with superbly</p>
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

            <p className="text-3xl sm:text-6xl text-white/40 z-10 ">HOW WE WORK</p>

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

      <div className="bg-gray-200 mx-5 py-20 rounded-2xl">
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center px-5 pb-10 gap-5">
          <h3 className="flex-1 text-2xl sm:text-3xl font-bold">Digital Marketing & SEO Services That Grow Traffic & Increase Revenue</h3>
          <div className="flex-1 text-xs space-y-5">
            <h4 className=" text-xs">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</h4>
            <Link className="px-5 py-2 border rounded-full" href={""}>See more</Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 px-5 text-black">
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10 ">
            <h4 className="text-2xl sm:text-3xl">How a Digital Marketing Agency Can Boost Your Business</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-xs sm:text-sm">We are the top digital marketing agency for branding corp. We offer a fullrang engine....</p>
              <Link className=" flex justify-end px-5 py-2 bg-pink-400 shadow-lg rounded-full text-black" href={""}><ArrowRight /></Link>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10">
            <h4 className="text-2xl sm:text-3xl">How a Digital Marketing Agency Can Boost Your Business</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-xs sm:text-sm">We are the top digital marketing agency for branding corp. We offer a fullrang engine....</p>
              <Link className=" flex justify-end px-5 py-2 bg-black rounded-full shadow-lg text-white" href={""}><ArrowRight /></Link>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10 ">
            <h4 className="text-2xl sm:text-3xl">How a Digital Marketing Agency Can Boost Your Business</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-xs sm:text-sm">We are the top digital marketing agency for branding corp. We offer a fullrang engine....</p>
              <Link className=" flex justify-end px-5 py-2 bg-black rounded-full shadow-lg text-white" href={""}><ArrowRight /></Link>
            </div>
          </div>
        </section>
      </div>

      <div className="mx-5">
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-5 pb-10 gap-5">
          <h3 className="flex-1 text-2xl sm:text-3xl font-bold">Náš team</h3>
          <div className="flex-1 space-y-5">
            <h4 className=" text-xs">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</h4>
            <Link className="px-5 py-2 border rounded-full" href={""}>See more</Link>
          </div>
        </section>
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-5 ">
          <div className="flex-1 space-y-2 rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src={"/assets/team/misa.png"}
              alt="Teamový obrazek míši."
              width={1000}
              height={2000}
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-xl font-bold">Michaela Zavadilová</p>
              <p className="text-xs text-pink-500 ">Founder</p>
            </div>
          </div>
          <div className="flex-1 space-y-2 rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src={"/assets/team/misa.png"}
              alt="Teamový obrazek míši."
              width={1000}
              height={2000}
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-xl font-bold">Michaela Zavadilová</p>
              <p className="text-xs text-pink-500 ">Founder</p>
            </div>
          </div>
          <div className="flex-1 space-y-2 rounded-2xl shadow-sm overflow-hidden">
            <Image 
              src={"/assets/team/misa.png"}
              alt="Teamový obrazek míši."
              width={1000}
              height={2000}
            />
            <div className="px-5 pt-2 pb-5">
              <p className="text-xl font-bold">Michaela Zavadilová</p>
              <p className="text-xs text-pink-500 ">Founder</p>
            </div>
          </div>
        </section>
      </div>


      <div className="mx-5 bg-gray-200 py-20 rounded-2xl">
        <div className="px-5 max-w-7xl mx-auto flex flex-col sm:flex-row gap-5">
          <div className="space-y-5 flex-1 pb-5">
            <h3 className="text-2xl sm:text-5xl font-bold">Digital Marketing FAQs</h3>
            <p>As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</p>
            <div className="pt-5">
              <Link className="px-5 py-3 rounded-full bg-pink-400 shadow-sm" href={""}>More Questions</Link>
              <Link className="underline px-5 py-3" href={""}>Contact Us</Link>
            </div>
          </div>
          <FAQRightSide />
        </div>
      </div>

<div>
  <section className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-5 pb-10 gap-5">
    <h3 className="flex-1 text-2xl sm:text-3xl font-bold">Naše práce</h3>
    <div className="flex-1 space-y-5">
      <h4 className="text-xs">
        Podívejte se na projekty, které jsme realizovali pro naše klienty.
        Každý z nich je zaměřený na výkon, růst a reálné výsledky.
      </h4>
      <Link className="px-5 py-2 border rounded-full" href={""}>
        See more
      </Link>
    </div>
  </section>
  <section className="max-w-7xl mx-auto px-5">
    <div className="grid grid-cols-2 md:grid-cols-3">

      <div className="bg-gray-200 h-50 sm:h-70 flex items-end p-3">
        <p className="text-xl sm:text-2xl font-bold">CAFE DISTRICT</p>
      </div>

      <div className="bg-gray-300 h-50 sm:h-70 flex items-end p-3">
        <p className="text-xl sm:text-2xl font-bold">BRAND DESIGN</p>
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
        <p className="text-xl sm:text-2xl font-bold">SEO PROJECT</p>
      </div>

    </div>
  </section>
</div>

      <div className="px-5">
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row gap-5 items-center justify-between px-10  bg-black py-10 rounded-3xl">

          <div className="absolute w-[300px] h-[300px] bg-white/30 rounded-full blur-[100px] top-1/2 left-1/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-[300px] h-[300px] bg-white/30 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />


          <p className="text-white text-2xl sm:text-5xl">Ready to work with us?</p>
          <Link className="border rounded-full px-10 py-2 bg-white text-black" href={""}>Get Started</Link>
        </div>
      </div>

      

    </div>
  );
}
