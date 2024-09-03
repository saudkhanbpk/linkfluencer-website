import Image from 'next/image'
import React from 'react'
import { LuPhone } from 'react-icons/lu'
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { FaXTwitter } from 'react-icons/fa6'
import { useRouter } from 'next/router'

function Footer() {
    const Router = useRouter()
  return (
    <div className='p-8 md:flex flex-col justify-center items-center bg-gray-100 min-h-screen w-full'>
        <div className='md:flex gap-5'>
            <h1 className='text-2xl md:text-3xl md:mb-0 mb-4 font-bold md:w-[700px] '>Subscribe to our newsletter for upcoming features.</h1>
            <div className='flex flex-col gap-4'>
            <input type="email" placeholder='Your email' className=' md:w-[500px] border p-3 rounded-full' />
            <button className='px-6 py-2 w-fit text-white rounded-full bg-[#020D3A]'>Subscribe</button>
            </div>
           
        </div>
        <div className='md:flex gap-16  mt-24'>
            <div className='flex gap-20 md:mt-0 mt-4'>
            <div>
                <Image src='/images/main_logo.png' alt='logo' width={160} height={300} onClick={()=>{Router.push('/')}} className='cursor-pointer' />
                <p className='my-3'>@2024</p>
            </div>
            <div>
                <h1 className='text-xl font-bold'>legality</h1>
                <p className='cursor-pointer hover:underline underline my-1' onClick={()=>{Router.push('/')}}>Cookies Settings</p>
                <p className='cursor-pointer hover:underline underline my-1' onClick={()=>{Router.push('/privacypolicy')}}>Privacy Policy</p>
                <p className='cursor-pointer hover:underline underline my-1' onClick={()=>{Router.push('/termsofservice')}}>Terms of Service</p>
               

            </div>
            </div>
            <div className='flex gap-28 md:mt-0 mt-4'>
            <div>
            <h1 className='text-xl font-bold'>Company</h1>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/')}}>How it Works</p>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/')}}>Campaign Mgmt</p>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/')}}>What’s New</p>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/about')}}>About</p>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/contact')}}>Contact</p>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/services')}}>Services</p>


            </div>
            <div>
            <h1 className='text-xl font-bold'>Support</h1>
                <p className='cursor-pointer hover:underline  my-1'>Help Topics</p>
                <p className='cursor-pointer hover:underline  my-1' onClick={()=>{Router.push('/faq')}}>FAQs</p>
                <p className='cursor-pointer hover:underline  my-1'>Getting Started</p>
            </div>
            </div>
            <div className='flex gap-16 md:gap-20 md:mt-0 mt-4'>
            <div>
            <h1 className='text-xl font-bold'>Follow Us</h1>
            <div className='flex gap-1 my-1'>
            <div className='cursor-pointer hover:underline p-2 bg-white rounded-full'><FaFacebook /></div>
                <div className='cursor-pointer hover:underline p-2 bg-white rounded-full'><FaLinkedinIn /></div>
                <div className='cursor-pointer hover:underline p-2 bg-white rounded-full'><SlSocialInstagram /></div>
                <div className='cursor-pointer hover:underline p-2 bg-white rounded-full'><FaXTwitter /></div>
            </div>
               

            </div>
            <div>
            <h1 className='text-xl font-bold'>Contact Us</h1>
           <div className='cursor-pointer hover:underline flex gap-1 my-1'><LuPhone className='self-center '/><a href='tel:+91-7458965874'>+91-7458965874</a></div>
           <div className='cursor-pointer hover:underline flex gap-1 my-1'><CiMail  className='self-center '/><a href='mailto:hello@linkfluencer.io'>hello@linkfluencer.io</a></div>


            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer