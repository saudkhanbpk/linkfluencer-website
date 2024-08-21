import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'

function about() {
    const [selectedComponent, setSelectedComponent] = useState('brand');

    return (
        <>
            <Navbar selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent} />
            <div className='w-[100%] p-8 md:px-16 md:py-24 h-auto '>
                <div className='md:w-[550px] relative top-5 md:top-10 md:text-start text-center ' >
                    <h1 className='text-3xl md:text-5xl font-semibold md:text-start  text-[#113E53] mb-7'>About Linkfluencer</h1>
                    <p className=' text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.</p>
                </div>
                <div className='md:float-end md:w-[550px] mt-24 text-center md:text-start '>
                    <p className=' text-xl mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.</p>
                    <h1 className='text-2xl md:text-3xl font-semibold md:text-start text-start text-[#113E53] '>Launch your internet space with a boost</h1>
                    <div className='pb-8 flex flex-col justify-start'>
                        <input className='md:w-[450px] border p-3 rounded-full mt-5 ' type='text' placeholder='Paste your link here' /><br />
                        <div className='flex justify-start '>
                            <button className="w-fit py-3 px-8  rounded-full focus:outline-none md:centered bg-[#020D3A] text-white">
                                Create Smart Link
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default about