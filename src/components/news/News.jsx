import { FiShare2 } from "react-icons/fi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const News = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-[50px] font-semibold">
              Read The Latest News And Articles
            </h1>

            <p className="text-[16px] font-normal pt-6 pb-10">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum tempor duis do ullamc.
            </p>
            <button className="relative text-[#FF6231] text-[12px] font-medium group">
              READ MORE
              <span className="absolute left-0 -bottom-1 h-[1px] w-1/2 bg-[#FF6231] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Slider */}
          <div>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1} // ✅ only one card
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow p-8 rounded-2xl w-full">
                    <h6 className="text-[#FF6231] text-sm font-medium">
                      Dec 10, 2020
                    </h6>

                    <h2 className="text-[22px] font-semibold pt-5 pb-6 leading-snug">
                      Launch of a new convenient feature this Saturday.
                    </h2>

                    <p className="text-[16px] text-gray-600 leading-relaxed">
                      Labore do nulla ipsum dolore ipsum. Proident excepteur ex
                      aliqua cupidatat adipisicing in cillum.
                    </p>

                    <div className="flex items-center gap-4 pt-8 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#BD93D8]"></span>
                        <p>Annette Black</p>
                      </div>

                      <button className="flex items-center gap-2 hover:text-[#FF6231] transition">
                        <FiShare2 />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
