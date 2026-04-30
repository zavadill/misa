
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'



const Hero = () => {
  return (
    <div id='header' className='bg-linear-to-t from-pink-200 via-white to-white'>
      <header className='max-w-7xl mx-auto flex sm:flex-row min-h-screen items-end pb-10 sm:pb-0 sm:items-center gap-5 px-5'>
        <section className='flex-1 space-y-7'>
            <h1 className='text-4xl sm:text-7xl font-bold leading-8 sm:leading-15'>Stay ahead of the curve with our forward-thinking</h1>
            <h2 className='text-gray-500 text-xs sm:text-base'>An award-winning SEO agency with disciplines in digital marketing. design, and website development. focused on understanding you.</h2>
            <div className='flex flex-col  sm:flex-row gap-5'>
                <Link className='px-5 py-2 border flex flex-row items-center gap-5 bg-black text-white shadow-sm rounded-full' href={""}>
                  <span>Schedule Call</span>
                  <ArrowRight className='' size={16}/>
                </Link>
                <Link className='px-5 py-2 underline' href={""}>View case study</Link>
            </div>
            <div className='flex flex-row gap-10 justify-center sm:justify-start items-center mt-10'>
                <p className=' text-xs sm:text-base w-1/4'>Trusted by the world's biggest brands</p>
                <Image 
                  src={"/assets/logo/company-logos.png"}
                  alt='Logo firem'
                  className='w-50 sm:w-100'
                  width={2000}
                  height={1000}
                />
            </div>
        </section>
        <section className='flex-1 hidden sm:flex justify-center items-center'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row gap-5'>
              <div className=' aspect-square h-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden'>
                <div className='rounded-tl-full bg-black w-full h-full'>

                </div>
              </div>
              <div className='bg-black aspect-square h-50 w-61 rounded-2xl overflow-hidden p-5'>
 2
              </div>
            </div>
            <div className='h-50 bg-black rounded-2xl overflow-hidden p-5'>
 3
            </div>
          </div>
        </section>
      </header> 
    </div>
  )
}

export default Hero
