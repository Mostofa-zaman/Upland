import { FiMessageCircle, FiSearch } from "react-icons/fi";
import BlogCategoryreusable from "../../reusable/BlogCategoryreusable";
import Calendar from "../../reusable/Calendar";
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img1.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img1.jpg'
import img6 from '../../../assets/img3.jpg'
const images = [img1, img2, img3, img4, img5, img6 ];

const BlogCategory = () => {
  return (
    <section className=" pb-30 mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-[70%30%]  gap-4">
          <div className=" gap-10 grid lg:grid-cols-1 md:grid-cols-2 ">
            <BlogCategoryreusable />
            <BlogCategoryreusable />
            <BlogCategoryreusable />
          </div>
          <div className="">
            <div className="flex flex-col pb-15 ">
              <button
                type="button"
                className="flex items-center gap-2 justify-between border border-gray-400 text-black px-6 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span>Search</span>
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-[28px] font-semibold">Recent posts</h3>
            <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            </span>
            <p>Dec 10, 2020</p>
            <h3>Launch of a new convenient feature this Saturday...</h3>
            <h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </h3>
            <p>Dec 10, 2020</p>
            <h2>What you need to know before using Upland Application</h2>
            <h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </h3>
            <h3 className="text-[28px] font-semibold">Recent comments</h3>
            <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            </span>

            <FiMessageCircle className="w-5 h-5" />
            <h4>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </h4>
            <FiMessageCircle className="w-5 h-5" />
            <h4>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </h4>
            <FiMessageCircle className="w-5 h-5" />
            <h4>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </h4>
            <h3 className="text-[28px] font-semibold">December 2020</h3>
            <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            </span>

            <Calendar />
           <div className="grid grid-cols-3 gap-4">
  {images.map((img, index) => (
    <div
      key={index}
      className="w-24 h-24  overflow-hidden border"
    >
      <img
        src={img}
        alt={`image-${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
<h6>Tags</h6>
 <span>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
