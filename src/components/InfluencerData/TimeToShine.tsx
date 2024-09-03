import Image from 'next/image'
import React from 'react'
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
      <div className='w-full lg:w-[440px] '>
        <h1 className='text-3xl font-semibold'>
          Beyond likes, connect with brands that matter. It's your time to shine ✨
        </h1>
        <p className='text-xl mt-4'>
          Ditch the fleeting likes and forge meaningful connections. Forget empty
          engagement metrics and step into a world where you connect with brands that
          align with your values and passions. Our platform empowers you to go beyond
          the superficial and build genuine relationships with brands that resonate with you.
        </p>
      </div>
      <div className=' md:w-fit flex flex-col justify-center items-center self-center'>
        <div>
          <Slider {...settings} className=' md:w-[300px] w-[200px]'>
            <div>
              <Image src='/images/image - gymshark.png' alt='image' width={300} height={300} />
            </div>
            <div>
              <Image src='/images/image - gymshark.png' alt='image' width={300} height={300} />
            </div>
          </Slider>
        </div>
        <div className='flex'>
          <div className='self-end relative -right-6 md:-right-10 md:bottom-24 bottom-14   w-fit'>
          <Slider {...settings} className=' md:w-[350px] w-[200px]'>
            <div>
            <Image src='/images/Influencer 2.2.png' alt='image' className='w-fit ' width={500} height={400} />
            </div>
            <div>
            <Image src='/images/Influencer 2.2.png' alt='image' className='w-fit ' width={500} height={400} />
            </div>
            </Slider>
          </div>
          <div className='self-end relative md:bottom-44 -left-6 md:-left-10 bottom-28  w-fit'>
          <Slider {...settings} className=' md:w-[350px] w-[200px]'>
            <div>
            <Image src='/images/Influencer 2.1.png' alt='shark' className='w-fit ' width={500} height={400} />
            </div>
            <div>
            <Image src='/images/Influencer 2.1.png' alt='shark' className='w-fit ' width={500} height={400} />
            </div>
            </Slider>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TimeToShine
