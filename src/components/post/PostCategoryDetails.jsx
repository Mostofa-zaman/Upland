import React from "react";
import { FiMessageCircle, FiSearch } from "react-icons/fi";
import Calendar from "../reusable/Calendar";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img1.jpg";
import img6 from "../../assets/img3.jpg";
import fox from "../../assets/fox.png";
import postimg from "../../assets/post.png";

const images = [img1, img2, img3, img4, img5, img6];

const tags = [
  ["Android app", "IOS app", "Mobile"],
  ["App design", "Development"],
  ["Collaboration", "Download"],
];

const PostCategoryDetails = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-30 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-[760px]">
            {/* Banner */}
            <div className="bg-[#e3e6ff] h-60 sm:h-72 md:h-80 relative rounded-2xl">
              <img className="h-full w-full" src={postimg} alt="" />
              <span className="absolute bottom-0 left-6 sm:left-10 bg-orange-500 text-white text-xs font-bold px-2 py-4 rounded-t">
                DEC <br /> 10
              </span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 py-4 text-sm text-gray-500">
              <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
              <p className="font-extrabold">Leslie Alexander</p>
              <span>• Mobile</span>
              <span>• Share</span>
            </div>

            {/* Text */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 pb-6">
              A Selection Of The Best Apps For 2020
            </h1>

            <p className="text-gray-600 leading-relaxed pb-6 sm:pb-10">
              There’s such a thing as “too much information”, especially for
              the companies scaling out their sales operations...
            </p>

            <p className="text-gray-600 leading-relaxed pb-10">
              In this episode, Attentive founder Robert Fox talks about what
              it takes to build a tech new product from the ground up.
            </p>

            {/* Quote */}
            <div className="bg-gray-50 border-l-4 border-orange-400 p-6 sm:p-10 rounded-2xl shadow-lg">
              <p className="italic text-gray-700 leading-7 sm:leading-8">
                “Ullamco exercitation incididunt ut fugiat ex velit nulla...”
              </p>
              <p className="mt-3 font-semibold text-gray-800">— Robert Fox</p>
            </div>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 pt-12 sm:pt-16 pb-6 sm:pb-8">
              Better Security and faster Server
            </h2>

            <p className="pb-8 sm:pb-10">
              There’s such a thing as “too much information”...
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2 pb-10">
              <li>We've been supporting WordPress since the beginning.</li>
              <li>Our easy-to-use control panel and API let you spend.</li>
              <li>Perfect for large sites or agencies.</li>
            </ul>

            <p className="text-gray-600 leading-relaxed pb-6 sm:pb-10">
              There’s such a thing as “too much information”...
            </p>

            <p>
              In this episode, Attentive founder Robert Fox talks about what
              it takes to build a tech new product.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 items-center pt-8 text-sm">
              <p className="font-bold text-black">tags :</p>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Android app</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">iOS app</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Mobile</span>
            </div>

            <span className="block mt-6 text-gray-300">
              - - - - - - - - - - - - - - - - - - -
            </span>

            {/* Author box */}
            <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] gap-6 p-6 sm:p-8 rounded-2xl shadow-lg mt-8">
              <img src={fox} alt="" className="w-24 sm:w-full" />
              <div>
                <h3 className="text-xl sm:text-[28px] font-semibold">
                  Robert Fox
                </h3>
                <p className="text-sm sm:text-base max-w-md">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla...
                </p>
                <div className="flex gap-4 pt-4">
                  <span>FB .</span>
                  <span>TW .</span>
                  <span>IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full">
            {/* Search */}
            <div className="pb-5">
              <button className="w-full flex items-center justify-between border border-gray-400 px-6 py-2 rounded-lg shadow-md">
                <span className="text-[#FF6231] text-xs font-medium">Search</span>
                <FiSearch className="w-5 h-5" />
              </button>
            </div>

            {/* Recent Posts */}
            <h3 className="text-xl sm:text-[28px] font-semibold">Recent posts</h3>
            <span className="text-gray-300 block mb-2">
              - - - - - - - - - - - - - -
            </span>

            {/* Comments */}
            <h3 className="text-xl sm:text-[28px] font-semibold mt-6">
              Recent comments
            </h3>

            <div className="space-y-3 mt-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i}>
                  <FiMessageCircle className="w-5 h-5 text-[#FF6231]" />
                  <h4 className="text-sm sm:text-[18px]">
                    Amet minim mollit non deserunt ullamco...
                  </h4>
                </div>
              ))}
            </div>

            {/* Calendar */}
            <h3 className="text-xl sm:text-[28px] font-semibold mt-6">
              December 2020
            </h3>

            <div className="mt-4 overflow-x-auto">
              <Calendar />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
              {images.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden border">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PostCategoryDetails;
