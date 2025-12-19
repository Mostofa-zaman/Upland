import PresentaionCardOne from "../reusable/PresentaionCardOne";
import PresentationCardFive from "../reusable/PresentationCardFive";
import PresentationCardFour from "../reusable/PresentationCardFour";
import PresentationCardThree from "../reusable/PresentationCardThree";
import PresentationCardTwo from "../reusable/PresentationCardTwo";

const Presentation = () => {
  return (
    <section className="relative h-287 mb-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/src/assets/bacgroundimg.png')] bg-no-repeat bg-center"></div>
      <div className="absolute inset-0 z-10 bg-[url('/src/assets/bacgroundtwo.png')] bg-cover bg-center opacity-80"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center pt-64">
        <h1 className="text-[50px] font-semibold text-white text-center mb-12">
          Watch our UI presentation
        </h1>

        {/* Cards */}
        <div className="relative grid grid-cols-5 gap-4">
          <div className="relative transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardFour />
          </div>

          <div className="relative transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardThree />
          </div>

          <div className="relative transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentaionCardOne />
          </div>

          <div className="relative transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardTwo />
          </div>

          <div className="relative transition-all duration-300 hover:scale-105 hover:z-50">
            <PresentationCardFive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
