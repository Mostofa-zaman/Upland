import React from 'react'
import CommonBanner from '../reusable/CommonBanner'

const PostBanner = () => {
  return (
    <section className="bg-[#2A2895] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-30 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
        <CommonBanner title="Post" pera="Home" subpera="Post" />
      </div>
    </section>
  )
}

export default PostBanner
