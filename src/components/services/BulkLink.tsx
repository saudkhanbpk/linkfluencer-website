import Image from 'next/image'
import React from 'react'
import exel from '../../../public/images/exel.png'
import progressbar from '../../../public/images/progressbar.png'
import sephora from '../../../public/images/sephora.png'
function BulkLink() {
  return (
    <div className='flex flex-col lg:flex-row-reverse gap-10 justify-center items-center min-h-screen w-full p-8 bg-gray-100'>
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
    <div className='flex justify-center flex-col items-center gap-2'>
     <div className='flex md:[261px] flex-col justify-center items-center bg-white px-6 py-3 rounded-2xl'>
        <Image src={exel} alt='image' width={50} height={50} />
        <h2 className=' my-4'>Uploading...</h2>
        <Image src={progressbar} alt='image' width={200} height={100} />
     </div>
     <div className='md:w-[402px] md:h-[399px] px-3 py-4 bg-white rounded-2xl '>
        <h2 className='text-center font-bold'>36 links created successfully!</h2>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src={sephora} alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src={sephora} alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src={sephora} alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src={sephora} alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src={sephora} alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src={sephora} alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>

     </div>
    </div>
  </div>

  )
}

export default BulkLink