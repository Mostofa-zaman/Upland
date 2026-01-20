import fox from '../../assets/404img.png'

const Page404 = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[80px] font-extrabold text-black leading-none">
              404
            </h1>

            <h2 className="text-2xl font-semibold text-black mt-4">
              Page Not Found
            </h2>

            <p className="text-gray-500 mt-4 max-w-md">
              It looks like nothing was found at this location.
              Maybe try a search?
            </p>

            {/* Search box */}
            <div className="mt-6 relative max-w-sm">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-400"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE / PLACEHOLDER */}
          
      <div className="relative flex justify-center lg:justify-end">

        <img src={fox} alt="" />
      </div>

        </div>
      </div>
    </section>
  )
}

export default Page404