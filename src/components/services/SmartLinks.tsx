import Image from 'next/image'
import React from 'react'
function SmartLinks() {
    return (
        <div className='md:flex flex flex-col md:flex-row  gap-10 justify-center items-center min-h-screen w-full p-8 bg-gray-100'>
            <div className='w-full lg:w-[440px]'>
                <h1 className='text-2xl  md:text-start text-center md:text-3xl font-semibold'>
                    Smart Links Creation
                </h1>
                <p className='text-xl mt-4'>
                    Linkfluencer’s smart links take your links to the next level. They cleverly redirect users to the most fitting platform. Imagine sharing your YouTube channel on Instagram - a SmartLink would open it directly in the YouTube app, keeping viewers engaged.
                    Smart links - it's a smarter way to connect and grow with your audience.
                </p>
            </div>
            <div className='md:flex flex-col justify-center items-center gap-3'>
               <button className='p-3 rounded-xl flex  gap-2 bg-white w-[280px] md:w-[500px] text-start'><Image src='/images/youtube.png' alt='icon' width={20} height={20}/><p  className='md:text-[16px] text-[8px]'>www.youtube.com/johndoe- DAINpyAeI-1fpg4Ge% 26fbclid%3DPAZXh0bgNhZW0CMTEAAaYZwbZkAr38H<br/>9NsZJVPqJWJ</p></button>
               <button className='p-3 rounded-xl flex  gap-2 bg-white w-[280px]  md:w-[500px] text-start md:my-0 my-3'><Image src='/images/youtube.png' alt='icon' width={20} height={20}/><p className='md:text-[16px] text-[8px]'>www.amazon.com/shop/johndoe ref=QAHzEditorial _en_IN_1?ref_=cm_sw_r_cp_ud_aip sfshop_aipsfthev world__J7RXVJC6CVQTGM313WFW</p></button>
               <button className='bg-[#020D3A] py-3 px-5 rounded-full text-white w-fit flex gap-2 relative left-32  md:left-16'> <Image className='self-center  ' src='/images/Icon_smart.png' alt='icon' width={10} height={10}/><p className='md:text-[16px] text-[8px]'>Create Smart Link</p></button>
               <div className='md:float-start float-end md:my-0 my-3'>
               <button className='p-3 relative  md:left-60 rounded-full flex  gap-2 bg-white  '><Image src='/images/youtube.png' alt='icon' width={20} height={20}/><p className='md:text-[16px] text-[8px]'>linkfluencer.io/youtube/johndoe</p></button>
               <button className='p-3 relative  md:left-60 rounded-full flex gap-2  bg-white mt-3 '><Image src='/images/youtube.png' alt='icon' width={20} height={20}/><p className='md:text-[16px] text-[8px]'>linkfluencer.io/amazon/johndoe</p></button>
               </div>
            </div>
        </div>
    )
}

export default SmartLinks