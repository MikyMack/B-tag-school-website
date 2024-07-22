import React from 'react'
import logo from '../../../assets/logo.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='overflow-x-hidden'>
    <div className='bg-[#67A800] px-12 md:px-36 py-16 w-full'>

        <div className='bg-slate-0 w-full flex flex-wrap items-start justify-evenly gap-5'>

        <div className='w-full md:w-[40%] lg:w-[28%] lg:me-8 lg:ms-8'>
           <div className='flex  leading-6 items-center'>
            
                    <img className='w-14 h-10 me-1' src={logo} alt="btaglogo"/>
                    <h1 className='font_poppins text-white font-semibold text-[15px]'>BTAG Global Educational Trust</h1>
            
           </div>
            <p className='font_poppin text-justify text-[#D2D6CE] text-[15px] leading-6 mt-3 '>
            An initiative to provide education and training by running offline programmes and institutions across India and online educational services across the Globe. 
            </p>
        </div>
        <div className='w-full md:w-[40%] lg:w-[15%]'>
            <ul className='font_poppins text-white leading-6  text-[15px]'>
                <li className='font-semibold mb-5 mt-2'>Institutions </li>
                <li className='text-[#D2D6CE]'>1. ARR Public School</li>
                <li className='text-[#D2D6CE]'>2. Extra Mile Education & Training</li>
                <li className='text-[#D2D6CE]'>3. BTAG WhatsApp community </li>
            </ul>
        </div>
        <div className='w-full md:w-[40%] lg:w-[10%]'>
            <ul className='font_poppins text-white leading-6 text-[15px]'>             
                <li className='font-semibold mb-5 mt-2'>Community</li>
                <li className='text-[#D2D6CE]'>About Us</li>
                <li className='text-[#D2D6CE]'>Contact Us</li>
                <li className='text-[#D2D6CE]'>Events</li>
            </ul>
        </div>
        <div className='w-full md:w-[40%] lg:w-[30%]'>
            <ul className='font_poppins text-white leading-6  text-[15px]'>
            <li className='font-semibold mb-5 mt-2'>Follow Us : 

            <a href='https://www.facebook.com/ExtraMileET?mibextid=ZbWKwL' target='_blank'><FacebookRoundedIcon className='mb-1 me-2 ms-2'/></a>
            <a href='' target='_blank'><WhatsAppIcon className='mb-1 me-2'/></a>
            <a href='https://www.youtube.com/@extramileET' target='_blank'><YouTubeIcon className='mb-1 me-2'/></a>
            <a href='' target='_blank'><InstagramIcon className='mb-1'/></a>
      
            </li>
                <li className='font-semibold mb-5'>Contact : <span className='text-[#D2D6CE] font-normal'>9895254510 / 8921076844</span> </li>
                <li className='font-semibold '>Address : <span className='text-[#D2D6CE] font-normal'>
B-TAG Global Educational Trust
Nirmalliam Edackode P.O. Korani, Attingal 
Thiruvananthapuram, Kerala-695104
</span></li>
            </ul>
        </div>

        </div>

        <hr className='mx-auto mt-10 opacity-40 w-full '/>

        <div>
            <p className='text-[#D2D6CE] font-semibold text-[15px] mt-7 lg:ms-11 md:ms-9'>© BTAG Global Educational Trust. We love our users!</p>
        </div>
    </div>
    
    </div>
  )
}

export default Footer