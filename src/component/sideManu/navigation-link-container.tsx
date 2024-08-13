import Image, { StaticImageData } from 'next/image';

interface NavigationLinkContainerProps {
  href: string;
  label: string;
  isOpen : boolean;
  iconSrc: StaticImageData; // Expecting StaticImageData for the icon
}

export const NavigationLinkContainer: React.FC<NavigationLinkContainerProps> = ({ href, label, iconSrc }) => (
  <a href={href} className="flex items-center gap-3">
    <Image src={iconSrc} alt={label} width={24} height={24} />
    <span>{label}</span>
  </a> 
);
