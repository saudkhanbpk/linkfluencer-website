import Link from 'next/link';
import Image from 'next/image';
import logo from '../Component/images/Logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-20 bg-white shadow-md" style={{ width: '1512px', height: '92px', padding: '24px 80px', gap: '0px', justifyContent: 'space-between', opacity: '0' }}>
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="h-10 w-10 mr-3" />
        <span className="text-lg font-bold text-gray-800">Linkfluencer</span>
      </div>
      <div className="flex items-center">
        <button className="flex items-center bg-gray-100 text-gray-800 py-2 px-4 rounded-full mr-4">
          <span className="mr-2">Influencer</span>
          <span className="text-gray-400">Brand</span>
        </button>
        <Link href="/login">
          <a className="text-gray-800 border border-gray-300 py-2 px-4 rounded-full mr-4">
            Log in
          </a>
        </Link>
        <Link href="/signup">
          <a className="bg-green-500 text-white py-2 px-4 rounded-full">
            Sign up for free
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
