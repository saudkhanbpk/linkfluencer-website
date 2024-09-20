import React from 'react';
import Image from 'next/image';
import Netfix from '../../../public/images/Netflix.png';
import snap from '../../../public/images/Snapchat Logomark.png';
import reddit from '../../../public/images/Reddit Logotype.png';
import spotify from '../../../public/images/Spotif Logotype.png';
import appleMusic from '../../../public/images/Apple Music Classical Logotype.png';
import line from '../../../public/images/Line Logotype.png';
import telegram from '../../../public/images/Telegram Logotype.png';
import soundCloud from '../../../public/images/SoundCloud Logotype.png';
import YoutubeMusic from '../../../public/images/YouTube Music Logotype.png';
import vimeo from '../../../public/images/Vimeo Logotype.png';
import link from '../../../public/images/fi_link.png';

function Plateforms() {
  const platforms = [Netfix, spotify, YoutubeMusic, appleMusic, snap, soundCloud, reddit];
  const others = [vimeo, line, snap, appleMusic, Netfix, telegram, soundCloud].filter(Boolean);

  return (
    <div className='flex flex-col justify-center items-center w-full px-[20px] md:px-[80px] py-[40px] md:py-[100px]'>
      <h1 className='text-center text-[20px] md:text-[40px] font-semibold mb-10'>Our Trusted Partners</h1>

      <div className='marquee-container'>
        <div className='marquee'>
          {[...platforms, ...platforms].map((platform, index) => (
            <button
              key={index}
              className='marquee-item flex justify-center items-center w-[200px] rounded-full border h-[50px]'
            >
              <Image src={platform.src} alt={`Platform ${index}`} width={100} height={100} className='w-fit' />
            </button>
          ))}
        </div>
      </div>

      <Image src={link} alt='link' width={50} className='my-10' />

      <div className='marquee-container'>
        <div className='marquee'>
          {[...others, ...others].map((other, index) => (
            <button
              key={index}
              className='marquee-item flex justify-center items-center w-[200px] rounded-full border h-[50px]'
            >
              <Image src={other.src} alt={`Other ${index}`} width={100} height={100} className='w-fit' />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plateforms;
