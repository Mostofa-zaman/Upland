
import blogimg from '../../assets/blogimg.png'

const BlogCategoryreusable = () => {
  return (
     <div className=" bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image section */}
      <div className=" h-80 relative">
      <img className='bg-cover h-80 w-full' src={blogimg} alt="" />
        <span className="absolute bottom-0 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-4 rounded-t">
          DEC <br/> 10
        </span>
      </div>

      {/* Content section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          A Selection Of The Best Apps For 2020
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>

        {/* Author info */}
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <span className="bg-purple-300 w-3 h-3 rounded-full"></span>
          <p className='font-extrabold'>Leslie Alexander</p>
          <span>&#183; Mobile</span>
          <span>&#183; Share</span>
          <span className="ml-auto text-gray-400 text-lg">&#8594;</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCategoryreusable