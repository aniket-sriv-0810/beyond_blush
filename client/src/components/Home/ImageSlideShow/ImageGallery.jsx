import React from 'react';
import ImageSlideshow from './ImageSlideShow';
import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
import slide5 from '../../../assets/slide5.jpg';
const sampleImages = [slide1 , slide2 , slide3 , slide4 , slide5];

const ImageGallery = () => {
  return (
    <div className="bg-[#fff6ed] py-20 px-4">
      <h2 className="text-3xl text-center font-serif text-[#582f21] mb-10">
        Client Showcase
      </h2>
      <ImageSlideshow images={sampleImages} />
    </div>
  );
};

export default ImageGallery;
