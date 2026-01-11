import { FiSearch } from "react-icons/fi";
import BlogCategoryreusable from "../../reusable/BlogCategoryreusable";

const BlogCategory = () => {
  return (
    <section className=" pb-30 mb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-[70%30%]  gap-4">
          <div className=" gap-10 grid lg:grid-cols-1 md:grid-cols-2 ">
            <BlogCategoryreusable />
            <BlogCategoryreusable />
            <BlogCategoryreusable />
          </div>
    <div className="flex flex-col justify-between">
  {/* <button
    type="button"
    className="flex   text-black px-20 py-2 rounded-lg shadow-md transition-colors duration-300"
  >
    Search
   <div className="absulute    translate-x-[150px]">
     <FiSearch className="w-5 h-5" color="red" />
   </div>
  </button> */}

  

<form class="max-w-md mx-auto">   
    <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-40 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
        <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
    </div>
</form>


</div>


        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
