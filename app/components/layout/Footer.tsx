import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-20 bg-gray-800 text-white'>
      <footer className='max-w-7xl mx-auto flex flex-row gap-10'>
        <div className='space-y-5 flex-1'>
            <h3 className='text-4xl'>boostim</h3>
            <p className='text-xs max-w-[30vw]'>We offers a comprehensive suite of digital marketing services that cover all aspectsof our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diversemarketing needs.</p>
            <div className='flex flex-row space-x-2'>
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
            </div>
        </div>
        <div className='flex-1 flex flex-row justify-between'>
            <div className='flex flex-col space-y-2'>
                <h4 className='text-2xl font-bold'>Navigation</h4>
                <Link href={""}>Service</Link>
                <Link href={""}>Agency</Link>
                <Link href={""}>Case Study</Link>
                <Link href={""}>Resource</Link>
                <Link href={""}>Contact</Link>
            </div>
            <div className='flex flex-col space-y-2'>
                <h4 className='text-2xl font-bold'>Licence</h4>
                <Link href={""}>Privacy Policy</Link>
                <Link href={""}>Copyright</Link>
                <Link href={""}>Email Adress</Link>
            </div>
            <div className='flex flex-col space-y-2'>
                <h4 className='text-2xl font-bold'>Contact</h4>
                <Link className='flex flex-row gap-2' href={""}>
                    <Phone />
                    <p>+420 777 777 777</p>
                </Link>
                <Link className='flex flex-row gap-2' href={""}>
                    <Mail />
                    <p>michaela@seznam.cz</p>
                </Link>
                <Link className='flex flex-row gap-2' href={""}>
                    <MapPin />
                    <p>Olomouc, 198 54</p>
                </Link>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
