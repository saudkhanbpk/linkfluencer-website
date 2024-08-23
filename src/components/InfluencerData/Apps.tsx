import Image from 'next/image';
import React from 'react';
import Apppic from '../../../public/images/image - yt.png';
import display from '../../../public/images/display.png';
import y2 from '../../../public/images/youtube2.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Apps() {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1000, // 1 second
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='flex gap-10 flex-wrap justify-center items-center min-h-screen w-full p-8'>
      <div className='md:w-[440px]'>
        <h1 className='text-3xl font-semibold'>
          Unlock the power of smart links that open directly in mobile apps
        </h1>
        <p className='text-xl mt-4'>
          Unlock a new level of convenience and keep your audience engaged. With Linkfluencer.io Smart Links,
          viewers can easily subscribe, explore, and follow you across all platforms.
        </p>
      </div>

      <div className='md:w-[600px] w-full flex items-center '>
        <div className='flex flex-col justify-center items-center'>
    <Slider {...settings} className='relative top-16 md:top-20 w-[180px] md:w-[280px]  z-10'>
      <div>
          <button className='p-1 md:p-3 rounded-full bg-white flex gap-1 lg:text-[16px] text-xs'><Image className='self-center ' src={y2} alt='img' width={20} height={20}/><p>linkfluencer.io/youtube/joeys...</p></button>
          </div>
          <div>
          <button className='p-1 md:p-3 rounded-full bg-white flex gap-1  lg:text-[16px] text-xs'><Image className='self-center ' src={y2} alt='img' width={20} height={20}/><p>linkfluencer.io/youtube/joeys...</p></button>
          </div>
           </Slider>
        {/* First slider */}
        <Slider {...settings} className=' md:w-full w-[200px]'>
          <div className=''>
            <Image src={Apppic} alt='image' className='w-[200px] md:w-auto' width={400} height={400} />
          </div>
          <div className=''>
            <Image src={Apppic} alt='image' className='w-[200px] md:w-auto' width={400} height={400} />
          </div>
          {/* Add more slides as needed */}
        </Slider>
        </div>
        <div className='flex justify-center items-center gap-2  flex-col relative -left-10 w-fit'>
          <Slider {...settings} className='w-[30px]' >
            <div>
              <Image src='/images/youtube.png' className='w-[30px] md:w-auto' alt='android' width={40} height={40} />
            </div>
            <div>
              <Image src='/images/youtube.png' className='w-[30px] md:w-auto' alt='android' width={40} height={40} />
            </div>
          </Slider>
          {/* Second slider for display content */}
          <Slider {...settings} className='w-[200px] md:w-[304px] '>
            <div className='flex flex-col justify-center items-center  gap-2'>

              <div className='bg-[#FFDEE0] w-[200px] md:w-[304px] h-[180px] md:h-[206px] gap-2 flex items-center justify-center flex-col rounded-2xl'>
                <Image src={display} alt='ios' className='w-[60px] md:w-auto' width={80} height={80} />
                <h1 className='md:text-xl font-semibold text-[#500F13]'>Joey’s Science Lab</h1>
                <button className='py-2 px-4 md:px-8 md:text-md text-sm text-white rounded-full bg-[#500F13]'>Subscribe</button>
              </div>
            </div>
            <div className='flex justify-center flex-col items-center gap-2'>
              {/* <Image src='/images/youtube.png' className='w-[30px] md:w-auto' alt='android' width={40} height={40} /> */}
              <div className='bg-[#FFDEE0] w-[200px] md:w-[304px] h-[180px] md:h-[206px] gap-2 flex items-center justify-center flex-col rounded-2xl'>
                <Image src={display} alt='ios' className='w-[60px] md:w-auto' width={80} height={80} />
                <h1 className='md:text-xl font-semibold text-[#500F13]'>Joey’s Science Lab</h1>
                <button className='py-2 px-4 md:px-8 md:text-md text-sm text-white rounded-full bg-[#500F13]'>Subscribe</button>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Apps;
