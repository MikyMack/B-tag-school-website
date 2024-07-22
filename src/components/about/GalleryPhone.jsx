import React from 'react'
import member1 from '../../assets/member2.jpg'

const images = [
  { id: 1, src: member1, title: 'Biju s pillai', description: 'Joint Director- BTAG Global Educational Trust' },
  // { id: 2, src: 'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Janna Kondeth', description: 'This is Image 2' },
  // { id: 3, src: 'https://images.pexels.com/photos/20881303/pexels-photo-20881303/free-photo-of-woman-sitting-on-the-grass-with-a-bouquet-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Cillian Murphy', description: 'This is Image 3' },
  // { id: 4, src: 'https://images.pexels.com/photos/20842140/pexels-photo-20842140/free-photo-of-portrait-of-brunette-woman.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Tom Hanks', description: 'This is Image 2' },
  // { id: 5, src: 'https://images.pexels.com/photos/26108564/pexels-photo-26108564/free-photo-of-portrait-of-blonde-woman-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Will Smith', description: 'This is Image 3' },
  // { id: 6, src: 'https://images.pexels.com/photos/12244376/pexels-photo-12244376.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Janna Kondeth', description: 'This is Image 6' }
  // // Add more images as needed
];

function GalleryPhone() {
  return (
    <div className="flex flex-col flex-wrap gap-6 py-4">
    {images.map((image) => (
      <div
        key={image.id}
        className={`relative   w-[220px]  sm:w-[400px]  md:w-[500px] 
         h-[400px]`}
       
      >
        <img
          src={image.src}
          alt={image.title}
          className="cursor-pointer w-full h-full object-contain "
        />
        
          <div className="absolute bottom-[-6px] w-full h-full  flex flex-col items-start justify-end p-4">
            <h2 className="text-xl font-bold text-white">{image.title}</h2>
            <p className="mt-1 text-white">{image.description}</p>
           
          </div>
     
      </div>
    ))}
  </div>


  )
}

export default GalleryPhone