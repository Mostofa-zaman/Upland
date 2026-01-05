import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    text: "Velit occaecat duis occaecat nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Brooklyn Simmons",
    text: "Velit occaecat duis occaecat nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Guy Hawkins",
    text: "Velit occaecat duis occaecat nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Guy Hawkins",
    text: "Velit occaecat duis occaecat nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const AboutSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative bg-[#faf9ff] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            They Say About Us
          </h2>

          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="w-15 h-15 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-green-700 transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-15 h-15 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-green-700 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="text-orange-500 text-5xl mb-4">“</div>
                <p className="text-gray-500 mb-8">{item.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-300" />
                  <span className="font-semibold text-gray-900">
                    {item.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default AboutSlider;
