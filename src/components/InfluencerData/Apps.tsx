import Image from 'next/image'
import React from 'react'
import Apppic from '../../../public/images/apppic.png'
function Apps() {
  return (
    <div className='flex gap-10 flex-wrap justify-evenly items-center min-h-screen w-full p-8'>
        <div className='w-[440px]' >
            <h1 className='text-3xl font-semibold '>
            Unlock the power of smart links that open directly in mobile apps
            </h1>
            <p className='text-xl mt-4'>Unlock a new level of convenience and keep your audience engaged. With Linkfluencer.io Smart Links, 
                viewers can easily subscribe, explore, and follow you across all platforms.</p>

        </div>
        <div>
            <Image src={Apppic} alt='image' />
        </div>
    </div>
  )
}

export default Apps