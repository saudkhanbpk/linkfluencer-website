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
import link from '../../../public/images/fi_link.png'

function Plateforms() {
  const platforms = [Netfix, spotify, YoutubeMusic, appleMusic, snap, soundCloud, reddit]; 
  const others = [vimeo,, line, snap , appleMusic,Netfix,telegram, soundCloud]; 


  return (
    <div className='md:h-screen flex flex-col justify-center items-center w-full '>
      <h1 className='text-center text-4xl font-semibold mb-24 '>Our Trusted Partners</h1>
      <div className='md:flex  flex-wrap gap-2 '>
        {platforms.map((platform, index) => (
          <button key={index} className='flex  justify-center items-center  w-[200px] rounded-full border h-[50px]'>
            
            <Image src={platform} alt={`Platform ${index}`} width={100} className='w-fit'  />
          </button>
        ))}
      </div>
      <Image src={link} alt='link' width={50} className='my-10'  />
      <div className='md:flex flex-wrap gap-2'>
        {others.map((other, index) => (
          <button key={index} className='flex justify-center items-center  w-[200px] rounded-full border h-[50px]'>
            
            <Image src={other} alt={`other ${index}`} width={100} className='w-fit'  />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Plateforms;
