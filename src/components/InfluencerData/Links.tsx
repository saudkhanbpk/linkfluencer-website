import Image from 'next/image'
import React from 'react'
import profile from '../../../public/images/image 156.png'
import youlink from '../../../public/images/youlink.png'
import post from '../../../public/images/Posts.png'
import insta from '../../../public/images/insta.png'



function Links() {

    return (
        <div className='min-h-screen bg-gray-100 w-full px-3 md:flex items-center gap-16 justify-center py-[100px]'>
            <div className='text-center flex md:mb-0 mb-10 flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold'>Normal link</h1>
                <p className='text-xl'>Unlock a new level of convenience and keep your</p>
                <Image className='my-5' src={insta} alt='insta' width={50} height={50} />
                <div className='md:w-[330px]  rounded-xl'>

                    <div className='bg-[#F3C6E2] py-5 px-3 flex gap-2 rounded-t-xl '>
                        <Image src={profile} className='self-center' alt='profile' width={100} height={100}  />
                        <div>
                            <h1 className='text-[#74265A] font-semibold text-xl'>@johndoe1988</h1>
                            <button className='py-2 px-4 rounded-full bg-[#74265A] my-1 text-white'>Following</button>
                            <Image src={youlink} alt='link' width={150} height={150}  />
                        </div>
                    </div>
                    <Image className='rounded-b-xl' src={post} alt='posts' width={330} height={300}   />
                </div>

            </div>
            <div className='text-center flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold'>Smart link</h1>
                <p className='text-xl'>With smart links, viewers can easily buy and subscribe</p>
                <Image className='my-5' src={insta} alt='insta' width={50} height={50} />
                <div className='md:w-[330px]  rounded-xl'>

                    <div className='bg-[#F3C6E2] py-5 px-3 flex gap-2 rounded-t-xl '>
                        <Image src={profile} className='self-center' alt='profile' width={100} height={100}   />
                        <div>
                            <h1 className='text-[#74265A] font-semibold text-xl'>@johndoe1988</h1>
                            <button className='py-2 px-4 rounded-full bg-[#74265A] my-1 text-white'>Following</button>
                            <Image src={youlink} alt='link' width={150} height={150}   />
                        </div>
                    </div>
                    <Image className='rounded-b-xl' src={post} alt='posts' width={330} height={300}  />
                </div>
            </div>
        </div>
    )
}

export default Links