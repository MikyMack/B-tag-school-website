import React from 'react'
import homebanner2 from '../../assets/homebanner2.png'
import { Link } from 'react-router-dom'

function HomeSlide1() {
  return (
<div className='relative'>
  <div className='w-full h-[585px] p-10 md:p-36 relative  bg-[51%_0%] md:bg-[93%_7%]' style={{backgroundImage:`url(${homebanner2})`,backgroundSize:"cover"}}>
    <div className='absolute inset-0 bg-green-950 opacity-50'></div>
    <div className='relative w-full'>
      <h1 className='font_poppins font-bold text-white text-[28px] md:text-[50px] md:leading-[62px] mb-3 mt-[55px] md:mt-0 '>⁠Extra Mile Education and Training : Capacity Building Programmes for CBSE Educators</h1>
      <p className='font_poppins text-white font-light text-[15px] md:text-[16px] md:w-2/3 w-full'>An initiative to provide education and training by running offline programmes and institutions across India and online educational services across the Globe.  </p>
      <Link to={'/about'}>
      <button className='rounded-full px-2 md:px-4 py-1 md:py-2 border-[1px] border-slate-900 font_poppins text-[15px] md:text-[18px] font-semibold mt-5'>More Details</button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default HomeSlide1