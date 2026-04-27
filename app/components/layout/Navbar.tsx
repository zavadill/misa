import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-15 fixed w-full top-0 z-50 bg-white'>
      <nav className='flex flex-row items-center h-full justify-between max-w-7xl mx-auto px-5'>
        <div className='gap-15 flex flex-row'>
            <Link href={"/"}>
                Logo
            </Link>
            <div className='flex flex-row gap-5'>
                <Link href={""}>Service</Link>
                <Link href={""}>Agency</Link>
                <Link href={""}>Case study</Link>
                <Link href={""}>Resources</Link>
                <Link href={""}>Contact</Link>
            </div>
        </div>
        <Link className='px-5 py-2 border rounded-full' href={""}>Get started</Link>
      </nav>
    </div>
  )
}

export default Navbar
