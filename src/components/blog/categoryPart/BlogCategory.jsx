import { FiMessageCircle, FiSearch } from "react-icons/fi";
import BlogCategoryreusable from "../../reusable/BlogCategoryreusable";
import Calendar from "../../reusable/Calendar";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img1.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img1.jpg";
import img6 from "../../../assets/img3.jpg";
const images = [img1, img2, img3, img4, img5, img6];

const tags = [
  ["Android app", "IOS app", "Mobile"],
  ["App design", "Development"],
  ["Collaboration", "Download"],
];

const BlogCategory = () => {
  return (
    <section className=" pb-30 mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-[70%30%]  gap-8">
          <div className=" gap-10 grid lg:grid-cols-1 md:grid-cols-2 ">
            <BlogCategoryreusable />
            <BlogCategoryreusable />
            <BlogCategoryreusable />
          </div>
          <div>
            {/* Search */}
            <div className="flex flex-col pb-5">
              <button
                type="button"
                className="flex items-center justify-between gap-2 border border-gray-400 px-6 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span className="font-roboto text-[12px] font-medium text-[#FF6231]">
                  Search
                </span>
                <FiSearch className="w-5 h-5" />
              </button>
            </div>

            {/* Recent Posts */}
            <h3 className="text-[28px] font-semibold font-c">Recent posts</h3>
            <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </span>

            <div className="space-y-2 mt-2">
              <p className="text-[#FF6231] font-medium text-[12px] font-roboto">
                Dec 10, 2020
              </p>
              <h3 className="text-[22px] font-normal font-mono">
  Launch of a new convenient feature this Saturday...
</h3>


              <h4 className="text-[18px] font-normal font-roboto">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor...
              </h4>

              <p className="text-[#FF6231] font-medium text-[12px] font-roboto">
                Dec 10, 2020
              </p>
              <h2 className="text-[22px] font-semibold font-c">
                What you need to know before using Upland Application
              </h2>
              <h4 className="text-[18px] font-normal font-roboto">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor...
              </h4>
            </div>

            {/* Recent Comments */}
            <h3 className="text-[28px] font-semibold font-c mt-6">
              Recent comments
            </h3>
            <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </span>

            <div className="space-y-3 mt-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i}>
                  <FiMessageCircle className="w-5 h-5 text-[#FF6231]" />
                  <h4 className="text-[18px] font-normal font-roboto">
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor...
                  </h4>
                </div>
              ))}
            </div>

            {/* Calendar */}
            <h3 className="text-[28px] font-semibold font-c mt-6">
              December 2020
            </h3>
            <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </span>

            <div className="mt-4">
              <Calendar />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {images.map((img, index) => (
                <div key={index} className="w-24 h-24 overflow-hidden border">
                  <img
                    src={img}
                    alt={`image-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h6 className="font-c">Tags</h6>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </span>

              <div className="space-y-3 pt-4">
                {tags.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap items-center gap-3"
                  >
                    {row.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-gray-500 text-sm font-roboto">
                          {item}
                        </span>
                        {index !== row.length - 1 && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6231]" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
