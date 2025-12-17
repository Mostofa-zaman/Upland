import { FaPlay } from 'react-icons/fa';

const Presentation = () => {
  return (
    <div>
       
    <section className="bg-upland-dark pt-16 pb-40 relative overflow-hidden text-center">
      
      {/* Wavy Top Background Effect Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4c44e9] to-[#211e49] transform rotate-180 z-0">
         {/* This div simulates the deep purple background */}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex justify-center items-center mb-10">
          <button className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm shadow-xl transition duration-300 hover:bg-white/30">
            <FaPlay className="text-white text-xl ml-1" />
          </button>
          <span className="ml-4 text-white font-medium text-lg">Watch Our UI Presentation</span>
        </div>

        {/* Mockups Placeholder */}
        <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center">
            {/*  */}
            <div className="w-full h-full bg-white/10 rounded-xl shadow-2xl flex items-center justify-center p-4">
                 <p className="text-white opacity-70">Mockups Carousel Placeholder</p>
            </div>
        </div>

      </div>
    </section>

    </div>
  )
}

export default Presentation