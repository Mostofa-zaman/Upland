import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#2A2895] z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6 md:px-12 lg:px-24">
          
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wider">
            UPLAND
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-white text-sm font-medium">
            <Link to="/" className="hover:text-blue-400 transition">
              Home <span className="pl-4">.</span>
            </Link>
            <Link to="/blog" className="hover:text-blue-400 transition">
              Blog <span className="pl-4">.</span>
            </Link>
            <Link to="/post" className="hover:text-blue-400 transition">
              Post <span className="pl-4">.</span>
            </Link>
            <Link to="/notfound" className="hover:text-blue-400 transition">
              NotFound <span className="pl-4">.</span>
            </Link>
            <Link to="/popup" className="hover:text-blue-400 transition">
              Popup <span className="pl-4">.</span>
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <button className="hidden sm:block border text-[#FF6231] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
              Free Trial
            </button>

            <div className="hidden md:flex items-center text-white text-sm font-medium">
              <FaPhoneAlt className="mr-2 text-xs" />
              <span>+1 742 65 84 122</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-xl"
              onClick={() => setIsOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2A2895] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <span className="text-white text-xl font-bold">UPLAND</span>
          <button
            className="text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col px-6 py-6 space-y-5 text-white text-sm font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/post" onClick={() => setIsOpen(false)}>Post</Link>
          <Link to="/notfound" onClick={() => setIsOpen(false)}>NotFound</Link>
          <Link to="/popup" onClick={() => setIsOpen(false)}>Popup</Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
