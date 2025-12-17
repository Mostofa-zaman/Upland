import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa';


const pricingPlans = [
        {
            price: "$12",
            per: "/month",
            features: ["5 Gb cloud storage", "Unlimited user", "Support 24/7"],
            isFeatured: false
        },
        {
            price: "$99",
            per: "/year",
            features: ["10 Gb cloud storage", "Unlimited user", "Premium Support"],
            isFeatured: true
        },
    ];
const Easy = ({plan}) => {

    <div className={`p-8 rounded-xl text-center transition duration-500 shadow-lg ${plan.isFeatured ? 'bg-upland-dark text-white border-4 border-orange-500 transform scale-105' : 'bg-white text-gray-800 border border-gray-100'}`}>
            <h4 className="text-5xl font-extrabold mb-1">{plan.price}</h4>
            <p className={`text-sm font-medium mb-6 ${plan.isFeatured ? 'text-gray-300' : 'text-gray-500'}`}>{plan.per}</p>
            
            <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                    <li key={i} className={`${plan.isFeatured ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                    </li>
                ))}
            </ul>
            
            <button className={`w-full py-3 rounded-full font-semibold transition duration-300 ${plan.isFeatured ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Get Started
            </button>
        </div>
    
  return (
    <div>
        <section className="py-20 -mt-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Easy Download And Ready To Use
        </h2>

        {/* Download Buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          <button className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300 shadow-md">
            <FaApple className="mr-2 text-xl" /> App Store
          </button>
          <button className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300 shadow-md">
            <FaGooglePlay className="mr-2 text-xl" /> Google Play
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>


    </div>
  )
}

export default Easy