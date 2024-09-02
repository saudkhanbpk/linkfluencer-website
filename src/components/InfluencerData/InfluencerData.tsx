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
                            <Image src={Frame} alt='image'  width={300} height={300} />
                            <Image className='my-2' src={Linkt} alt='image'  width={300} height={300}  />
                            <Image src={spotify} alt='image'   width={300} height={300}  />

                        </div>
                        <div className=' relative md:self-end w-[300px]'>
                            <Image src={animYoutube} alt='image'  width={300} height={300}    />
                            <Image className='my-2' src={img33} alt='image'  width={300} height={300}   />


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
                            <Image src={Frame12} alt='imaw'   width={300} height={300}  />


                        </div>
                        <div className=' w-[300px]'>
                            <Image src={girl} alt='imag'   width={300} height={300}  />
                            <Image className='my-2' src={snapchat} alt='image'  width={300} height={300} />
                            <Image src={insta} alt='image'   width={300} height={300}  />

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