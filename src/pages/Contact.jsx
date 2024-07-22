
import React, { useState } from 'react';
import banner_3 from '../assets/banner_3.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AxiosInstance from '../Api/AxiosInstance';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      setErrorMessage('');
      setSuccessMessage('');

      const response = await AxiosInstance.post('/create', formData);

      console.log('Form Data Submitted:', response.data);

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });

      setSuccessMessage('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className='overflow-x-hidden'>
      {/* contact banner */}
      <div className='bg-white w-full md:px-40 px-8 py-7'>
        <p className='font_poppins font-bold capitalize underline-with-space text-[#585858]  md:text-3xl text-2xl md:mb-7'>contact</p>
      </div>
      <div className='w-full  flex flex-wrap items-center md:justify-around justify-start px-16 md:px-44 py-24 bg-[#364E09] opacity-70%' style={{ backgroundImage: `url(${banner_3})`,backgroundSize:"cover",backgroundPosition: "65% 35%"}}>

        <div className='text-white  md:mb-0 mb-8'>
          <p className='font-semibold font_poppins text-[30px] md:text-[37px]'><LocalPhoneIcon style={{fontSize:"40px"}}/> Phone</p>
          <p className='text-xl md:text-[22px] mt-3 font-light'>9895254510 / 8921076844</p>
        </div>

        <div className='text-white md:mb-0 mb-8'>
          <p className='font-semibold font_poppins text-[30px] md:text-[37px]'><EmailIcon style={{ fontSize: '40px' }} /> Email</p>
          <p className='text-xl md:text-[22px] mt-3 font-light'>   info@btagglobal.com</p>
        </div>

        <div className='text-white mb-0'>
          <p className='font-semibold font_poppins text-[30px] md:text-[37px]'><LocationOnIcon style={{ fontSize: '40px' }} />Location</p>
          <p className='text-xl md:text-[22px] mt-3 font-light'>Nirmalliam Edackode P.O. Korani, Attingal <br /> Thiruvananthapuram, Kerala-695104</p>
        </div>
      </div>

      {/* contact form */}
      <div className='w-full bg-white text-center py-10 md:py-16 md:mb-11'>
        <h1 className='font_poppins font-bold text-xl md:text-3xl sm:text-2xl text-[#30326B]'>LEAVE US YOUR INFO</h1>
        <p className='font_poppins font-normal text-[15px] md:text-[22px] text-[#A0A0A0] mt-3 mb-12'>AND WE WILL GET BACK TO YOU.</p>

        <form className='lg:w-[645px] w-[320px] mx-auto'>
          <input
            className='lg:w-[645px] w-[320px] bg-[#F2F2F2] rounded-xl p-5 mb-4 font_poppins outline-0'
            type="text"
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className='md:flex flex-none gap-3'>
            <input
              className='lg:w-[317px] w-[320px] bg-[#F2F2F2] rounded-xl p-5 mb-4 font_poppins outline-0'
              type="email"
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className='lg:w-[317px] w-[320px] bg-[#F2F2F2] rounded-xl p-5 mb-4 font_poppins outline-0'
              type="tel"
              name='phone'
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className='lg:w-[645px] w-[320px] h-[174px] p-5 bg-[#F2F2F2] rounded-xl mb-4 font_poppins outline-0'
            name='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {errorMessage && (
            <div style={{ color: 'red', padding: '10px' }}>
              {errorMessage}
            </div>
          )}
          
          {successMessage && (
            <div style={{ color: 'green', padding: '10px' }}>
              {successMessage}
            </div>
          )}

          <button
            className='lg:w-[645px] w-[320px] h-[67px] bg-[#30326B] text-white rounded-xl font_poppins md:text-[22px] font-bold '
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* map area */}
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3944.2266988585925!2d76.83993797501462!3d8.669978391377722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDAnMTEuOSJOIDc2wrA1MCczMy4xIkU!5e0!3m2!1sen!2sin!4v1720507277424!5m2!1sen!2sin'
        style={{ height: '500px', border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full'
      />
    </div>
  );
}

export default Contact;



















