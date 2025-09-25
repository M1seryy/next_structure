import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative mt-3.5 mb-3.5 h-[400px] max-w-[1200px] overflow-hidden rounded-2xl'>
      <Image src={'/images/banner.jpg'} alt={'Banner'} fill sizes='100vw' className='object-cover' priority />
    </div>
  )
}
export default Banner
