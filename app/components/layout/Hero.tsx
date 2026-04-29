 'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const IphoneModel = () => {
  const { scene } = useGLTF('/assets/models/iphone.glb')
  return <primitive object={scene} scale={2} position={[-1, 0.25, -0.2]} rotation={[0, 0.2, 0]} />
}

const MacbookModel = () => {
  const { scene } = useGLTF('/assets/models/macbook.glb')
  return <primitive object={scene} scale={0.1} position={[0.5, 0, 0]} rotation={[0, -0.5, 0]} />
}

useGLTF.preload('/assets/models/iphone.glb')
useGLTF.preload('/assets/models/macbook.glb')

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
        <section className='flex-1 justify-center items-center h-[80vh]'>
            <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
              <ambientLight intensity={0.45} />
              <hemisphereLight intensity={0.6} groundColor={'#d1d5db'} />
              <directionalLight position={[-3, 3, 2]} intensity={1.4} />
              <pointLight position={[-1.2, 1.2, 1.6]} intensity={1.2} distance={8} />
              <directionalLight position={[3, 2.5, 1.5]} intensity={1.1} />
              <pointLight position={[0.9, 0.8, 1.2]} intensity={0.9} distance={7} />
              <directionalLight position={[0, -1.5, -2]} intensity={0.35} />
              <Suspense fallback={null}>
                <IphoneModel />
                <MacbookModel />
              </Suspense>
            </Canvas>
        </section>
      </header> 
    </div>
  )
}

export default Hero
