import Image from "next/image";
import Hero from "./components/layout/Hero";
import { ArrowRight, Circle,  Play,  Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-20 space-y-20">
      <Hero />
      <div>
        <div className="max-w-7xl mx-auto flex flex-row items-center px-5 py-10 gap-5">
          <h3 className="flex-1 text-3xl font-bold">Provide the best service with <br/> out of the box ideas</h3>
          <h4 className="flex-1 text-xs">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</h4>
        </div>
        <div className="flex flex-row max-w-7xl mx-auto px-5 gap-5">
          <section className="flex-1 min-h-[25vw] rounded-3xl border p-5 flex flex-col justify-between ">
            <div>
              <p className="text-7xl">920+</p>
              <p>Project finish with superbly</p>
            </div>
            <div className="flex flex-row ">
              <Circle size={60} />
              <Circle size={60}   />
              <Circle size={60}  />
              <Circle size={60}  />
              <Plus size={50}  />
            </div>
          </section>
          <section className="relative flex-3 min-h-[25vw] rounded-3xl border p-5 bg-black flex items-center justify-center rounded-br-[50px]">
            <p className="text-[5vw]">HOW WE WORK</p>
            <Link href={""}>
              <Play fill="black" className="absolute  text-black rounded-full border-8 border-white translate-x-2 translate-y-2 p-9 right-0 bottom-0 bg-pink-400" size={120}/>
            </Link>
          </section>
        </div>
      </div>

      <div className="bg-gray-200 mx-5 py-20 rounded-2xl">
        <section className="max-w-7xl mx-auto flex flex-row items-center px-5 pb-10 gap-5">
          <h3 className="flex-1 text-3xl font-bold">Digital Marketing & SEO<br/> Services That Grow Traffic &<br/> Increase Revenue</h3>
          <div className="flex-1 space-y-5">
            <h4 className=" text-xs">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</h4>
            <Link className="px-5 py-2 border rounded-full" href={""}>See more</Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto flex flex-row gap-5 text-black">
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10 ">
            <h4 className="text-3xl">How a Digital Marketing Agency Can Boost Your Business</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-sm">We are the top digital marketing agency for branding corp. We offer a fullrang engine....</p>
              <Link className=" flex justify-end px-5 py-2 bg-pink-400 shadow-lg rounded-full text-black" href={""}><ArrowRight /></Link>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10">
            <h4 className="text-3xl">How a Digital Marketing Agency Can Boost Your Business</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-sm">We are the top digital marketing agency for branding corp. We offer a fullrang engine....</p>
              <Link className=" flex justify-end px-5 py-2 bg-black rounded-full shadow-lg text-white" href={""}><ArrowRight /></Link>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between bg-white shadow-sm rounded-4xl gap-10 ">
            <h4 className="text-3xl">How a Digital Marketing Agency Can Boost Your Business</h4>
            <div className="flex flex-row justify-between items-center">
              <p className="w-2/3 text-sm">We are the top digital marketing agency for branding corp. We offer a fullrang engine....</p>
              <Link className=" flex justify-end px-5 py-2 bg-black rounded-full shadow-lg text-white" href={""}><ArrowRight /></Link>
            </div>
          </div>
        </section>
      </div>


      <div className="mx-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <p className="text-3xl font-bold ">"They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition."</p>
          <div className="flex flex-row  justify-between items-center">
            <div className="flex flex-row items-center gap-5">
              <span className="w-15 h-15 bg-black rounded-full" />
              <div className="flex flex-col">
                <p className="font-bold text-lg">Michaela Zavadilová</p>
                <p className="text-xs">CEO of Basecamp Corp</p>
              </div>
            </div>
            <button>buttons</button>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-10  bg-black py-10 rounded-3xl">
          <p className="text-white text-5xl">Ready to work with us?</p>
          <Link className="border rounded-full px-10 py-2 bg-white text-black" href={""}>Get Started</Link>
        </div>
      </div>

      <div className="mx-5 bg-gray-200 py-20 rounded-2xl">
        <div className="px-5 max-w-7xl mx-auto flex flex-row gap-5">
          <div className="space-y-5 flex-1">
            <h3 className="text-5xl font-bold">Digital Marketing FAQs</h3>
            <p>As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</p>
            <div className="pt-5">
              <Link className="px-5 py-3 border rounded-full" href={""}>More Questions</Link>
              <Link className="px-5 py-3" href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex-1">

          </div>
        </div>
      </div>

    </div>
  );
}
