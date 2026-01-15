import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 right-0  py-4 px-6 md:px-12 lg:px-24 bg-sky-700 z-50  fixed">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wider">
          UPLAND
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-8 text-white text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home <span className="pl-4">.</span>
          </Link>

          <Link
            to="/blog"
            className="hover:text-blue-400 transition duration-300"
          >
            Blog <span className="pl-4">.</span>
          </Link>

          <Link
            to="/post"
            className="hover:text-blue-400 transition duration-300"
          >
            Post <span className="pl-4">.</span>
          </Link>

          <Link
            to="/404"
            className="hover:text-blue-400 transition duration-300"
          >
            NotFound  <span className="pl-4">.</span>
          </Link>

          <Link
            to="/popup"
            className="hover:text-blue-400 transition duration-300"
          >
            Popup <span className="pl-4">.</span>
          </Link>
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
  );
};

export default Navigation;
