import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './institutionCards.css'; 
import  { useEffect, useState } from 'react';
import AxiosInstance from '../../Api/AxiosInstance';


function InstitutionCards() {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await AxiosInstance.get('/institutions');
        console.log(response.data.institutions); 
        setData(response.data.institutions);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchInstitutions();
  }, []);


const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  const navigate=useNavigate()

  const handleCardClick = (slug) => {
    navigate(`/card/${slug}`);
  };

  return (
  
  <div className='home-testimonials-slider xl:ml-[30px] ml-[10px] mb-6  '>
      <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={2}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
          1024: { slidesPerView: 3 },
          766: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
      }}
      className=''>
          {/* card */}
          
            {data.map((data, index) => (
              <SwiperSlide key={index}    onClick={() => handleCardClick(data.slug)}>
                <div className='p-4   w-full sm:w-[300px]'>
            <div className='flex flex-col items-center'>
              <div className='w-full h-[200px] overflow-hidden'>
                <img
                  src={`https://btagglobal.com/admin/uploads/institutions/${data.images}` ? `https://btagglobal.com/admin/uploads/institutions/${data.images}`.split(',')[0] : ''} 
                  alt={data.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 '>
              <h1 className='lg:text-lg 2xl:text-xl sm:text-md  text-sm font-semibold mt-4 text-[#67A800] font_poppins  
                leading-6 min-h-[50px] '>{data.title}</h1>
              <p className='text-base text-[#706E6E] mt-2 font_poppins font-normal  leading-5'> {truncateContent(data.introduction, 100)}</p>
              </div>
              
            </div>
                </div>
              </SwiperSlide>
            
            ))}
     

      </Swiper>
      </div>
      
  )
}

export default InstitutionCards



// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import './institutionCards.css'; 


// const cardData = [
//   {
//     id: 1,
//     imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Cert IV in Leadership & Management  ',
//     introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country... ',
//     description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
//     address: '123 Leadership St, Management City, LM 12345'
//   },
//   {
//     id: 2,
//     imageUrl: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Cert IV in Communication  ',
//     introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  ...',
//     description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
//     address: '456 Marketing Blvd, Communication Town, CD 45678'
//   },
//   {
//     id: 3,
//     imageUrl: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Cert IV in Hospitality ',
//     introduction: 'SSeparated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country......',
//     description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
//     address: '789 Hospitality Ave, Hotel City, HP 78910'
//   },
//   {
//     id: 4,
//     imageUrl: 'https://images.pexels.com/photos/14031189/pexels-photo-14031189.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Cert IV in Hospitality ',
//     introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
//     description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
//     address: '1011 Hospitality St, Resort Town, HP 10112'
//   },
// ];




// function InstitutionCards() {

//   const truncateContent = (content, maxLength) => {
//     if (content.length > maxLength) {
//       return content.substring(0, maxLength) + '...';
//     }
//     return content;
//   };

//   const navigate=useNavigate()

//   const handleCardClick = (id) => {
//     navigate(`/card/${id}`);
//   };

//   return (
  
//   <div className='home-testimonials-slider xl:ml-[30px] ml-[10px] mb-6  '>
//       <Swiper
//       modules={[Pagination, Autoplay]}
//       spaceBetween={2}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 2000 }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       breakpoints={{
//           1024: { slidesPerView: 3 },
//           766: { slidesPerView: 2 },
//           360: { slidesPerView: 1 },
//       }}
//       className=''>
//           {/* card */}
          
//             {cardData.map((card, index) => (
//               <SwiperSlide key={index}    onClick={() => handleCardClick(card.id)}>
//                 <div className='p-4   w-full sm:w-[300px]'>
//             <div className='flex flex-col items-center'>
//               <div className='w-full h-[200px] overflow-hidden'>
//                 <img
//                   src={card.imageUrl}
//                   alt={card.title}
//                   className='w-full h-full object-cover'
//                 />
//               </div>
//               <div className='p-4 '>
//               <h1 className='lg:text-lg 2xl:text-xl sm:text-md  text-sm font-semibold mt-4 text-[#67A800] font_poppins  
//                 leading-6 min-h-[50px] '>{card.title}</h1>
//               <p className='text-base text-[#706E6E] mt-2 font_poppins font-normal  leading-5'> {truncateContent(card.introduction, 100)}</p>
//               </div>
              
//             </div>
//                 </div>
//               </SwiperSlide>
            
//             ))}
     

//       </Swiper>
//       </div>
  
//   )
// }

// export default InstitutionCards