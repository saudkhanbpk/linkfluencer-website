import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'

function termsofservice() {
    const [selectedComponent, setSelectedComponent] = useState('Influencer');
    return (
        <div>
            <Navbar selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent} />
            <div className='flex flex-col justify-center items-center p-8 md:pt-32'>
                <div>
                    <div className='mdw-[600px] pb-10'>
                        <h1 className='text-center md:text-start text-[#020D3A] text-3xl md:text-4xl font-semibold'>Terms of Service</h1>
                        <p className='mt-3 text-center md:text-start'>Effective date: Jan 26, 2024</p>
                    </div>
                    <div className='md:w-[600px] my-5'>
                        <h1 className='text-center md:text-start text-[#020D3A] text-2xl md:text-3xl font-semibold '>Heading 1</h1>
                        <p className='mt-3 text-xl text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
                            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.</p>
                    </div>
                    <div className='md:w-[600px] my-5'>
                        <h1 className='text-center md:text-start text-[#020D3A] text-2xl md:text-3xl font-semibold '>Heading 1</h1>
                        <p className='mt-3 text-xl text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
                            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.</p>
                    </div>
                    <div className='md:w-[600px] my-5'>
                        <h1 className='text-center md:text-start text-[#020D3A] text-2xl md:text-3xl font-semibold '>Heading 1</h1>
                        <p className='mt-3 text-xl text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
                            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.</p>
                    </div>
                </div>
                <div className='md:hidden block'>
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
        </div>
    )
}

export default termsofservice