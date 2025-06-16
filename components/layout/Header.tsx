import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Image src="/assets/logo.png" alt="Logo" width={120} height={40} /> 
              
            </a>
          </Link>
        </div>

        <div className="flex-1 mx-4 max-w-xl">
          <input
            type="text"
            placeholder="Search for accommodations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link href="/rooms"><a className="text-gray-600 hover:text-blue-500">Rooms</a></Link>
          <Link href="/mansions"><a className="text-gray-600 hover:text-blue-500">Mansion</a></Link>
          <Link href="/countryside"><a className="text-gray-600 hover:text-blue-500">Countryside</a></Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/signin">
            <a className="text-gray-600 hover:text-blue-500">Sign In</a>
          </Link>
          <Link href="/signup">
            <a className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign Up</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
