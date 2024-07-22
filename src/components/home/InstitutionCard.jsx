import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './institutioncard.css'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AxiosInstance from '../../Api/AxiosInstance';

const truncateText = (text, limit) => {
  return text.split(' ').length > limit 
    ? text.split(' ').slice(0, limit).join(' ') + '...' 
    : text;
};

function InstitutionCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await AxiosInstance.get('/institutions');
        console.log(response.data.institutions); 
        setData(response.data.institutions);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchEvents();
  }, []);


  return (
    <div className='home-institution-slider py-10 px-7 md:px-16 bg-[#84AB3A26] relative'>
      <h1 className='text-center font_poppins font-semibold text-xl sm:text-2xl lg:text-3xl underline underline-offset-8 mb-10'>
        List of Institutions
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2000 }}
        breakpoints={{
          1024: { 
            slidesPerView: 3,
            spaceBetween: -75
          },
          766: { 
            slidesPerView: 2,
            spaceBetween: -50 
          },
          360: { 
            slidesPerView: 1,
            spaceBetween: 0 
          },
        }}
        className='flex items-center justify-evenly '>
        {data.map((data, index) => (
          <SwiperSlide key={index} >
            <div className='p-4 mx-auto w-[270px] md:w-[300px] h-[] md:h-[500px] bg-slate-100'>
              <div className='w-full h-[225px] overflow-hidden'>
                <img
                  src={`https://btagglobal.com/admin/uploads/institutions/${data.images}` ? `https://btagglobal.com/admin/uploads/institutions/${data.images}`.split(',')[0] : ''} 
                  alt={data.title}
                  className='w-full h-full object-cover rounded-xl'
                />
                {/* <img className='w-full h-full object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSXWBEyDrEA-AImvsnc-sOEjpCwYBQSAQBg&s" alt="" srcset="" /> */}
              </div>
              <p className='font_poppins font-semibold text-[14px] md:text-[16px] mt-4 leading-6 ms-1'>{data.title}</p>
              <p className='font_poppins text-[#4D4A4A] text-[14px]  w-[270px] absolute bottom-[77px] ms-1'>
                <LocationOnIcon className='text-[#578d01] font-medium'/>{truncateText(data.address, 10)}
              </p>
              {/* <p className='text-[14px] w-[270px] text-justify text-[#505050] mt-2 font_poppins font-normal leading-5 absolute bottom-[85px]'>
                {truncateText(data.introduction, 24)}
              </p> */}
              <Link to={`/card/${data.slug}`}>
                <button className='font_poppins font-medium text-[15px] px-10 py-1 bg-[#578d01] rounded-lg absolute bottom-[20px] ms-[58px]'>
                  See more
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default InstitutionCards;





// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import  { Navigation , Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import './institutioncard.css'; 
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import  { useEffect, useState } from 'react';
// import AxiosInstance from '../../Api/AxiosInstance';


// const truncateText = (text, limit) => {
//     return text.split(' ').length > limit 
//       ? text.split(' ').slice(0, limit).join(' ') + '...' 
//       : text;
//   };

// // const cardData = [
// //     {
// //       id: 1,
// //       imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
// //       title: 'Cert IV in Leadership & Management',
// //       introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
// //       description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim. In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo. Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
// //       location: 'Sydney, Australia'
// //     },
// //     {
// //       id: 2,
// //       imageUrl: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=600',
// //       title: 'Cert IV in Communication & Digital Marketing',
// //       introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
// //       description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim. In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo. Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
// //       location: 'Melbourne, Australia'
// //     },
// //     {
// //       id: 3,
// //       imageUrl: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
// //       title: 'Cert IV in Hospitality',
// //       introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
// //       description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim. In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo. Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
// //       location: 'Brisbane, Australia'
// //     },
// // {
// //     id: 4,
// //     imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Cert IV in Leadership & Management',
// //     introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
// //     description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim. In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo. Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
// //     location: 'Sydney, Australia'
// //   },
// //   {
// //     id: 5,
// //     imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Cert IV in Leadership & Management',
// //     introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
// //     description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim. In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel sed eleifend. Volutpat in convallis tempus morbi est varius habitasse sagittis. Posuere commodo. Lorem ipsum dolor sit amet consectetur. In viverra tincidunt accumsan arcu accumsan nam. Morbi non feugiatelementum sagittis. Sed felis et eu sed felis ligula id ut. Turpis curabitur turpis tortor varius. Vel aliquam nisl gravidaenim. Elit nunc tempor tempor viverra odio habitasse blandit turpis in. Pulvinar diam vestibulum amet nuncpellentesque. Viverra egestas rutrum mi gravida et. Pharetra ullamcorper elit mattis convallis dignissim eu dignissimrhoncus fermentum. Sagittis morbi tempor lectus leo volutpat maecenas sagittis. Maecenas risus velit sollicitudin.",
// //     location: 'Sydney, Australia'
// //   }
// //   ];
  


// function InstitutionCards() {
//   const [data, setData] = useState([]);

//  useEffect(() => {
//     const fetchEvents = async () => {
//         try {
//             const response = await AxiosInstance.get('/institutions');
//             console.log(response.data.institutions); 
//             setData(response.data.institutions);
//         } catch (error) {
//             console.error(error);
//         }
//     };
    
//     fetchEvents();
//   }, []);


// const navigate=useNavigate()

//   const handleCardClick = (id) => {
//     navigate(`/card/${id}`);
//   };

//   return (
  
//   <div className='home-institution-slider py-10 px-7 md:px-28 bg-[#84AB3A26] relative'>

//     <h1 className='text-center font_poppins font-semibold text-xl sm:text-2xl lg:text-3xl underline underline-offset-8 mb-10'>List of Institutions</h1>

//       <Swiper
//       modules={[Navigation, Autoplay]}
//       spaceBetween={-75}
//       slidesPerView={3}
//       navigation
//       autoplay={{ delay: 2000 }}
//       // onSwiper={(swiper) => console.log(swiper)}
//       // onSlideChange={() => console.log('slide change')}
//       breakpoints={{
//         1024: { 
//           slidesPerView: 3,
//           spaceBetween: -75
//         },
//         766: { 
//           slidesPerView: 2,
//           spaceBetween: -50 
//         },
//         360: { 
//           slidesPerView: 1,
//           spaceBetween: 0 
//         },
//       }}
//       className='flex items-center justify-evenly'>
//           {/* card */}
          
//             {data.map((data, index) => (
//               <SwiperSlide key={index}    onClick={() => handleCardClick(data.id)}>

//                 <div className='p-4 mx-auto w-[300px] h-[520px] '>
                  
//                         <div className='w-full h-[225px] overflow-hidden'>
//                             <img
//                             src={data.imageUrl}
//                             alt={data.title}
//                             className='w-full h-full object-cover rounded-xl'
//                             />
                           
//                         </div>
//                         <p className='font_poppins font-semibold text-[19px] mt-4 leading-7'>{data.title}</p>
    
//                         <p className='font_poppins text-[#4D4A4A] text-[17px] absolute bottom-[150px]'><LocationOnIcon className='text-[#578d01] font-medium'/>{data.address}</p>
    
//                         <p className='text-[14px] w-[270px] text-justify text-[#505050] mt-2 font_poppins font-normal  leading-5 absolute bottom-[88px]'>{truncateText(data.introduction, 24)}</p>
    
//                        <Link to={'/institutions'}><button className='font_poppins font-medium text-[15px] px-10 py-1 bg-[#578d01] rounded-lg  absolute bottom-[42px] ms-[58px]'>See more</button></Link>
//                    </div>
                
//               </SwiperSlide>
              
            
//             ))}
     

//       </Swiper>
//       </div>
  
//   )
// }

// export default InstitutionCards


