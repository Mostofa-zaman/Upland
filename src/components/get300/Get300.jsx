import get300 from "../../assets/300.png";
import getone from "../../assets/getone.png";
import gettwo from "../../assets/gettwo.png";

const Get300 = () => {
  return (
    <section className="relative overflow-x-hidden pt-32 sm:pt-40 lg:pt-50">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/src/assets/get.png')] bg-cover bg-center opacity-80 bg-blue-700"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex justify-center py-10 sm:py-14 lg:py-20">
          
          {/* Wrapper */}
          <div className="relative inline-block">

            {/* Center Image */}
            <img
              src={get300}
              alt="Center image"
              className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-auto"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h6 className="text-xs sm:text-sm uppercase tracking-widest text-[#FF6231]">
                .. trendy application
              </h6>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] 
                             font-extrabold mt-2 leading-tight text-white">
                <span className="block">Get a free trial</span>
                <span className="block">
                  for <span className="text-amber-500">30</span> days
                </span>
              </h1>

              <button className="mt-4 sm:mt-6 px-8 sm:px-10 py-4 sm:py-5 
                                 bg-[#FF6231] text-white rounded-full text-sm sm:text-base">
                Get a free trial
              </button>
            </div>

            {/* Left Image */}
            <img
              src={getone}
              alt="Left image"
              className="hidden md:block absolute left-12 top-1/2 
                         -translate-y-1/2 -translate-x-full"
            />

            {/* Right Image */}
            <img
              src={gettwo}
              alt="Right image"
              className="hidden md:block absolute right-12 bottom-5 
                         translate-x-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get300;
