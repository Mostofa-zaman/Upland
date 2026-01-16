import React from "react";

const Comment = () => {
  return (
    <section className="pb-10 mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row  gap-12">
        <div className="max-w-3xl mt-1 space-y-10">
          {/* Comments title */}
          <h3 className="text-lg font-semibold text-gray-800">Comments (3)</h3>

          {/* Single Comment */}
          {["Jacob Jones", "Arlene McCoy", "Ronald Richards"].map(
            (name, index) => (
              <div
                key={index}
                className="flex gap-4 pb-6 border-b border-dashed border-gray-200"
              >
                {/* Avatar dot */}
                <span className="w-3 h-3 mt-2 rounded-full bg-purple-400"></span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm">
                    <p className="font-semibold text-gray-800">{name}</p>
                    <span className="text-gray-400 text-xs">
                      • DEC 10, 2020
                    </span>
                    <button className="text-orange-500 text-xs font-medium hover:underline">
                      Reply
                    </button>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Ullamco exercitation incididunt ut fugiat ex velit nulla.
                    Lorem amet ut ad aute irure exercitation elit exercitation
                    Lorem non aliqua occaecat ea sunt.
                  </p>
                </div>
              </div>
            )
          )}

          {/* Leave a Reply */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Leave A Reply
            </h3>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Button */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium px-6 py-2 rounded-full shadow-md transition">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
