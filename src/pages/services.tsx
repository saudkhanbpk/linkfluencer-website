import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import BrandMarketer from '@/components/services/BrandMarketer'
import BulkLink from '@/components/services/BulkLink'
import SmartLinks from '@/components/services/SmartLinks'
import React, { useState } from 'react'

function services() {
    const [selectedComponent, setSelectedComponent] = useState('Influencer');
    return (
        <div>
            <Navbar selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent} />
            <div className=' flex justify-center items-center text-center md:h-[400px] md:w-full md:pb-0 pb-10 p-8'>
                <div >

                    <h1 className='text-3xl md:text-5xl font-semibold text-center md:w-[600px] text-[#113E53] mt-10 '>The key benefits of using our product or service</h1>
                </div>
            </div>
            <SmartLinks />
            <BrandMarketer />
            <BulkLink />
            <Footer />
        </div>
    )
}

export default services