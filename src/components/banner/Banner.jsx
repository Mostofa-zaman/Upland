import { CiSearch } from 'react-icons/ci'
import cardimg from '../../assets/bancardimg.png' 
import logo2 from '../../assets/logo2.png' 
import banimg from '../../assets/banimg.png' 
import { LuTextSearch } from 'react-icons/lu'

const Banner = () => {
  return (
   <section className="bg-cover bg-center bg-[#2A2895] pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-32 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row pt-6 sm:pt-8 items-center justify-center lg:justify-between">

    {/* Left Content */}
    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 relative z-10">
      <p className="text-[#FF6231] text-xs sm:text-sm font-medium uppercase mb-3 tracking-widest">
        .. trendy application
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
        Work Faster With <span>Powerful Tools</span>
      </h1>

      <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 max-w-md lg:max-w-xl mx-auto lg:mx-0">
        Laboris culpa eu incididunt dolore ipsum tempor duis do ullamco euismod officia magna ad id.
      </p>

      <button className="mt-6 sm:mt-8 bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-600 transition duration-300 shadow-xl shadow-orange-500/50">
        Learn More
      </button>
    </div>

    {/* Right Content */}
    <div className="lg:w-1/2 relative flex justify-center mt-6 lg:mt-0">
      <img
        className="h-56 sm:h-64 md:h-72 lg:h-75 object-contain"
        src={banimg}
        alt=""
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-56 sm:w-60 lg:w-64 h-140 sm:h-145 bg-white rounded-3xl shadow-2xl transform rotate-6 lg:rotate-12 scale-90 sm:scale-95 lg:scale-100 transition hover:rotate-0">
          <div className="h-full w-full flex flex-col items-center p-4">
            <div className="flex items-center justify-between w-full">
              <img className="transform rotate-6 lg:-rotate-15" src={logo2} alt="" />
              <div className="flex gap-3">
                <CiSearch />
                <LuTextSearch />
              </div>
            </div>

            <img src={cardimg} className="mt-4 rounded-lg" />

            <h3 className="text-blue-600 font-bold mt-4 text-sm sm:text-base">
              Feel the comfort
            </h3>

            <p className="text-[11px] sm:text-xs text-gray-500 text-center mt-2 leading-5">
              Culpa non ex tempor qui nulla laborum.
            </p>

            <button className="bg-blue-600 mt-auto text-white text-xs px-10 py-2 rounded-full">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Background Text */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden">
      <h2 className="text-[120px] sm:text-[200px] lg:text-[400px] font-extrabold text-white select-none pointer-events-none text-center">
        WORK FASTER POWERFUL TOOLS
      </h2>
    </div>

  </div>
</section>

  )
}
export default Banner