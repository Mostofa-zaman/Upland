import { FaCheckCircle } from 'react-icons/fa';
import popularimg from '../../assets/popularimg.png'
const Popular = () => {
    const listItems = [
        "Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.",
        "Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. ",
        "Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id."
    ];
  return (
 

<section className="py-20  mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content / Illustration */}
        <div className="lg:w-1/2  ">
          <img className='w-full' src={popularimg} alt="" />
        </div>

        {/* Right Content / Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-semibold max-w-75 leading-12 text-gray-800 mb-4">
            The Most Popular Application 2021
          </h2>
          <p className="text-gray-500 text-lg max-w-90 mb-8">
            Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum.
          </p>

          <ul className="space-y-4">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-[#FF6231] text-xl mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 max-w-100">
                  {item}
                </span>
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </section>

  )
}

export default Popular