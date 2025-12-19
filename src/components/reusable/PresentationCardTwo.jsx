import React from "react";
import { FiArrowLeft, FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const PresentationCardTwo = () => {
  return (
    <div className="relative w-[375px] h-[690px] -z-30 mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <FiArrowLeft className="text-xl text-gray-800" />
        <FiSearch className="text-xl text-gray-800" />
      </div>

      {/* Month */}
      <div className="px-6 mt-6">
        <h1 className="text-2xl font-semibold text-gray-900">Oct, 2020</h1>
      </div>

      {/* Dates */}
      <div className="flex gap-6 px-6 mt-6">
        <div className="bg-indigo-600 text-white rounded-xl px-4 py-3 text-center shadow">
          <p className="text-lg font-semibold">10</p>
          <p className="text-xs opacity-80">Mon</p>
        </div>

        {[
          { d: 11, day: "Tue" },
          { d: 12, day: "Wed" },
          { d: 13, day: "Thu" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-lg font-semibold text-gray-800">{item.d}</p>
            <p className="text-xs text-gray-400">{item.day}</p>
          </div>
        ))}
      </div>

      {/* Task Section */}
      <div className="mt-10 bg-gray-50 rounded-t-[30px] px-6 pt-6 pb-24 h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">Task</h2>
          <FiMoreHorizontal className="text-gray-400" />
        </div>

        {/* Task Cards */}
        {[
          { title: "UI Development", time: "2 days ago" },
          { title: "Dashboard Design", time: "4 days ago" },
          { title: "Landing Page", time: "6 days ago" },
        ].map((task, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <HiOutlineClipboardDocumentList />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-xs text-gray-400">{task.time}</p>
              </div>
            </div>

            <FiMoreHorizontal className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-8 flex justify-between text-gray-400 rounded-b-[40px]">
        <span>🏠</span>
        <span className="text-indigo-600">📅</span>
        <span>🔔</span>
        <span>🔍</span>
      </div>
    </div>
  );
};

export default PresentationCardTwo;
