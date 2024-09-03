import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
function join() {
    const router = useRouter();
    const handleInfluencClick = () => {
        router.push('/signup/influencer');
    };
    const handleBrandClick = () => {
        router.push('/signup/brand');
    };
    return (
        <>
            <div className='flex justify-center items-center w-[100%] md:h-screen'>
                <div>
                    <h2 className='text-4xl md:text-8xl mb-8'>Join <br /> Linkfluencer</h2>
                    <div className='flex flex-wrap  gap-3'>
                        <div className='md:w-[370px] flex gap-2 border-black border rounded-2xl self-center  p-2 cursor-pointer ' onClick={handleInfluencClick}>
                            <div className='self-center p-8 bg-gray-200 rounded-xl '>
                                <Image src='/images/Influencer.png' alt="influencer" width={90} height={90} />
                            </div>
                            <div className='self-center'>
                                <h1 className='font-bold text-2xl'>Influencer</h1>
                                <p className='text-xl'>Make Everyday A Pay Day</p>
                                <Image className='float-right' src='/images/Dark.png' alt="influencer" width={40} height={40} />

                            </div>
                        </div>
                        <div className='md:w-[370px] flex gap-2 border-black border rounded-2xl self-center  p-2 cursor-pointer ' onClick={handleBrandClick}>

                            <div className='self-center p-8 bg-gray-200 rounded-xl '>
                                <Image src='/images/Brand.png' alt="influencer" width={90} height={90} />
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>Brand</h1>
                                <p className='text-xl'>Take Your Brand To Public</p>
                                <Image className='float-right' src='/images/Dark.png' alt="influencer" width={40} height={40} />
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