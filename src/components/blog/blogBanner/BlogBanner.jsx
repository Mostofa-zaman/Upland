import React from 'react'
import CommonBanner from '../../reusable/CommonBanner'

const BlogBanner = () => {
  return (
    <section className='bg-violet-400 pt-40 pb-30 mb-10'>
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
      <CommonBanner title="Blog " pera="Home" subpera="Blog"/>
    </div>
   </section>
  )
}

export default BlogBanner