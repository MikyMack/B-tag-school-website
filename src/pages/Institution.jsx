import React from 'react'
import InstitutionCards from '../components/institution/InstitutionCards'

function Institution() {
  return (
    <div className='container mx-auto overflow-hidden'>
         <div>
              <div className='m-8 '>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold   text-[#585858] underline-with-space font_poppins ml-[90px]'>Institutions</h1>
              </div>

              <div className='md:px-[80px] px-[20px]  '>
                <InstitutionCards/>
              </div>
         </div>
    </div>
  )
}

export default Institution