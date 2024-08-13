import React from 'react'
import influencer from "../../public/images/influencer.png"
import Image from 'next/image'
import arrowBackDark from '../public/images/arrow_back_dark.png'
function join() {
    return (
        <>
            <div className='flex justify-center items-center w-[100%] md:h-screen'>
                <div>
                    <h2 className='text-4xl md:text-8xl mb-8'>Join <br /> Linkfluencer</h2>
                    <div className='flex flex-wrap  gap-3'>
                        <div className='md:w-[370px] flex gap-2 border-black border rounded-2xl self-center  p-4 '>
                            <div className='self-center p-8 bg-gray-200 rounded-xl '></div>
                            <div>
                                <h1 className='font-bold text-2xl'>Influencer</h1>
                                <p className='text-xl'>Make Everyday A Pay Day</p>
                                <Image className='float-right ' src={arrowBackDark} alt="Back" width={40} height={40} />

                            </div>
                        </div>
                        <div className='md:w-[370px] flex gap-2 border-black border rounded-2xl self-center w-fit p-4'>
                            <div className='self-center p-8 bg-gray-200 rounded-xl'></div>
                            <div>
                                <h1 className='font-bold text-2xl'>Brand</h1>
                                <p className='text-xl'>Take Your Brand To Public</p>
                                <div className='border border-black w-[40px] h-[40px] rounded-full flex justify-center float-right items-center bg-green-400'></div>
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-4 text-xl'>Already have an account?<b>Login</b></h1>
                </div>

            </div>
        </>
    )
}

export default join