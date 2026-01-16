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
const images = [img1, img2, img3, img4, img5, img6];

const tags = [
  ["Android app", "IOS app", "Mobile"],
  ["App design", "Development"],
  ["Collaboration", "Download"],
];
const PostCategoryDetails = () => {
  return (
    <section className=" pb-30 mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-[70%30%]  gap-6">
          <div className="w-[760px]">
            <div className="bg-[#e3e6ff] h-80 relative rounded-2xl">
              <span className="absolute bottom-0 left-10 bg-orange-500 text-white text-xs font-bold px-2 py-4 rounded-t">
                DEC <br /> 10
              </span>
            </div>

            <div className="flex items-center space-x-3 py-4 text-sm text-gray-500">
              <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
              <p className="font-extrabold">Leslie Alexander</p>
              <span>&#183; Mobile</span>
              <span>&#183; Share</span>
              <span className="ml-auto text-gray-400 text-lg"></span>
            </div>
            {/* text */}
            <div className="">
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 pb-6.25">
                A Selection Of The Best Apps For 2020
              </h1>

              {/* Intro text */}
              <p className="text-gray-600 leading-relaxed pb-10">
                There’s such a thing as “too much information”, especially for
                the companies scaling out their sales operations. That’s why
                Attentive was born in 2015 help sales teams make their
                increasing pipelines simpler to manage. Indeed, the small,
                Portugal-based team is itself focused on scaling, having much
                participated in
              </p>

              <p className="text-gray-600 leading-relaxed pb-10">
                In this episode, Attentive founder Robert Fox talks about what
                it takes to build a tech new product from the ground up.
                Discover their approach to running an engineering team, from
                adopting new open source technologies, to onboarding junior
                developers and learning .
              </p>

              {/* Quote box */}
              <div className="bg-gray-50 border-l-4 border-orange-400 p-10 leading-8  rounded-2xl shadow-lg">
                <p className="italic text-gray-700">
                  “Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non aliqua occaecat ea sunt. Commodo non duis aute
                  mollit sint. Mollit veniam dolor aliqua nulla sit est do
                  mollit esse ut amet.”
                </p>
                <p className="mt-3 font-semibold text-gray-800">— Robert Fox</p>
              </div>

              {/* Sub Title */}
              <h2 className="text-xl font-semibold text-gray-800 pt-16 pb-8">
                Better Security and faster Server
              </h2>

              <p className="pb-10">
                There’s such a thing as “too much information”, especially for
                the companies scaling out their sales operations. That’s why
                Attentive was born in 2015 help sales teams make their
                increasing pipelines simpler to manage. Indeed, the small.
              </p>

              {/* List */}
              <ul className="list-disc list-inside text-gray-600 space-y-2 pb-10">
                <li>We've been supporting WordPress since the beginning.</li>
                <li>Our easy-to-use control panel and API let you spend.</li>
                <li>
                  Perfect for large sites or agencies managing multiple clients.
                </li>
              </ul>

              {/* Footer text */}
              <p className="text-gray-600 leading-relaxed pb-10">
                There’s such a thing as “too much information”, especially for
                the companies scaling out their sales operations. That’s why
                Attentive was born in 2015 help sales teams make their
                increasing pipelines simpler to manage. Indeed, the small,
                Portugal-based team is itself focused on scaling, having much
                participated in accelerator
              </p>
              <p>
                In this episode, Attentive founder Robert Fox talks about what
                it takes to build a tech new product from the ground up.
                Discover their approach to running an engineering team, from
                adopting new open source technologies, to onboarding junior
                developers and learning.
              </p>

              {/* Tags */}
              <div className="flex gap-3 text-sm items-center text-gray-500 pt-8">
                <p className="text-[16px] font-bold text-black">tages :</p>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  Android app
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  iOS app
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  Mobile
                </span>
              </div>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - -- - - - -- -
              </span>

              <div className="grid grid-cols-[30%70%] gap-4 p-8 rounded-2xl shadow-lg mt-8 ">
                <div className="">
                  <img src={fox} alt="" />
                </div>
                <div className=" ">
                  <h3 className="text-[28px] font-semibold">Robert Fox</h3>
                  <p className="w-[508px] text-[16px] font-normal ">
                    Ullamco exercitation incididunt ut fugiat ex velit nulla.
                    Lorem amet ut ad aute irure exercitation elit exercitation
                    Lorem non accaecat ea sunt.
                  </p>
                  <div className=" flex gap-4 items-center pt-4">
                    <span>FB . </span>
                    <span>TW . </span>
                    <span>IN </span>
                  </div>
                </div>
              </div>
            </div>
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

export default PostCategoryDetails;
