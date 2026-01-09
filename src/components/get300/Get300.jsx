import get300 from "../../assets/300.png";
import getone from "../../assets/getone.png";
import gettwo from "../../assets/gettwo.png";

const Get300 = () => {
  return (
    <section className="pt-50 relative overflow-x-hidden">
      <div className="absolute inset-0  bg-[url('/src/assets/get.png')] bg-cover bg-center opacity-80 bg-blue-700"></div>
      <div className="max-w-6xl mx-auto px-4 items-center justify-center ">
        <div className="flex justify-center py-10">
          {/* Wrapper */}
          <div className="relative inline-block">
            {/* Center Image */}
            <img src={get300} alt="Center image" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h6 className="text-sm uppercase tracking-widest text-[#FF6231]">
                .. trendy application
              </h6>

              <h1 className="text-[80px] font-extrabold mt-2 leading-tight text-center text-white">
                <span className="block">Get a free trial</span>
                <span className="block">
                  for <span className="text-amber-500">30</span> days
                </span>
              </h1>

              <button className="mt-4 px-10 py-5 bg-[#FF6231] text-white rounded-full">
                Get a free trial
              </button>
            </div>

            {/* Left Image */}
            <img
              src={getone}
              alt="Left image"
              className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-full"
            />

            {/* Right Image */}
            <img
              src={gettwo}
              alt="Right image"
              className="absolute right-25 bottom-5 translate-x-1/2 translate-x-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get300;
