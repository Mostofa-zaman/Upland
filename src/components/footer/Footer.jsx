import footerimg from "../../assets/footerimg.png";

const Footer = () => {
  return (
    <section className="bg-white relative pt-20 px-4">
      
      {/* Newsletter Card */}
      <div className="max-w-6xl mx-auto -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row 
                        items-center md:items-start p-6 sm:p-8 gap-8">
          
          {/* Left Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48">
              <img
                src={footerimg}
                alt="newsletter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#FF6231] text-xs font-semibold mb-2 tracking-widest">
              NEWSLETTER
            </p>

            <h2 className="text-xl sm:text-[28px] font-bold mb-3">
              Be Aware Of New Features
            </h2>

            <p className="text-gray-600 text-sm sm:text-[16px] mb-6 max-w-xl mx-auto md:mx-0">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#FF6231]"
              />
              <button className="bg-gradient-to-r from-[#FF7C4C] to-[#FF6231] 
                                 text-white rounded-full px-6 py-2 font-medium 
                                 hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="bg-gradient-to-b from-[#6C45C1] to-[#5437B2] w-full py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-white flex flex-col gap-8">

          {/* Menu & Button */}
          <div className="flex flex-wrap gap-6 sm:gap-10 justify-center items-center">
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Download app</a>
            <a href="#" className="hover:underline">UI screens</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">FAQ</a>

            <button className="border border-[#FF6231] rounded-full px-4 py-1 
                               text-[#FF6231] hover:bg-white hover:text-[#5437B2] transition">
              Free trial
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-400"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-200 text-center">
            © All rights reserved. Upland 2020
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
