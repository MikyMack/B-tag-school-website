import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import eduicon from '../../assets/eduicon.png';
import NewsSection from './NewsSection';
import AxiosInstance from '../../Api/AxiosInstance';

function CardDetail() {
  const [data, setData] = useState(null);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    const fetchInstitute = async () => {
      try {
        const response = await AxiosInstance.get(`/institution/${slug}`);
        console.log(response.data.Institution); 
        setData(response.data.Institution);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstitute();
  }, [slug]);

  // Handle case where data might not be loaded yet
  if (!data) {
    return <div>Loading...</div>;
  }

  const paragraphs = data.description?.split('\n\n');
  const imagesArray = data.images?.split(',');
  const secondImage = imagesArray && imagesArray.length > 1 ? imagesArray[1] : '';
  console.log("imgarray",imagesArray);
  console.log(secondImage);
  console.log(data);

  return (
    <div className='overflow-hidden px-[50px]'>
      <div className='md:px-[100px] px-[10px] py-[50px]'>

        <div className='mb-[20px]'>
          <h1 className='text-[#376409] font_poppins font-semibold lg:text-3xl sm:text-xl text-sm lg:leading-[50px] md:leading-10 sm:leading-8 leading-6'>
            {data.title}
          </h1>
        </div>
        
        <div
          className="h-[300px] overflow-hidden mb-[20px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(https://btagglobal.com/admin/uploads/institutions/${secondImage})` }}
        >
        </div>

        <div className='md:p-6 p-2'>
          <div className='flex lg:flex-row flex-col justify-center items-center lg:px-[100px] sm:px-[10px] px-[10px] gap-4'>
            <div className='card bg-[#67A800] shadow-md rounded-md p-4 sm:w-[300px] w-full lg:h-[220px] h-[250px] mx-auto'>
              <div className='flex justify-center overflow-hidden'>
                <img src={eduicon} alt='icon' className='w-12 h-12 mb-4' />
              </div>
              <h2 className='text-xl font-semibold mb-2 text-center text-white font_poppins'>Address</h2>
              <p className='text-center text-white font_poppins text-sm  '>{data.address}</p>
            </div>

            <div className='card bg-[#67A800] shadow-md rounded-md p-4 sm:w-[300px] w-full h-[220px] mx-auto'>
              <div className='flex justify-center'>
                <img src={eduicon} alt='icon' className='w-12 h-12 mb-4' />
              </div>
              <h2 className='text-xl font-semibold mb-2 text-center text-white font_poppins'>Contact</h2>
              <p className='text-center text-white font_poppins mb-2'>{data.email}</p>
              <p className='text-center text-white font_poppins'>{data.phone}</p>
            </div>
          </div>
        </div>

        <div className='py-[20px]'>
          <p className='text-[#949191] text-base sm:text-lg lg:text-xl font_poppins'>
            {data.introduction}
          </p>
        </div>

        <div className='mt-[30px]'>
          {paragraphs?.map((paragraph, index) => (
            <p key={index} className='text-[#949191] font_poppins font-normal mb-4'>
              {paragraph}
            </p>
          ))}
        </div>

        <hr className='mx-auto mt-10 opacity-40 w-full border-t border-[#9C9797]' />

        <NewsSection />
      </div>
    </div>
  );
}

export default CardDetail;
