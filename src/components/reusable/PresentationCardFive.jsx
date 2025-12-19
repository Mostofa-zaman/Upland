import { FaChevronLeft, FaSearch, FaChevronDown } from 'react-icons/fa';

const PresentationCardFive = () => {
    const categories = ["Marketing", "Meeting", "Production", "Dev", "Dashboard Design", "UI Design"];
  return (
   <div className="relative w-[375px] h-[690px] -z-50 mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden">
      {/* Main Mobile Frame */}
      <div className="w-full max-w-md bg-[#4c49d8] rounded-[45px] shadow-2xl overflow-hidden relative">
        
        {/* Header Section */}
        <div className="pt-4 pb-24 px-8 text-white relative">
          {/* Subtle Circles in background */}
          <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute top-[30px] right-[-30px] w-48 h-48 bg-white/10 rounded-full"></div>

          <div className="flex justify-between items-center relative z-10">
            <FaChevronLeft className="cursor-pointer text-xl opacity-90" />
            <h2 className="text-xl font-semibold tracking-wide">Create New Task</h2>
            <FaSearch className="cursor-pointer text-xl opacity-90" />
          </div>

          <div className="mt-6 space-y-6 relative z-10">
            <div className="border-b border-white/30 pb-1">
              <label className="text-[10px] uppercase tracking-widest text-white/70 block mb-1">Title</label>
              <input 
                type="text" 
                defaultValue="Design Meetings"
                className="w-full bg-transparent outline-none text-lg font-medium placeholder:text-white"
              />
            </div>
            <div className="border-b border-white/30 pb-1">
              <label className="text-[10px] uppercase tracking-widest text-white/70 block mb-1">Date</label>
              <input 
                type="text" 
                defaultValue="Saturday, 3 Oct 2020"
                className="w-full bg-transparent outline-none text-lg font-medium"
              />
            </div>
          </div>
        </div>

        {/* Form Container (White Section) */}
        <div className="bg-white rounded-t-[40px] -mt-18 px-8 pt-4 pb-6 relative z-20">
          
          {/* Time Selection */}
          <div className="flex justify-between gap-10 mb-8">
            <div className="flex-1 border-b border-gray-100 pb-2">
              <label className="text-xs font-semibold text-gray-400 block mb-2">Start time</label>
              <div className="flex items-center justify-between">
                <span className="text-[#303345] font-bold text-lg">4:00</span>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="font-semibold text-sm">PM</span>
                  <FaChevronDown size={12} className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex-1 border-b border-gray-100 pb-2">
              <label className="text-xs font-semibold text-gray-400 block mb-2">End time</label>
              <div className="flex items-center justify-between">
                <span className="text-[#303345] font-bold text-lg">7:00</span>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="font-semibold text-sm">PM</span>
                  <FaChevronDown size={12} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Description Textarea */}
          <div className="mb-">
            <label className="text-xs font-semibold text-gray-400 block mb-2">Description</label>
            <textarea 
              className="w-full text-gray-600 font-medium leading-relaxed resize-none outline-none border-b border-gray-100 pb-2"
              rows="2"
              defaultValue="Some text here for the description. More Project for the description."
            ></textarea>
          </div>

          {/* Category Section */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#2d3142] mb-6">Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    cat === 'Meeting' 
                    ? 'bg-[#3e3cbd] text-white shadow-lg' 
                    : 'bg-[#edf2ff] text-[#adb5cf]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Create Button */}
          <button className="w-full bg-[#827fff] hover:bg-[#716ef0] text-white py-3 rounded-[20px] text-lg font-bold shadow-xl shadow-indigo-100 active:scale-[0.98] transition-all">
            Create a task
          </button>

          {/* Bottom Home Indicator Bar */}
          <div className="flex justify-center mt-4">
            <div className="w-36 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresentationCardFive