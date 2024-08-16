import Image from 'next/image'
import React from 'react'
import Frame from '../../../public/images/Frame 1261153494.png'
import spotify from '../../../public/images/spotify.png'
import Linkt from '../../../public/images/Link-Twitch.png'
import animYoutube from '../../../public/images/Animation - Youtube.png'
import img33 from '../../../public/images/image 33.png'
import Frame12 from '../../../public/images/Frame12.png'
import snapchat from '../../../public/images/Link-Snapchat.png'
import insta from '../../../public/images/Animation - Insta.png'
import girl from '../../../public/images/girl.png'
import Links from './Links'
import Apps from './Apps'
import TimeToShine from './TimeToShine'
function InfluencerData() {
    return (
        <div className='flex flex-col justify-center items-center w-full  '>
            <div className='p-8'>
                <div className=' flex-col justify-center items-center md:flex hidden '>

                    <h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>Open link in bio natively  across 30+ Apps</h1>
                    <p className='text-xl text-[#113E53] mt-4 '>Super tool that helps you grow across all social media apps and get better brand deals!!</p>
                    <div>
                        <input className='md:w-[400px] border p-3 rounded-full mt-5 ' type='text' placeholder='Paste your link here' /><br />
                        <div className='flex justify-center mt-4'>
                            <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
                                Create Smart Link
                            </button>
                        </div>

                    </div>
                </div>
                {/* images section  */}
                <div className='flex flex-wrap md:flex-nowrap  gap-4 mt-4 pb-10'>
                    <div className='flex gap-4'>
                        <div className='self-end'>
                            <Image src={Frame} alt='image' />
                            <Image className='my-2' src={Linkt} alt='image' />
                            <Image src={spotify} alt='image' />

                        </div>
                        <div className=' relative self-end'>
                            <Image src={animYoutube} alt='image' />
                            <Image className='my-2' src={img33} alt='image' />


                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center  md:hidden '>

<h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>Open link in bio natively  across 30+ Apps</h1>
<p className='text-xl text-[#113E53] mt-4 '>Super tool that helps you grow across all social media apps and get better brand deals!!</p>
<div>
    <input className='md:w-[400px] border p-3 rounded-full mt-5 ' type='text' placeholder='Paste your link here' /><br />
    <div className='flex justify-center mt-4'>
        <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
            Create Smart Link
        </button>
    </div>

</div>
</div>
                    <div className='flex gap-4'>
                        <div className='relative self-end'>
                            <Image src={Frame12} alt='image' />


                        </div>
                        <div>
                            <Image src={girl} alt='image' />
                            <Image className='my-2' src={snapchat} alt='image' />
                            <Image src={insta} alt='image' />

                        </div>
                    </div>


                </div>
            </div>
            <Links />
            <Apps />
            <TimeToShine />
        </div>
    )
}

export default InfluencerData