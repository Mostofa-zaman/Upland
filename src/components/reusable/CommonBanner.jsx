import React from 'react'

const CommonBanner = ({title , pera, subpera}) => {
  return (
    <div className="">
        <h1 className='text-[60px] text-white font-semibold '>{title}</h1>
        <h5 className='flex gap-3 text-white'>{pera} <span>.</span> {subpera}</h5>
    </div>
  )
}

export default CommonBanner