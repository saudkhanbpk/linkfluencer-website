import React from 'react'
import social from '../../../public/images/social.png'
import vector360 from '../../../public/images/Vector 630.png'
import Image from 'next/image'
import { FaArrowUp } from 'react-icons/fa'
function BrandMarketer() {
    return (
        <div className='md:flex flex flex-col md:flex-row  gap-10 justify-center items-center min-h-screen w-full p-8 '>
            
            <div className='w-full lg:w-[440px] self-center'>
                <h1 className='text-2xl md:text-start text-center md:text-3xl font-semibold'>
                    Turn your customers into your brand marketer
                </h1>
                <p className='text-xl mt-4'>
                    With our smart linking capability, you can enhance user experience and boost engagement by ensuring that your links open directly in mobile apps, rather than app browsers.
                    Say goodbye to the hassle of switching between apps and hello to seamless navigation.
                </p>
            </div>
            <div className=' relative md:right-0 right-16  '>
            <div className='  md:w-[323px] h-[100px] md:h-[181px] rounded-2xl bg-[#B8F9CF] px-3 md:px-8 pt-4 md:pt-10 relative left-32 md:left-48 top-20 '>
                    <div className='flex gap-2'><h1 className='text-2xl  md:text-4xl font-bold'>$810.25</h1>  <FaArrowUp className='self-center' /></div>
                    <p>Total earnings </p>
                    <Image className=' -mt-14 w-[190px] md:w-[300px]' src={vector360} alt='icon' width={100} height={100} />
                </div>
                <div className='md:h-[407px] w-[220px] md:w-[402px] bg-gray-100 rounded-2xl px-3 md:px-8 pt-4 md:pt-10 pb-3 md:pb-0'>
                    <div className='flex gap-2'><h1 className='text-2xl md:text-4xl font-bold'>82.23k</h1>  <FaArrowUp className='self-center' /></div>
                    <p>User visits </p>
                    <Image className='mt-8' src={social} alt='icon' width={300} height={300} />
                </div>
               


            </div>
        </div>
    )
}

export default BrandMarketer