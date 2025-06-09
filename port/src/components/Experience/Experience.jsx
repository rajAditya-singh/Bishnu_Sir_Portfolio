import React from 'react'
import { experiences } from '../../constants'

function Experience() {
  return (
    <section 
      id='experiences'
      className='py-24 pb-24 px-[5vw] md:px-[5vw] lg:px-[12vw] font-sans bg-skills-gradient'
    >

      <div className='text-center'>
        <h2 className='text-white text-4xl font-bold'>EXPERIENCE</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-2'></div>
        <p className='text-lg text-gray-400 mt-4 font-semibold'>A collection of my work experience and the roles I have taken in various organizations</p>
      </div>

      <div className='relative'>
        {/* vertical line */}
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full'></div>

        
      </div>

    </section>
  )
}

export default Experience