import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 px-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About Us</h3>
          <p className="text-sm">
            Your go-to platform for finding the best accommodation deals.
            We strive to make your travel comfortable and memorable.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about"><a className="hover:text-blue-500">About</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-blue-500">Contact</a></Link></li>
            <li><Link href="/terms"><a className="hover:text-blue-500">Terms of Service</a></Link></li>
            <li><Link href="/privacy"><a className="hover:text-blue-500">Privacy Policy</a></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <p className="text-sm">
            123 Travel Lane, Wanderlust City, World
          </p>
          <p className="text-sm">
            Email: info@example.com
          </p>
          <p className="text-sm">
            Phone: +123 456 7890
          </p>
        </div>
      </div>
      <div className="text-center text-sm mt-8 pt-8 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
