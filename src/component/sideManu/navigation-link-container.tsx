import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface NavigationLinkContainerProps {
  href: string;
  label: ReactNode;  // Allow `label` to be a string or JSX
  isOpen: boolean;
  iconSrc: StaticImageData;
}

export const NavigationLinkContainer: React.FC<NavigationLinkContainerProps> = ({ href, label, iconSrc, isOpen }) => (
  <a href={href} className="flex items-center gap-3">
    <Image src={iconSrc} alt={typeof label === 'string' ? label : 'Icon'} width={24} height={24} />
    {isOpen && <span>{label}</span>}  {/* Conditionally render label based on `isOpen` */}
  </a>
);
