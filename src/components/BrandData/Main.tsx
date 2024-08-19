import Image from 'next/image'
import React from 'react'
import brand from '../../../public/images/Brand 1.2 - images.png'
import band13 from '../../../public/images/Brand 1.3 - links.png'
import adidas from '../../../public/images/Profile - Amazon.png'
import youtube from '../../../public/images/youtube.png'


function Main() {
  return (
    <div className='flex gap-8 flex-wrap justify-center items-center min-h-screen w-full p-8'>
      <div className='w-[440px]' >
        <h1 className='text-3xl font-semibold '>
          Unlock your influence with
          Linkfluencer.io
        </h1>
        <p className='text-xl mt-4'>Unlock a new level of convenience and keep your audience engaged. With Linkfluencer.io Smart Links,
          viewers can easily subscribe, explore, and follow you across all platforms.</p>

      </div>
      <div className='w-full md:w-[500px] '>
        <div>
        <Image src={band13} alt='button' className=' md:w-auto w-[180px] relative top-14 md:top-20 left-2 md:left-6' /> 
        <Image src={brand} alt='image' className='md:w-auto w-[200px]'    />
        </div>
        <div className='relative bottom-60 md:bottom-80 left-40 md:left-72 md:w-fit w-[200px] '>
        <Image src={youtube} alt='insta'  className='relative left-20 md:left-32 bottom-5 md:bottom-10' />
        <Image src={adidas} alt='adidas' />
        </div>
      </div>
    </div>
  )
}

export default Main