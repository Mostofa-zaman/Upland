import PresentaionCardOne from "../reusable/PresentaionCardOne";
import PresentationCardFive from "../reusable/PresentationCardFive";
import PresentationCardFour from "../reusable/PresentationCardFour";
import PresentationCardThree from "../reusable/PresentationCardThree";
import PresentationCardTwo from "../reusable/PresentationCardTwo";

const Presentation = () => {
  return (
    <section className="relative mb-20">
      {/* Background */}
      <div className="absolute inset-0 z-10 bg-[url('/src/assets/bg1.png')] bg-cover bg-center opacity-80"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center 
                      pt-40 sm:pt-48 md:pt-56 lg:pt-64 px-4">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] 
                       font-semibold text-white text-center mb-10 md:mb-12">
          Watch our UI presentation
        </h1>

        {/* Cards */}
        <div
          className="
            relative 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-4
          "
        >
          <div className="transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardFour />
          </div>

          <div className="transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardThree />
          </div>

          <div className="transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentaionCardOne />
          </div>

          <div className="transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardTwo />
          </div>

          <div className="transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardFive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
