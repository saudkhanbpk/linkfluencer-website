import Image from 'next/image'
import React from 'react'
import logoanim from '../../../public/images/logo animation.png'
import property1 from '../../../public/images/Property 1=frame 2.png'
import property2 from '../../../public/images/Property 1=frame 3.png'
import property3 from '../../../public/images/Influencer 3.png'
import Slider from 'react-slick';
function TimeToShine() {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000, // 1 second
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='flex flex-col lg:flex-row-reverse gap-10 justify-center items-center min-h-screen w-full p-8 bg-gray-100'>
      <div className='w-full lg:w-[440px]'>
        <h1 className='text-3xl font-semibold'>
          Fix your influencer marketing ROI
        </h1>
        <p className='text-xl mt-4'>
          With our smart linking capability, you can enhance user experience and boost engagement by ensuring that your links open directly in mobile apps, rather than app browsers. Say goodbye to the hassle of switching between apps and hello to seamless navigation.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-4 self-center relative bottom-10'>
      <Slider {...settings} className='w-[70px] md:w-[100px] md:h-[100px' >
        <div>
        <Image src={logoanim} alt='logoanim' width={100} height={100} className='md:w-auto w-[70px]' />
        </div>
        <div>
        <Image src={logoanim} alt='logoanim' className='md:w-auto w-[70px]' />
        </div>
        </Slider>
        <div className='flex gap-3'>
          <div className='flex flex-col items-center w-fit'>
            <Slider {...settings} className='w-[110px] md:w-[200px]' >
              <div>
                <Image src={property1} alt='1' className='md:w-auto w-[110px]' />
              </div>
              <div>
                <Image src={property1} alt='1' className='md:w-auto w-[110px]' />
              </div>
            </Slider>
            <Slider {...settings} className='w-[80px] md:w-[100px] relative bottom-9 md:bottom-16  ' >
              <div>
                <button className='p-1 md:p-3 bg-white rounded-full  text-xs md:text-sm    '>21k clicks</button>
              </div>
              <div>
                <button className='p-1 md:p-3 bg-white rounded-full   text-xs md:text-sm    '>21k clicks</button>
              </div>
            </Slider>
          </div>
          <div className='flex flex-col items-center'>
            <Slider {...settings} className='w-[110px] md:w-[200px]' >
              <div>
                <Image src={property2} alt='2' className='md:w-auto w-[110px]' />
              </div>
              <div>
                <Image src={property2} alt='2' className='md:w-auto w-[110px]' />
              </div>
            </Slider>
            <Slider {...settings} className='w-[100px] md:w-[160px] relative bottom-12 md:bottom-16  '>
              <div>
                <button className=' p-1 md:p-3 bg-white rounded-full  text-xs md:text-sm ' >2.2m impressions</button>
              </div>
              <div>
                <button className=' p-1 md:p-3 bg-white rounded-full  text-xs md:text-sm ' >2.2m impressions</button>
              </div>
            </Slider>
          </div>

          <div className='flex flex-col items-center'>
            <Slider {...settings} className='w-[110px] md:w-[200px]' >
              <div>
                <Image src={property3} alt='3' className='md:w-auto w-[110px]' />
              </div>
              <div>
                <Image src={property3} alt='3' className='md:w-auto w-[110px]' />
              </div>
            </Slider>
            <Slider {...settings} className='w-[100px] md:w-[140px] relative bottom-12 md:bottom-16  '>
              <div>
                <button className=' p-1 md:p-3 bg-white rounded-full text-xs md:text-sm '>$20,120 in sales</button>
              </div>
              <div>
                <button className=' p-1 md:p-3 bg-white rounded-full text-xs md:text-sm '>$20,120 in sales</button>
              </div>
            </Slider></div>

        </div>
      </div>
    </div>
  )
}

export default TimeToShine
