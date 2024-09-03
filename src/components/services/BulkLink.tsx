import Image from 'next/image'
import React from 'react'
function BulkLink() {
  return (
    <div className='flex flex-col lg:flex-row-reverse gap-10 justify-center items-center min-h-screen w-full p-8 bg-gray-100'>
    <div className='w-full lg:w-[440px]'>
      <h1 className='text-3xl font-semibold'>
      Bulk Links Creation
      </h1>
      <p className='text-xl mt-4'>
      Uploading a CSV or Excel file allows you to create multiple smart links at once, rather than creating each one individually.<br/><br/>
This is a great time-saving feature, particularly for large marketing campaigns, brand promotion, sales affiliate links, and managing multiple social media accounts.<br/><br/>
Bulk upload removes the tedious task of entering link data for each smart link, making the process more efficient and freeing up your time to focus on more important tasks.
      </p>
    </div>
    <div className='flex justify-center flex-col items-center gap-2'>
     <div className='flex md:[261px] flex-col justify-center items-center bg-white px-6 py-3 rounded-2xl'>
        <Image src='/images/exel.png' alt='image' width={50} height={50} />
        <h2 className=' my-4'>Uploading...</h2>
        <Image src='/images/progressbar.png' alt='image' width={200} height={100} />
     </div>
     <div className='md:w-[402px] md:h-[399px] px-3 py-4 bg-white rounded-2xl '>
        <h2 className='text-center font-bold'>36 links created successfully!</h2>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src='/images/sephora.png' alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src='/images/sephora.png' alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src='/images/sephora.png' alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src='/images/sephora.png' alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src='/images/sephora.png' alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>
        <button className='p-3 bg-gray-100 rounded-full flex gap-2 mt-2 w-full '><Image src='/images/sephora.png' alt='image' width={20} height={20}/><p>linkfluencer.io/sephora/celiahomes</p></button>

     </div>
    </div>
  </div>

  )
}

export default BulkLink