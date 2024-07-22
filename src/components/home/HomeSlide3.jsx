import React from 'react'
import homebanner3 from '../../assets/homebanner3.png'
import { Link } from 'react-router-dom'

function HomeSlide1() {
  return (
<div className='relative'>
  <div className='w-full h-[585px] p-14 md:p-36 relative bg-[60%_40%]' style={{backgroundImage:`url(${homebanner3})`,backgroundSize:"cover"}}>
    <div className='absolute inset-0 bg-green-950 opacity-50'></div>
    <div className='relative  w-full'>
      <h1 className='font_poppins font-bold text-white text-[28px] md:text-[50px] md:leading-[62px] mb-3 mt-10 md:mt-0'>⁠Empowering the individual to build the nation</h1>
      <p className='font_poppins text-white font-light text-[15px]  md:text-[16px] md:w-2/3 w-full'>An initiative to provide education and training by running offline programmes and institutions across India and online educational services across the Globe.  </p>
      <Link to={'/about'}><button className='rounded-full px-2 md:px-4 py-1 md:py-2 border-[1px] border-slate-900 font_poppins text-[15px] md:text-[18px] font-semibold mt-5'>More Details</button></Link>
    </div>
  </div>
</div>

  )
}

export default HomeSlide1