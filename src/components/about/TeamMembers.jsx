import React from 'react'
import GalleryTeam from './GalleryTeam';
import icon from '../../assets/abouticon.png'
import { useMediaQuery } from 'react-responsive';
import GalleryPhone from './GalleryPhone';
import { useNavigate} from 'react-router-dom'

function TeamMembers() {
  const isXLarge = useMediaQuery({ minWidth: 1280 });
  const navigate=useNavigate()
  return (
    <div className=' mx-auto container overflow-hidden '>


        <div className='min-h-[100px] p-6 lg:mt-[0px] mt-[20px] '>
            <h1 className='text-[#585858] font_poppins font-semibold  2xl:text-[38px] lg:text-[35px] text-[22px] sm:text-[30px] md:ml-[120px] ml-[40px]  '>Meet the TEAM</h1>
        </div>

<div className='md::px-[60px] sm:px-[40px]  px-[20px]  '>
        <div className=' min-h-[800px] border-[1px] border-[#9C9797]  '>


           <div className='  mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 pt-[60px] mb-[50px]  '> 
            <p className='ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-14 text-black font_poppins text-[12px] sm:text-[14px]  lg:text-[16px] xl:text-[18px] font-light leading-relaxed sm:leading-loose'>
            we are proud to introduce the dedicated and passionate individuals who make our this a thriving educational community.  Our trust is supported by a group of dedicated professionals who are passionate about making a positive impact in our community. Each member of our team brings unique skills, expertise, and a commitment to our mission of fostering growth, support, and development. Comprised of experienced leaders from various fields, they ensure that our initiatives align with our mission and values. Their oversight and guidance are crucial in driving the trust forward and achieving our long-term goals.
            </p>
              
           </div>


           <div className=' mx-[100px]  flex justify-center items-center '>
              {/* {isXLarge ? <GalleryTeam /> : <GalleryPhone />} */}
                 <GalleryPhone/>
           </div>
    </div>
</div>





        <div className='min-h-[200px] flex justify-center items-center'>
       
          <img
        src={icon}
        alt="circled-left-2"
        className="w-12 h-12 transition-transform transform hover:scale-110"
        onClick={()=>{navigate("/")}}
        />
      
       
        </div>



    </div>
  )
}

export default TeamMembers