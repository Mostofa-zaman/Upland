import popup from "../assets/popup.png";

const Popup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative flex items-center justify-center">

        {/* LEFT IMAGE (behind card) */}
        <img
          src={popup}
          alt="Left decoration"
          className="hidden sm:block absolute -left-24 md:-left-32 bottom-0 w-28 sm:w-32 md:w-40 z-0"
        />

        {/* MAIN CARD */}
        <div className="relative z-10 w-full max-w-[420px] rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-500 p-6 sm:p-8 text-white">
            
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
              Get A Free Trial For <br />
              <span className="text-orange-400 font-bold">30 Days</span>
            </h2>

            <p className="text-sm text-white/80 mt-4 mb-6">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea
              incididunt dolore ipsum tempor duis do ullamc.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-5 py-3 rounded-2xl bg-white text-gray-800 placeholder-gray-400 outline-none resize-none"
              />

              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
              >
                Get A Free Trial
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
