import Image from 'next/image'
import React from 'react'
import Links from './Links'
import Apps from './Apps'
import TimeToShine from './TimeToShine'
import Plateforms from './Plateforms'
import { IoLinkOutline } from 'react-icons/io5'
function InfluencerData() {
    return (
        <div className='flex flex-col justify-center items-center w-full  '>
            <div className='p-8'>
                <div className=' flex-col justify-center items-center md:flex hidden '>

                    <h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>Open link in bio natively  across 30+ Apps</h1>
                    <p className='text-xl text-[#113E53] mt-4 '>Super tool that helps you grow across all social media apps and get better brand deals!!</p>
                    <div>
                       <div className='flex'> <input className='md:w-[400px] border p-3 rounded-full mt-5 self-center ' type='text' placeholder='Paste your link here' />  <IoLinkOutline className='self-center text-3xl text-gray-200 relative z-10 right-12 top-2' /> </div>
                        <div className='flex justify-center mt-4'>
                            <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
                                Create Smart Link
                            </button>
                        </div>

                    </div>
                </div>
                {/* images section  */}
                <div className='flex flex-wrap md:flex-nowrap  gap-4 mt-4 pb-10 w-full'>
                    <div className='flex gap-4'>
                        <div className='md:self-end w-full  md:w-[300px]'>
                            <Image src='/images/Frame 1261153494.png' alt='image'  width={300} height={300} />
                            <Image className='my-2' src='/images/Link-Twitch.png' alt='image'  width={300} height={300}  />
                            <Image src='/images/spotify.png' alt='image'   width={300} height={300}  />

                        </div>
                        <div className=' relative md:self-end w-[300px]'>
                            <Image src='/images/Animation - Youtube.png' alt='image'  width={300} height={300}    />
                            <Image className='my-2' src='/images/image 33.png' alt='image'  width={300} height={300}   />


                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center  md:hidden '>

<h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>Open link in bio natively  across 30+ Apps</h1>
<p className='text-xl text-[#113E53] mt-4 '>Super tool that helps you grow across all social media apps and get better brand deals!!</p>
<div>
    <input className='md:w-[400px] border p-3 rounded-full mt-5 ' type='text' placeholder='Paste your link here' />
   <br />
    <div className='flex justify-center mt-4'>
        <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
            Create Smart Link
        </button>
    </div>

</div>
</div>
                    <div className='flex gap-4 '>
                        <div className='relative self-end w-full md:w-[300px]'>
                            <Image src='/images/Frame12.png' alt='imaw'   width={300} height={300}  />


                        </div>
                        <div className=' w-[300px]'>
                            <Image src='/images/girl.png' alt='imag'   width={300} height={300}  />
                            <Image className='my-2' src='/images/Link-Snapchat.png' alt='image'  width={300} height={300} />
                            <Image src='/images/Animation - Insta.png' alt='image'   width={300} height={300}  />

                        </div>
                    </div>


                </div>
            </div>
            <Links />
            <Apps />
            <TimeToShine />
            <Plateforms/>
        </div>
    )
}

export default InfluencerData