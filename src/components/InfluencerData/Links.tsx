import Image from 'next/image'
import React from 'react'
function Links() {

    return (
        <div className='bg-gray-100 w-full md:flex items-center gap-16 justify-around py-[40px] px-[20px] md:px-[80px]'>
            <div className='text-center flex md:mb-0 mb-10 flex-col justify-center items-center'>
                <h1 className='text-[20px] md:text-[40px] font-semibold text-[#2D2D2D] font-header'>Normal link</h1>
                <p className='text-[12px] md:text-[18px] font-content'>Unlock a new level of convenience and keep your</p>
                <Image className='my-5' src='/images/insta.png' alt='insta' width={45} height={45} />
                <div className=' w-[212px] md:w-[330px]  rounded-xl'>

                    <div className='bg-[#F3C6E2] py-5 px-3 flex gap-2 rounded-t-xl '>
                        <Image src='/images/image 156.png' className='self-center' alt='profile' width={100} height={100}  />
                        <div className='border flex flex-col items-start'>
                            <h1 className='text-[#74265A] font-semibold text-[12px]'>@johndoe1988</h1>
                            <button className='rounded-full bg-[#74265A] my-1 text-white w-[51px] h-[19px] md:h-[30px] md:w-[85px] text-[7.2px] md:text-[12px]'>Following</button>
                            <Image src='/images/youlink.png' alt='link' width={150} height={150}  />
                        </div>
                    </div>
                    <Image className='rounded-b-xl' src='/images/Posts.png' alt='posts' width={330} height={300}   />
                </div>

            </div>
             <div className='text-center flex md:mb-0 mb-10 flex-col justify-center items-center'>
                <h1 className='text-[20px] md:text-[40px] font-semibold text-[#2D2D2D] font-header'>Smart link</h1>
                <p className='text-[12px] md:text-[18px] font-content'>With smart links, viewers can easily buy and subscribe</p>
                <Image className='my-5' src='/images/insta.png' alt='insta' width={45} height={45} />
                <div className=' w-[212px] md:w-[330px]  rounded-xl'>

                    <div className='bg-[#F3C6E2] py-5 px-3 flex gap-2 rounded-t-xl '>
                        <Image src='/images/image 156.png' className='self-center' alt='profile' width={100} height={100}  />
                        <div className='border flex flex-col items-start'>
                            <h1 className='text-[#74265A] font-semibold text-[12px]'>@johndoe1988</h1>
                            <button className='rounded-full bg-[#74265A] my-1 text-white w-[51px] h-[19px] md:h-[30px] md:w-[85px] text-[7.2px] md:text-[12px]'>Following</button>
                            <Image src='/images/youlink.png' alt='link' width={150} height={150}  />
                        </div>
                    </div>
                    <Image className='rounded-b-xl' src='/images/Posts.png' alt='posts' width={330} height={300}   />
                </div>

            </div>
        </div>
    )
}

export default Links