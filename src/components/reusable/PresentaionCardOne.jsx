import React from 'react'
import {
  FiArrowLeft,
  FiSearch,
  FiSliders,
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";

const PresentaionCardOne = () => {
  return (
    <div className="w-[375px] h-[730px] mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <FiArrowLeft className="text-xl" />
        <div className="flex gap-4">
          <FiSearch className="text-xl" />
          <FiSliders className="text-xl" />
        </div>
      </div>

      {/* Date */}
      <div className="px-6 mt-6">
        <p className="text-sm text-gray-400">Aug, 13 2020</p>
        <h1 className="text-2xl font-semibold text-gray-900">Today</h1>
      </div>

      {/* Week days */}
      <div className="flex justify-between px-6 mt-6 text-center text-sm">
        {[
          { day: "MON", date: 10 },
          { day: "TUE", date: 11 },
          { day: "WED", date: 12 },
          { day: "THU", date: 13 },
          { day: "FRI", date: 14 },
          { day: "SAT", date: 15 },
          { day: "SUN", date: 16 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-gray-400">{item.day}</span>
            <span
              className={`mt-1 font-semibold ${
                item.active ? "text-indigo-600" : "text-gray-900"
              }`}
            >
              {item.date}
            </span>
            {item.active && (
              <span className="w-1 h-1 bg-indigo-600 rounded-full mt-1"></span>
            )}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="flex gap-4 px-6 mt-8">
        {/* Line */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 border-2 border-indigo-500 rounded-full"></div>
          <div className="w-[2px] h-full bg-gray-200 mt-2"></div>
        </div>

        {/* Cards */}
        <div className="flex-1 space-y-4">
          {/* Main Card */}
          <div className="bg-indigo-700 text-white rounded-2xl p-5 relative">
            <h3 className="font-semibold text-lg">Design Meeting</h3>
            <p className="text-sm opacity-80 mt-1">
              Make a landing page app and mobile
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white border"
                  ></div>
                ))}
              </div>
              <span className="text-sm">09 : 30</span>
            </div>
          </div>

          {/* Small Cards */}
          {[
            { title: "Team Meeting", time: "10 : 30" },
            { title: "Client Update", time: "11 : 00" },
            { title: "Stackholder Interview", time: "12 : 30" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl p-4 flex justify-between items-center"
            >
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm">{item.time}</p>
                <FiMoreHorizontal className="text-gray-400 mt-2 ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 flex justify-between items-center">
        <div className="text-indigo-600">🏠</div>
        <div>📅</div>

        <button className="bg-indigo-600 w-14 h-14 rounded-full flex items-center justify-center text-white  shadow-lg">
          <FiPlus size={24} />
        </button>

        <div>📄</div>
        <div>👤</div>
      </div>
    </div>
  )
}

export default PresentaionCardOne