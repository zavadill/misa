import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-20 bg-gray-200 text-black'>
      <footer className='max-w-7xl mx-auto flex flex-col p-5 sm:flex-row gap-10'>
        <div className='space-y-5 flex-1'>
            <h3 className='text-4xl'>boostim</h3>
            <p className='text-xs w-full sm:max-w-[30vw]'>Postaráme se o váš kompletní digitální ekosystém: sociální sítě, obsah, kampaně i weby. Propojujeme kanály tak, aby spolu ladily a přinášely vám klidnější provoz i lepší výsledky.</p>
            <div className='flex flex-row space-x-2'>
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
                <span className='h-12 w-12 bg-gray-300 rounded-full' />
            </div>
        </div>
        <div className='flex-1 flex flex-col gap-5 sm:flex-row justify-between'>
            <div className='flex flex-col space-y-2'>
                <h4 className='text-2xl font-bold'>Navigace</h4>
                <Link href={""}>Služby</Link>
                <Link href={""}>O nás</Link>
                <Link href={""}>Reference</Link>
                <Link href={""}>Blog</Link>
                <Link href={""}>Kontakt</Link>
            </div>
            <div className='flex flex-col space-y-2'>
                <h4 className='text-2xl font-bold'>Právní informace</h4>
                <Link href={""}>Ochrana osobních údajů</Link>
                <Link href={""}>Autorská práva</Link>
                <Link href={""}>E-mail</Link>
            </div>
            <div className='flex flex-col space-y-2'>
                <h4 className='text-2xl font-bold'>Kontakt</h4>
                <Link className='flex flex-row gap-2 items-center' href={""}>
                    <Phone size={18}/>
                    <p>+420 777 777 777</p>
                </Link>
                <Link className='flex flex-row gap-2 items-center' href={""}>
                    <Mail size={18} />
                    <p>michaela@seznam.cz</p>
                </Link>
                <Link className='flex flex-row gap-2 items-center' href={""}>
                    <MapPin size={18} />
                    <p>Olomouc, 198 54</p>
                </Link>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
