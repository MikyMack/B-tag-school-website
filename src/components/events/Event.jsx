
import React, { useCallback, useEffect, useRef, useState } from 'react'
import AxiosInstance from '../../Api/AxiosInstance';



const itemsPerPage = 2; 

// const data = [
//     {
//       id: 1,
//       title: 'Lorem ipsum dolor sit amet consectetur, a\\',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam? dolor sit amet consec',
//       date: '27.0.2020',
//       imageUrl: 'https://images.pexels.com/photos/7550581/pexels-photo-7550581.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       id: 2,
//       title: 'Another news title here',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam? elit. Nullam in dui mauris. dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam',
//       date: '15.1.2021',
//       imageUrl: 'https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       id: 3,
//       title: 'Third news title',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam?t dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam.',
//       date: '03.3.2022',
//       imageUrl: 'https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//     {
//       id: 4,
//       title: 'Fourth news title',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam?etus. dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam',
//       date: '12.4.2023',
//       imageUrl: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600',
//     },
//   ];

function Event() {
  const [data,setData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  
 
  const observer = useRef();

  const fetchData = async () => {
        try {
          const response = await AxiosInstance.get('/event');
          console.log('API Response:', response.data); // Log the API response
          setData(response?.data.event)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
     
      // const [currentItems, setCurrentItems] = useState(data?.slice(0, itemsPerPage));
      // console.log(currentItems)

  // const lastItemRef = useCallback(
  //   (node) => {
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && currentPage * itemsPerPage < data.length) {
  //         setCurrentPage((prevPage) => prevPage + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [currentPage]
  // );

  useEffect(() => {
    fetchData()
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const newItems = data.slice(0, indexOfLastItem);
    // setCurrentItems(newItems);
  }, []);



  return (
    <div className='container mx-auto overflow-hidden px-20 m-10  '>
      
      
        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mb-12  text-[#585858] underline-with-space font_poppins ml-4'>News & Events</h1>
      <div className='flex flex-col gap-10 '  >
        {data?.map((item, index) => (
          <div key={item.id} className='flex flex-col md:flex-row gap-4 md:gap-10 p-4 '>
            {index % 2 === 0 ? (
              <>
                <div className='md:w-1/2'>
                  <div className='w-full h-[300px] bg-red-600 overflow-hidden'>
                    <img
                      src=
                      {`https://btagglobal.com/admin/uploads/forms/${item.file}` }
                      alt={`news${item.id}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>{item?.title}</h1>
                  <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
                    {item?.description}
                  </p>
                  <p className='mt-4 text-[#B4B7C1]'>{item?.date}</p>
                </div>
              </>
            ) : (
              <>
                <div className='md:w-1/2 order-2 md:order-1'>
                  <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>{item?.title}</h1>
                  <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
                    {item.description}
                  </p>
                  <p className='mt-4 text-[#B4B7C1]'>{item.date}</p>
                </div>
                <div className='md:w-1/2 order-1 md:order-2'>
                  <div className='w-full h-[300px] bg-red-600 overflow-hidden'>
                    <img
                      // src={item.imageUrl}
                      src={item.file}

                      alt={`news${item.id}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* <div className='flex justify-center mt-16 gap-10'>
        <img
         
          src={previcon}
          alt="circled-left-2"
          className="w-10 h-10 transition-transform transform hover:scale-110 disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
         
        />
         
        
        <img
         
         src={nexticon}
         alt="circled-left-2"
          className="w-10 h-10 transition-transform transform hover:scale-110 disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          
        />
          
      </div> */}
     </div>
  )
}

export default Event 




// import React, { useEffect,  useState } from 'react';
// import AxiosInstance from '../../Api/AxiosInstance';

// function Event() {
 
//   const [data, setData] = useState([]);


//   const fetchData = async () => {
//     try {
//       const response = await AxiosInstance.get('/event');
//       console.log('API Response:', response.data); // Log the API response
//       setData(response?.data.event)
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

 

//   return (
//     <>
//     <h1>{data[0]?.title}</h1>
//     <h1>news</h1>
//     </>
//   );
// }

// export default Event;

// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import AxiosInstance from '../../Api/AxiosInstance';

// const itemsPerPage = 2;

// function Event() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentItems, setCurrentItems] = useState([]);
//   const [data, setData] = useState([]);
//   const observer = useRef();

//   const fetchData = async () => {
//     try {
//       const response = await AxiosInstance.get('/event');
//       setData(response.data);
//       setCurrentItems(response.data.slice(0, itemsPerPage));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const lastItemRef = useCallback(
//     (node) => {
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && currentPage * itemsPerPage < data.length) {
//           setCurrentPage((prevPage) => prevPage + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [currentPage, data.length]
//   );

//   useEffect(() => {
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const newItems = data.slice(0, indexOfLastItem);
//     setCurrentItems(newItems);
//   }, [currentPage, data]);

//   return (
//     <div className='container mx-auto overflow-hidden px-20 m-10'>
//       <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mb-12 text-[#585858] underline-with-space font_poppins ml-4'>
//         News & Events
//       </h1>
//       <div className='flex flex-col gap-10'>
//         {currentItems.map((item, index) => (
//           <div
//             key={item.id}
//             className='flex flex-col md:flex-row gap-4 md:gap-10 p-4'
//             ref={index === currentItems.length - 1 ? lastItemRef : null}
//           >
//             {index % 2 === 0 ? (
//               <>
//                 <div className='md:w-1/2'>
//                   <div className='w-full h-[300px] bg-red-600 overflow-hidden'>
//                     <img
//                       src={item.imageUrl}
//                       alt={`news${item.id}`}
//                       className='w-full h-full object-cover'
//                     />
//                   </div>
//                 </div>
//                 <div className='md:w-1/2'>
//                   <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>
//                     {item.title}
//                   </h1>
//                   <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
//                     {item.description}
//                   </p>
//                   <p className='mt-4 text-[#B4B7C1]'>{item.date}</p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className='md:w-1/2 order-2 md:order-1'>
//                   <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>
//                     {item.title}
//                   </h1>
//                   <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
//                     {item.description}
//                   </p>
//                   <p className='mt-4 text-[#B4B7C1]'>{item.date}</p>
//                 </div>
//                 <div className='md:w-1/2 order-1 md:order-2'>
//                   <div className='w-full h-[300px] bg-red-600 overflow-hidden'>
//                     <img
//                       src={item.imageUrl}
//                       alt={`news${item.id}`}
//                       className='w-full h-full object-cover'
//                     />
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Event;


