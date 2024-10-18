import React, { useState, useRef, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PersonCard from './PersonCard.tsx';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1799, min: 1200 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1199, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const getResponsivenessGroup = (size) => {
  if( size < responsive.tablet.breakpoint.min){
    return 0
  } else if (size < responsive.desktop.breakpoint.min){
    return 1
  } else {
    return 2
  }
}

const sliderImageUrl = [
  { url: '../../public/8240494.jpg' },
  { url: '../../public/8240494.jpg' },
  { url: '../../public/8240494.jpg' },
  { url: '../../public/8240494.jpg' },
  { url: '../../public/8240494.jpg' }
];

const CarouselComponent: React.FC = () => {
  const [carouselWidth, setCarouselWidth] = useState<number>(0); // Store the width of the carousel
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel container
  const [currentSlide, setCurrentSlide] = useState<number>()
  const [currentFocus, setCurrentFocus] = useState<number>()
  const [carouselShift, setCarouselShift] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth);
    }


    const handleResize = () => {
      if (carouselRef.current) {
        const newGroup = getResponsivenessGroup(carouselRef.current.offsetWidth)
        if(carouselShift !== newGroup){
          setCarouselShift(newGroup)
        }
        setCarouselWidth(carouselRef.current.offsetWidth)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="parent bg-[#EC4D4D] bg-opacity-75" ref={carouselRef}>
      <p>Carousel width: {carouselWidth}px</p> {/* Display the carousel width */}
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        afterChange={(previousSlide, {currentSlide}) =>{
          //does not work properly
          setCurrentFocus(currentSlide - sliderImageUrl.length)
        }}
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className='mb-10 mt-10' key={index}>
            <PersonCard name={`Person ${index + 1}`} focused={currentFocus === index}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
