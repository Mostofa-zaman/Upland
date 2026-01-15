import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-80 mx-auto bg-white rounded-xl shadow-md p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>

        <h2 className="font-semibold text-lg">{monthYear}</h2>

        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Week days */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 mt-3 text-center">
        {/* Empty cells */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={i}></div>
        ))}

        {/* Month dates */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = i + 1;
          const isToday =
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={date}
              className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
                ${
                  isToday
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
