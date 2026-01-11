import footerimg from '../../assets/footerimg.png'

const Footer = () => {
  return (
     <section className="bg-[#fff] relative pt-20">
      {/*Card */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start p-8 gap-8">
          {/* Left Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-48 h-48">
              <img
                src={footerimg} //image path
                alt={footerimg}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1">
            <p className="text-[#FF6231] text-xs font-semibold mb-2 tracking-widest">
              NEWSLETTER
            </p>
            <h2 className="text-[28px] font-bold mb-3">
              Be Aware Of New Features
            </h2>
            <p className="text-gray-600 text-[16px] mb-6">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.
            </p>

            {/* Input + Button */}
            <div className="flex gap-4 max-w-md">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6231]"
              />
              <button className="bg-gradient-to-r from-[#FF7C4C] to-[#FF6231] text-white rounded-full px-6 py-2 font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     <footer className="bg-gradient-to-b from-[#6C45C1] to-[#5437B2] absulute  w-full py-8">
  <div className="max-w-6xl mx-auto px-4 py-16   text-white  md:flex-row justify-between items-center gap-10 relative">
    
    {/* Menu & button */}
    <div className="flex gap-20 flex-wrap items-center justify-center">
      <a href="#" className="hover:underline">
        Features
      </a>
      <a href="#" className="hover:underline">
        Download app
      </a>
      <a href="#" className="hover:underline">
        UI screens
      </a>
      <a href="#" className="hover:underline">
        Testimonials
      </a>
      <a href="#" className="hover:underline">
        FAQ
      </a>
      <button className="border border-[#FF6231] rounded-full px-4 py-1 text-[#FF6231] hover:bg-white hover:text-[#5437B2] transition">
        Free trial
      </button>
    </div>

    {/* Middle underline */}
    <div className="hidden md:block mt-6 flex-1 border-t border-gray-400 "></div>

    {/* Footer text */}
    <p className="text-sm text-gray-200 pt-6 md:mt-0 text-center">
      © All rights reserved. Upland 2020
    </p>
  </div>
</footer>

    </section>
  )
}

export default Footer