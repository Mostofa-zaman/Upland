import PresentaionCardOne from "../reusable/PresentaionCardOne";
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
<div className=" grid grid-cols-2 gap-4">
  
        <PresentaionCardOne />
        <PresentationCardTwo/>
</div>
      </div>
    </section>
  );
};

export default Presentation;
