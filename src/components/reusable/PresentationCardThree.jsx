
import React from "react";
import {
  FiMenu,
  FiSearch,
  FiSliders,
  FiMoreVertical,
  FiPlus,
} from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const PresentationCardThree = () => {
  return (
  <div className="relative w-[375px] h-[690px] mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <FiMenu className="text-xl" />
        <div className="flex gap-4">
          <FiSearch className="text-xl" />
          <FiSliders className="text-xl" />
        </div>
      </div>

      {/* Greeting */}
      <div className="flex items-center gap-4 px-6 mt-6">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
          J
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Hi, Jasmine</h2>
          <p className="text-sm text-gray-400">Welcome back</p>
        </div>
      </div>

      {/* My Tasks */}
      <div className="px-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900">My tasks</h3>

        {/* Tabs */}
        <div className="flex gap-6 mt-4 text-sm">
          <span className="text-indigo-600 font-medium">Recently</span>
          <span className="text-gray-400">Today</span>
          <span className="text-gray-400">Upcoming</span>
          <span className="text-gray-400">Later</span>
        </div>
      </div>

      {/* Horizontal Cards */}
      <div className="flex gap-4 px-6 mt-6 overflow-x-auto pb-2">
        {/* Card 1 */}
        <div className="min-w-[160px] h-[180px] bg-indigo-500 text-white rounded-2xl p-4 relative">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
            Team task
          </span>

          <h4 className="mt-6 font-semibold">User interface design</h4>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs mb-1">Progress</p>
            <div className="w-full h-2 bg-white/30 rounded-full">
              <div className="w-[80%] h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-xs text-right mt-1">80%</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[160px] h-[180px] bg-indigo-900 text-white rounded-2xl p-4 relative">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
            Team task
          </span>

          <h4 className="mt-6 font-semibold">Wireframe elements</h4>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs mb-1">Progress</p>
            <div className="w-full h-2 bg-white/30 rounded-full">
              <div className="w-[35%] h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-xs text-right mt-1">35%</p>
          </div>
        </div>

        {/* Card 3 (partial view) */}
        <div className="min-w-[160px] h-[180px] bg-gray-900 text-white rounded-2xl p-4">
          <h4 className="mt-10 font-semibold">Landing design</h4>
        </div>
      </div>

      {/* Task List */}
      <div className="mt-8 px-6 pb-28 space-y-4">
        {[ 
          { date: "17 August 2020" },
          { date: "26 July 2020" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-indigo-50 rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <HiOutlineClipboardDocumentList />
              </div>
              <div>
                <h4 className="font-medium">Lorem ipsum dolor</h4>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
            <FiMoreVertical className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-8 flex justify-between items-center">
        <span>🏠</span>
        <span>📅</span>

        <button className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white -mt-8 shadow-lg">
          <FiPlus size={22} />
        </button>

        <span>📄</span>
        <span>👤</span>
      </div>
    </div>
  )
}

export default PresentationCardThree





   


