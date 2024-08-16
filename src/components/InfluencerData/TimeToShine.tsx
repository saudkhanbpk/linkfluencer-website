import Image from 'next/image'
import React from 'react'
import Shine from '../../../public/images/Fram - Illustration.png'

function TimeToShine() {
  return (
    <div className='flex flex-col lg:flex-row-reverse gap-10 justify-evenly items-center min-h-screen w-full p-8 bg-gray-200'>
      <div className='w-full lg:w-[440px]'>
        <h1 className='text-3xl font-semibold'>
          Beyond likes, connect with brands that matter. It's your time to shine ✨
        </h1>
        <p className='text-xl mt-4'>
          Ditch the fleeting likes and forge meaningful connections. Forget empty
          engagement metrics and step into a world where you connect with brands that
          align with your values and passions. Our platform empowers you to go beyond
          the superficial and build genuine relationships with brands that resonate with you.
        </p>
      </div>
      <div>
        <Image src={Shine} alt='image' />
      </div>
    </div>
  )
}

export default TimeToShine
