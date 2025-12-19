import React from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

const PresentationCardFour = () => {
  return (
    <div className="relative w-[375px] h-[690px]  mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <FiArrowLeft className="text-xl text-gray-800" />
        <div className="flex gap-4">
          <FiSearch className="text-xl text-gray-800" />
          <FiSliders className="text-xl text-gray-800" />
        </div>
      </div>

      {/* Date Title */}
      <div className="px-6 mt-2">
        <p className="text-sm text-gray-400">Aug, 13 2020</p>
        <h1 className="text-2xl font-semibold text-gray-900">Today</h1>
      </div>

      {/* Week Days */}
      <div className="flex justify-between px-6 mt-2 text-center text-sm">
        {[
          { day: "MON", d: 10 },
          { day: "TUE", d: 11 },
          { day: "WED", d: 12 },
          { day: "THU", d: 13, active: true },
          { day: "FRI", d: 14 },
          { day: "SAT", d: 15 },
          { day: "SUN", d: 16 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-gray-400">{item.day}</span>
            <span
              className={`mt-1 font-semibold ${
                item.active ? "text-indigo-600" : "text-gray-900"
              }`}
            >
              {item.d}
            </span>
            {item.active && (
              <span className="w-1 h-1 bg-indigo-600 rounded-full mt-1"></span>
            )}
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="mt-4 bg-gray-50 rounded-t-[30px] px-6 pt-6 pb-28 h-full">
        {/* Drag Indicator */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

        {/* Title */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Task Title"
            className="w-full mt-2 p-4 rounded-xl bg-indigo-50 text-sm outline-none"
          />
        </div>

        {/* Creation Date */}
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700">
            Creation date
          </label>
          <input
            type="text"
            value="17 August 2020"
            readOnly
            className="w-full mt-2 p-4 rounded-xl bg-indigo-50 text-sm outline-none"
          />
        </div>

        {/* Start Date */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">
              Start date & time
            </label>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              August <FiChevronDown />
            </div>
          </div>

          <div className="flex justify-between text-center text-sm">
            {[
              { day: "MON", d: 10 },
              { day: "TUE", d: 11, active: true },
              { day: "WED", d: 12 },
              { day: "THU", d: 13 },
              { day: "FRI", d: 14 },
              { day: "SAT", d: 15 },
              { day: "SUN", d: 16 },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center px-2 py-3 rounded-xl ${
                  item.active
                    ? "bg-indigo-600 text-white"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">{item.day}</span>
                <span className="font-semibold">{item.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Toggle */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm font-medium text-gray-700">
            Get alert for this task
          </p>
          <div className="w-12 h-6 bg-indigo-600 rounded-full flex items-center px-1">
            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-8 bg-indigo-500 text-white py-4 rounded-2xl font-medium">
          Create a task
        </button>
      </div>
    </div>
  )
}

export default PresentationCardFour