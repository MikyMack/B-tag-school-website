import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './homeactivities.css';

const dummyData = [
  {
    id: 1,
    name: "Cert IV in Leadership & Management",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 2,
    name: "Cert IV in Digital Marketing and Communication",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 3,
    name: "Cert IV Hospitality",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 4,
    name: "Cert IV in Leadership & Management",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 5,
    name: "Cert IV in Digital Marketing and Communication",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 6,
    name: "Cert IV Hospitality",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  }
];

const HomeActivities = () => (
  <div className='w-full flex flex-wrap items-center justify-center gap-11'>
    <h1 className='font_poppins text-[#30326B] font-semibold text-center text-xl sm:text-2xl md:text-3xl underline underline-offset-8'>Our Activities</h1>
    <p className='text-[#747373] font-normal md:text-[22px] text-[16px] text-center px-22 mb-2 md:mb-3 w-full mx-auto'>BTAG Global Educational Trust provides quality education and training through offline programs in India and online services worldwide. We empower individuals with the knowledge and skills needed for success.</p>

    <Swiper
      className="home-activities-slider"
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        360: { slidesPerView: 1 },
      }}
    >
      {dummyData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='w-[300px] h-[380px] relative mx-auto mb-6 '>
            <img src={item.imageUrl} alt={item.name} className='w-full h-1/2 object-cover' />
            <h4 className='text-[#67A800] font_poppins text-[18px] font-semibold mt-4 px-3'>{item.name}</h4>
            <p className='text-[#706E6E] font_poppins text-[13px] font-normal mt-2 absolute bottom-4 px-3'>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default HomeActivities;
