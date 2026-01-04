import React from 'react'

const Easy = () => {
  return (
   <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-semibold leading-tight mb-6 w-[450px]">
            Easy Download And  Ready To Use
          </h2>

          <p className="text-gray-500 text-base leading-7 mb-10 max-w-md w-[430px]">
            Velit occaecat duis occaecat nostrud. Veniam occaecat id ea
            Lorem est officia excepteur cupidatat consectetur. Labore do
            nulla ipsum dolore ipsum. Proident excepteur ex aliqua
            cupidatat adipisicing.
          </p>

          <div className="flex items-center gap-6">
            {/* Google Play */}
            <button className="flex items-center gap-3 bg-orange-500 text-white px-10 py-4 rounded-full font-medium shadow-md">
              <span className="text-xl pl-0">▶</span>
              <span className="text-sm leading-tight text-left">
                Download on the <br />
                <strong>GOOGLE PLAY</strong>
              </span>
            </button>

            {/* App Store */}
            <button className="flex items-center gap-3 border-2 border-orange-500 text-orange-500 px-7 py-4 rounded-full font-medium">
              <span className="text-xl"></span>
              <span className="text-sm leading-tight text-left">
                Download on the <br />
                <strong>APP STORE</strong>
              </span>
            </button>
          </div>
        </div>

       <div className="flex  justify-between">
         {/* Basic Plan */}
        <div className="text-left">
          <p className="text-orange-500 text-sm font-semibold mb-2">BASIC</p>
          <h3 className="text-4xl font-semibold mb-1">
            $12<span className="text-lg align-top">.99</span>
          </h3>
          <p className="text-gray-400 text-sm mb-6">/per month</p>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Proident excepteur
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Veniam occaecat id ea
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Labore do nulla ipsum
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Culpa non ex tempor qui
            </li>
          </ul>
        </div>

        {/* Popular Plan */}
        <div className="text-left">
          <p className="text-orange-500 text-sm font-semibold mb-2">POPULAR</p>
          <h3 className="text-4xl font-semibold mb-1">
            $99<span className="text-lg align-top">.99</span>
          </h3>
          <p className="text-gray-400 text-sm mb-6">/per year</p>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Velit occaecat duis
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Culpa non ex tempor qui
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Excepteur cupidatat consectetur
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500">•</span> Proident excepteur
            </li>
          </ul>
        </div>
       </div>

      </div>
    </section>

  )
}

export default Easy