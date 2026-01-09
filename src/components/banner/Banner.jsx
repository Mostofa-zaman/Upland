import { CiSearch } from 'react-icons/ci'
import cardimg from '../../assets/bancardimg.png' 
import logo2 from '../../assets/logo2.png' 
import banimg from '../../assets/banimg.png' 
import { LuTextSearch } from 'react-icons/lu'

const Banner = () => {
  return (




    <section className=" bg-cover bg-center bg-[#2A2895] pt-32 pb-20 lg:pt-40 lg:pb-32 relative ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 relative z-10">
          <p className="text-[#FF6231] text-sm items-center font-medium uppercase mb-3 tracking-widest">
         <span className=''> ..</span> trendy application
          </p>
          <h1 className="text-5xl w-200 md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Work Faster With <span >Powerful Tools</span>
          </h1>
          <p className="mt-6 w-[min(23em,90%)] text-lg text-gray-300 max-w-md lg:max-w-xl mx-auto lg:mx-0">
            Laboris culpa eu incididunt dolore ipsum tempor duis do ullamco euismod officia magna ad id.
          </p>
          <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition duration-300 shadow-xl shadow-orange-500/50">
            Learn More
          </button>
        </div>

        {/* Right Content / Mockup */}
        <div className="lg:w-1/2 relative flex justify-center lg:mt-0 mt-8">

        <div className="">
          <img className=' h-[300px] object-fill ' src={banimg} alt="" />
        </div>
            <div className="absolute inset-0 flex items-center justify-center z-50">
                {/* Placeholder for the complex illustration/mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/*  */}
                    <div className="w-64 h-145 bg-white rounded-3xl shadow-2xl  transform rotate-6 lg:rotate-12 transition hover:rotate-0">

                         <div className=" h-full w-full  flex flex-col items-center p-4">
                            <div className="flex items-center gap-15">
                                <img className='transform rotate-6 lg:-rotate-15 cursor-pointer ' src={logo2} alt="" />
                                <div className="flex gap-4">
                                       <CiSearch />
                                       <LuTextSearch />
                                </div>
                            </div>
                            <img src={cardimg} className="mt-4 rounded-lg" />
                            <h3 className="text-blue-600 font-bold mt-4">Feel the comfort</h3>
                            <p className="text-xs text-gray-500 text-center  mt-2 leading-5.5">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco.</p>
                            <button className="bg-blue-600 mt-14 text-white text-xs px-22 py-3 rounded-full">Download</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Faded Text Overlay for Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden">
            <h2 className="text-[200px] lg:text-[400px] font-extrabold text-white select-none pointer-events-none">
                WORK FASTER POWERFUL TOOLS
            </h2>
        </div>

      </div>
    </section>

  )
}

export default Banner