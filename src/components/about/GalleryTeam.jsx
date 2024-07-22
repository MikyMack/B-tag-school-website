import React, { useState } from 'react'
import member1 from '../../assets/btagmember1.jpg'

const images = [
    { id: 1, src: member1, title: 'Alex jaco', description: 'This is Image 1' },
    { id: 2, src: 'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Janna Kondeth', description: 'This is Image 2' },
    { id: 3, src: 'https://images.pexels.com/photos/20881303/pexels-photo-20881303/free-photo-of-woman-sitting-on-the-grass-with-a-bouquet-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Cillian Murphy', description: 'This is Image 3' },
    { id: 4, src: 'https://images.pexels.com/photos/20842140/pexels-photo-20842140/free-photo-of-portrait-of-brunette-woman.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Tom Hanks', description: 'This is Image 2' },
    { id: 5, src: 'https://images.pexels.com/photos/26108564/pexels-photo-26108564/free-photo-of-portrait-of-blonde-woman-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Will Smith', description: 'This is Image 3' },
    { id: 6, src: 'https://images.pexels.com/photos/12244376/pexels-photo-12244376.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Janna Kondeth', description: 'This is Image 6' }
    // Add more images as needed
  ];

function GalleryTeam() {

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  return (
    <div className="flex xl:flex-row flex-col  overflow-x-auto space-x-4 py-4 ">
    {images.map((image) => (
      <div
        key={image.id}
        className={`relative flex-shrink-0 transition-all duration-300 ${
          selectedImage?.id === image.id ? 'w-[300px]' : 'w-[100px]'
        } h-[400px]`}
        onClick={() => handleImageClick(image)}
      >
        <img
          src={image.src}
          alt={image.title}
          className="cursor-pointer w-full h-full object-cover"
        />
        {selectedImage?.id === image.id && (
          <div className="absolute bottom-[-6px] w-full h-full  flex flex-col items-start justify-end p-4">
            <h2 className="text-xl font-bold text-white">{selectedImage.title}</h2>
            <p className="mt-1 text-white">{selectedImage.description}</p>
           
          </div>
        )}
      </div>
    ))}
  </div>


//   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 py-4 bg-pink-500">
//   {images.map((image) => (
//     <div
//       key={image.id}
//       className={`relative transition-all duration-300 ${
//         selectedImage?.id === image.id ? 'md:col-span-2 xl:col-span-1 w-full' : 'w-full'
//       } h-[400px]`}
//       onClick={() => handleImageClick(image)}
//     >
//       <img
//         src={image.src}
//         alt={image.title}
//         className="cursor-pointer w-full h-full object-cover"
//       />
//       {selectedImage?.id === image.id && (
//         <div className="absolute bottom-0 w-full h-full flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black to-transparent">
//           <h2 className="text-xl font-bold text-white">{selectedImage.title}</h2>
//           <p className="mt-1 text-white">{selectedImage.description}</p>
//         </div>
//       )}
//     </div>
//   ))}
// </div>

//   <div className="flex overflow-x-auto space-x-4 py-4">
//   {images.map((image) => (
//     <div
//       key={image.id}
//       className={`relative flex-shrink-0 transition-all duration-300  h-[400px] cursor-pointer  ${ selectedImage?.id === image.id ? 'w-full sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]' : 'w-[100px]'
//            }`}
//       onClick={() => handleImageClick(image)}
//     >
//       <img
//         src={image.src}
//         alt={image.title}
//         className="w-full h-full object-cover"
//       />
//       {selectedImage?.id === image.id && (
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//           <h2 className="text-xl font-bold">{selectedImage.title}</h2>
//           <p className="mt-1">{selectedImage.description}</p>
//         </div>
//       )}
//     </div>
//   ))}
// </div>

  )
}

export default GalleryTeam


