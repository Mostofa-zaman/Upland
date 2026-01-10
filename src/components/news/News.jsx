import React from 'react'

const News = () => {
  return (
    <section>
         <div className="max-w-6xl mx-auto px-4 items-center justify-center ">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-10 py-20">
                <div className=""> 

            <h1 className='text-[50px] font-semibold'>Read The Latest News And Articles</h1>
            <p className='text-[16px] font-normal pt-7.5 pb-12.5'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
            <button className='text-[#FF6231] text-[12px] font-medium  underline mt-5'>
                READ MORE
            </button>

                </div>
                <div className="">
                    <h6 className='text-[#FF6231]'>Dec 10, 2020</h6>
                    <h2 className='text-[28px] font-semibold pt-5 pb-10'>Launch of a new convenient feature this Saturday. Trend 2020</h2>
                    <p className='text-[16px] font-normal'>Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.</p>
                    <div className="flex items-center gap-4 pt-10">
                        <p>Annette Black     .</p>
                        <p>Share</p>
                    </div>
                     </div>
            </div>
         </div>
    </section>
  )
}

export default News