import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-[30px] left-1/2 transform -translate-x-1/2 backdrop-blur-[50px] bg-white/30 rounded-[16px] border border-black/10 shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25)] p-4 z-50 w-fit">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Ursuline Study Centre"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg">Ursuline Study Centre</span>
        </div>

        <div className="hidden md:flex gap-6">
          {['Home', 'About', 'Courses', 'Faculty', 'Results', 'Gallery', 'Contact'].map((item) => (
            <Link key={item} href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
          Book Free Demo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
