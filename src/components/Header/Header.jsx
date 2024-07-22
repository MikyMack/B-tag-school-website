
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>

          <div className='w-full h-[0px] md:h-[25px] flex bg-[#81D002] text-white font_poppins text-[12px] items-center px-32 justify-end' >
            <p>Ph: 9895254510 / 8921076844&nbsp;&nbsp; info@btagglobal.com </p>
          </div> 
   
      {/* MainHeader */}
          <div className='min-h-[80px] grid sm:grid-cols-12 sm:w-auto w-full shadow-lg'>
            {/* titleSection */}
            <div className='flex sm:justify-start items-center sm:p-4 justify-between p-4 sm:col-span-5'>
              <a href="/" className="elementor-widget-cmsmasters-site-logo__link" rel="nofollow">
                <img  src={logo}  alt=""
                  title="BtagLogo"
                  className="cmsmasters-lazyload-disabled elementor-widget-cmsmasters-site-logo__img elementor-widget-cmsmasters-site-logo-main w-18 h-14"/>
              </a>
              <div className='ms-0 md:ms-3'>
                <p className='md:text-xl text-base font_poppins font-bold text-[#585858]'>BTAG Global Educational Trust</p>
              </div>
              <div className='sm:hidden'>
                <button onClick={toggleMenu}>
                  {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
                </button>
              </div>
            </div>
    
            {/* navlinkssection */}
            <div className={`mb-5 md:mb-0 flex-col gap-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-5 md:space-x-10 md:justify-center justify-start items-center sm:flex ${isOpen ? 'flex' : 'hidden'} sm:block sm:p-4 sm:col-span-7`}>
              <Link to="/" onClick={closeMenu}>
                <h3 className={`text-sm lg:text-lg uppercase font-light font_abeezee hover:text-[#73AB3A] ${location.pathname==="/"?"text-[#73AB3A] underline":" "}`}>Home</h3>
              </Link>
              <Link to='/about' onClick={closeMenu}>
                <h3 className={`text-sm lg:text-lg uppercase font-light font_abeezee hover:text-[#73AB3A]  ${location.pathname==='/about'?"text-[#73AB3A] underline":" "}`}>About</h3>
              </Link>
              <Link to='/institution' onClick={closeMenu}>
                <h3 className={`text-sm lg:text-lg uppercase font-light font_abeezee hover:text-[#73AB3A] ${location.pathname==='/institution'?"text-[#73AB3A] underline":" "}`}>institutions</h3>
              </Link>
              <Link to='/newsandevents' onClick={closeMenu}>
                <h3 className={`text-sm lg:text-lg uppercase font-light font_abeezee hover:text-[#73AB3A] ${location.pathname==='/newsandevents'?"text-[#73AB3A] underline":" "}`}>events</h3>
              </Link>
              <Link to='/contact' onClick={closeMenu}>
                <h3 className={`text-sm lg:text-lg uppercase font-light font_abeezee hover:text-[#73AB3A] ${location.pathname==='/contact'?"text-[#73AB3A] underline":" "}`}>Contact</h3>
              </Link>
            </div>
          </div>
        </div>

  );
}

export default Header;
