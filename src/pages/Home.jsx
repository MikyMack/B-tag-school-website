import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeSlide1 from '../components/home/HomeSlide1';
import HomeSlide2 from '../components/home/HomeSlide2';
import HomeSlide3 from '../components/home/HomeSlide3';
import 'swiper/css';
import 'swiper/css/pagination';
// import homeabout from '../assets/homeabout.jpeg'
import homeabout from '../assets/homeabout.jpg'
import home_play1 from '../assets/home_play1.png'
import HomeActivities from '../components/home/HomeActivities'
import HomeTestimonials from '../components/home/HomeTestimonials';
import homeicon from '../assets/homeicon.png'
import InstitutionCards from '../components/home/InstitutionCard';
import founder from  '../assets/founder.png'
import coaching from '../assets/coaching.png'
import { Link } from 'react-router-dom';

function Home() {

  const dummyData = [
    { 
      image: coaching,
      title: '⁠Empowering children to face the challenges of the 21st century',
      text: 'Support and establish schools, colleges, and training centers for diverse education.'
    },
    { 
      image: coaching,
      title: '⁠Ensuring the wholistic development of  children',
      text: 'Conduct research, offer consultancy, and provide help for academic excellence.'
    },
    {
      image: coaching,
      title: 'Empowering educators to bring out the best in the children',
      text: 'Publish books and digital content to enhance education quality and reach.'
    },
    {
      image: coaching,
      title: 'Providing Quality Education for All : Empowering Future Generations',
      text: 'Collaborate with institutions and manage infrastructure for educational purposes.'
    },
  ];
  
  return (
    <div className='overflow-x-hidden'>

      {/* Homebanner */}
      <div className='relative'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><HomeSlide1/></SwiperSlide>
          <SwiperSlide><HomeSlide2/></SwiperSlide>
          <SwiperSlide><HomeSlide3/></SwiperSlide>
        </Swiper>
      </div>

      {/* 4 cards */}
      <div className='hidden xl:inline-block'>
    <div className='w-full flex items-center justify-evenly px-44 gap-0 absolute top-[585px] z-10'>
      {dummyData.map((data, index) => (
        <div key={index} className='w-[210px] h-[210px] shadow-xl bg-[#FCFFF6] rounded-3xl p-5 pt-8'>
          <img className='w-12 mx-auto' src={data.image} alt="" srcset="" />
          <h4 className='text-[#3E5C05] font_poppins text-[15px] font-normal text-center mt-2'>{data.title}</h4>
          {/* <p className='text-[#A4A4A4] font_poppins text-[10px] font-normal mt-2'>{data.text}</p> */}
        </div>
      ))}
    </div>
      </div>

      {/* About BTAG */}
      <div className='w-full  flex flex-wrap items-center px-5  lg:px-36 py-24 mx-auto lg:ms-5 md:pt-48'>

          <div className='flex items-center mb-4'>

            <div className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[#30326B]'>
            </div>
            <h1 className='font_poppins font-semibold text-[20px] md:text-[27px] text-[#585858] ms-2'>About BTAG Global Educational Trust</h1>

          </div>

          <divs className='flex flex-wrap gap-4' >

            <div className=' w-full lg:w-1/2'>
                      <p className='font_poppins text-[#585858] leading-7 justify-start md:text-[18px] mb-6'>BTAG Global Educational Trust is an initiative to provide education and training by running offline programmes and institutions across India and online educational services across the Globe. <br />
              Trust Director : Mohammed Abdul Salam - Educational Consultant, CBSE Resource Person & Master Trainer, CBSE school Principal <br />
              Joint Director : Mr Biju s Pillai - CBSE school Principal <br />
                        Trustee :  Ms Bushra B.A. - CBSE school Principal</p>
              
                       <Link to={'/about'}><button className='px-6 py-2.5 bg-[#67A800] rounded-full text-white font_poppins font-semibold text-[18px]'>Learn More</button></Link> 
            </div>


            <img className='object-fill rounded-2xl w-[390px] h-[280px]' src={homeabout} />


          </divs>

      </div>

      {/* Founder Part */}
      <div className=' w-full md:px-24 px-5'>

        <div className='bg-[#30326B] md:p-8 p-5 rounded-2xl flex flex-wrap'>

          <div className='text-white md:w-[55%] w-full '>

            <h1 className='font_poppins text-2xl sm:text-2xl md:text-3xl font-bold mb-5'>Meet the Founder</h1>
            <p className='font_poppins text-[10px] md:text-[12px]  font-normal leading-5 mb-5 text-justify'>

            <p className='mb-2'>“Dr. Abdul Salam is a renowned CBSE Resource Person and Master Trainer, and has been associated with the National Accreditation Board for Education & Training (NABET) under the Government of India as an Assessor.</p>

            <p className='mb-2'>He is the founder and CEO of Extra Mile Education and Training and the Bharat Transformers Academic Group (BTAG).</p> 


            <p className='mb-2'>Dr Abdul Salam is the Director of the BTAG Global Educational Trust, Trivandrum. His mission is to empower the educators and students of India to contribute to the grow of the nation.</p>

            <p className='mb-2'>He has been serving the education sector for more than 26 years in India and abroad in different roles such as English Teacher, Principal of CBSE schools, Principal of City College International, Ajman-UAE, General Secretary of CBSE Bharat Sahodaya.</p> 

            He has received appreciations from all the institutions he has worked and has been specially appreciated by Dubai Police for collaborative learning initiatives and by the British Council for integrating internationalism in schooling.”
            </p>
            <p className='font-bold'>Dr Abdul Salam </p>
            <p className='text-[#838383] mb-8 md:w-2/3 text-[12px]
            md:text-[16px]'>Founder and CEO of Extra Mile Education and Training and the Bharat Transformers Academic Group (BTAG).</p>
           <Link to={'/about'}>
              <button className='text-white font-bold font_poppins bg-[#81D002] rounded-full md:px-5 px-3 md:py-4 py-2 text-[12px] md:text-[16px]'>
              See Team Behind Our Success
              </button>
           </Link>
          </div>

          <div className=' w-full  md:w-[45%]'>
            <img className='mx-auto w-2/3' src={founder} alt="" srcset="" />
          </div>


        </div>

      </div>

      {/* Play Button */}
      <div className='w-full h-[300px] md:h-[400px] text-white mt-24 px-5 md:px-0' style={{ backgroundImage: `url(${home_play1})`,backgroundSize:"cover",backgroundPosition: "50% 50%"}}>

       <div className='md:w-1/2  mx-auto  text-center md:pt-28 pt-16'>
          <p className='font_poppins font-bold text-[21px] md:text-[30px] mb-1'>Watch Trust Activities Video Tour</p>
          <p className='font_poppins font-normal text-[15px] md:text-[18px] text-center '>"Explore our educational trust tour video for an immersive experience in fostering learning and trust."</p>
          <a href='https://youtu.be/vxmSNvBhm9A?si=_jFdtJH8Ch8P0I5T' target='_blank'>
          <img className='w-[42px] h-[42px] md:w-[52px] md:h-[52px] mx-auto mt-3' src={homeicon} alt="" srcset="" /></a>
       </div>

       

      </div>

      {/* Our Activities */}
      <div className='w-full md:p-20 p-5'>
        <HomeActivities />
      </div>
      
      {/* InstitutionCard */}
        <InstitutionCards/>

      {/* Testimonials */}
      <HomeTestimonials/>

    </div>
  );
}
export default Home;
