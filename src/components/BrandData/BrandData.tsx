import Image from 'next/image'
import React from 'react'
import badgirl from '../../../public/images/badgirl.png'
import anim from '../../../public/images/Animation - Sephora - Brand.png'
import fram321 from '../../../public/images/frame321.png'
import gymshark from '../../../public/images/gymshark.png'
import boy from '../../../public/images/boy.png'
import blacklady from '../../../public/images/blacklady.png'
import snapchat from '../../../public/images/Link-Snapchat.png'
import nike from '../../../public/images/nike.png'
import shoes from '../../../public/images/shoes.png'
import Links from './Links'
import Main from './Main'
import Roi from './Roi'
import Plateforms from './Plateforms'
import { IoLinkOutline } from 'react-icons/io5'

function BrandData() {
    return (
        <div className='flex flex-col justify-center items-center w-full  '>
            <div className='p-8'>
                <div className=' flex-col justify-center items-center md:flex hidden '>

                    <h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>Unlock your influence with
                    Linkfluencer.io</h1>
                    <p className='text-xl text-[#113E53] mt-4 '>Super tool that helps you grow across all social media apps and get better engagement!!</p>
                    <div>
                    <div className='flex'> <input className='md:w-[400px] border p-3 rounded-full mt-5 self-center ' type='text' placeholder='Paste your link here' />  <IoLinkOutline className='self-center text-3xl text-gray-200 relative z-10 right-12 top-2 cursor-pointer' /> </div>
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
                        <div className='self-end w-full md:w-[300px]'>
                            <Image src={badgirl} alt='image' className='rounded-xl' width={300} height={300}    />
                           
                            <Image className='my-2' src={fram321} alt='image'  width={300} height={300}     />
                          
                            <Image src={anim} alt='image' width={300} height={300}   />

                        </div>
                        <div className= 'self-end w-[300px]'>
                            <Image src={gymshark} alt='image'  width={300} height={300}    />
                            <Image className='my-2' src={boy} alt='image' width={300} height={300}      />


                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center  md:hidden '>

<h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>Unlock your influence with
Linkfluencer.io</h1>
<p className='text-xl text-[#113E53] mt-4 '>Super tool that helps you grow across all social media apps and get better engagement!!</p>
<div>
    <input className='md:w-[400px] border p-3 rounded-full mt-5 ' type='text' placeholder='Paste your link here' /><br />
    <div className='flex justify-center mt-4'>
        <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
            Create Smart Link
        </button>
    </div>

</div>
</div>
<div className='flex gap-4 '>
                        <div className='relative self-end w-full md:w-[300px]'>
                            <Image src={blacklady} alt='imaw' width={300} height={300}       />


                        </div>
                        <div className='w-[300px]'>
                            <Image src={shoes} alt='imag' width={300} height={300}    />
                            <Image className='my-2' src={snapchat} alt='image'   width={300} height={300}   />
                            <Image src={nike} alt='image' width={300} height={300}      />

                        </div>
                    </div>


                </div>
            </div>
            <Links/>
            <Main/>
            <Roi/>
            <Plateforms/>
        </div>
    )
}

export default BrandData