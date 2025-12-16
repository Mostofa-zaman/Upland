import setwo from '../../assets/seetwo.png'
import seone from '../../assets/seeone.png'
import sethree from '../../assets/seethree.png'

const FeatureCard = ({ title, description, image }) => (
  <div className="p-8 text-center h[600px] bg-white shadow-lg rounded-2xl border border-gray-100 transition duration-500 hover:shadow-2xl">

    <div className="flex justify-center mb-6">
      <img
        src={image}
        alt={title}
        className="w-70 h-70 object-contain"
      />
    </div>

    <h3 className="text-xl font-bold text-gray-800 mb-3">
      {title}
    </h3>
    <p className="text-gray-500 text-sm">
      {description}
    </p>
  </div>
);

const Feature = () => {

    const featuresData = [
    {
      title: "Development courses",
      description: "Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.",
     image:sethree,
    },
    {
      title: "Money saving services",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      image:seone,
    },
    {
      title: "Usability interface",
      description: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.",
      image:setwo,
    },
  ];
  return (
    <div>
        <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          See What You Will Get With Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default Feature