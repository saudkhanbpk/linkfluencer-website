import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SocialButtonProps {
  logo: StaticImageData;
  alt: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ logo, alt, onClick }) => (
  <button onClick={onClick} className="flex items-center space-x-2 p-2 border rounded">
    <Image src={logo} alt={alt} width={20} height={20} />
    <span>{alt}</span>
  </button>
);

export default SocialButton;