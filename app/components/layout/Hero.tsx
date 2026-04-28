import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=''>
      <header className='max-w-7xl mx-auto flex flex-row min-h-screen items-center gap-5 px-5'>
        <section className='flex-1 space-y-10'>
            <h1 className='text-7xl'>Stay ahead of the curve with our forward-thinking</h1>
            <h2 className='text-gray-500'>An award-winning SEO agency with disciplines in digital marketing. design, and website development. focused on understanding you.</h2>
            <div className='flex flex-row gap-5'>
                <Link className='px-5 py-2 border border-gray-300 shadow-sm rounded-full' href={""}>Schedule Call</Link>
                <Link className='px-5 py-2 underline' href={""}>View case study</Link>
            </div>
            <div className='flex flex-row gap-10 items-center'>
                <p className=''>Trusted by the world's<br/> biggest brands</p>
                <div className='flex flex-row gap-5 text-gray-500'>
                    <p>afterpay</p>
                    <p>basecamp</p>
                    <p>maze</p>
                </div>
            </div>
        </section>
        <section className='flex-1'>
            <div className=' w-full h-115 bg-black'>
s
            </div>
        </section>
      </header> 
    </div>
  )
}

export default Hero
