import { FaPhoneAlt } from 'react-icons/fa';

const Menu = () => {
  return (
  

<header className="absolute top-0 left-0 right-0 z-10 py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wider">
          UPLAND
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-8 text-white text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition duration-300 ">Features  <span className='pl-4'>.</span></a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Download app <span className='pl-4'>.</span></a>
          <a href="#" className="hover:text-blue-400 transition duration-300">UI elements <span className='pl-4'>.</span></a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Testimonials <span className='pl-4'>.</span></a>
          <a href="#" className="hover:text-blue-400 transition duration-300">FAQ <span className='pl-4'>.</span></a>
        </nav>

        {/* Free Trial Button & Contact */}
        <div className="flex items-center space-x-6">
          <button className=" sm:block border text-[#FF6231] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
            Free Trial
          </button>
          <div className="flex items-center text-white text-sm font-medium">
            <FaPhoneAlt className="mr-2 text-xs" />
            <span>+1 742 65 84 122</span>
          </div>
        </div>
      </div>
    </header>




  )
}

export default Menu