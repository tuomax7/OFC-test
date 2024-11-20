import  { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const mediaSlides = Array.from({ length: 5 }, (_, index) => ({
  type: index % 2 ? 'image' : 'video',
  altText: 'The alt text for media',
  mediaUrl: index % 2 ? '/public/8240494.jpg' : '/public/video.mp4'
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1799, min: 1200 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1199, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const getResponsivenessGroup = (size: number) => {
  if (size < responsive.tablet.breakpoint.min) {
    return 0;
  } else if (size < responsive.desktop.breakpoint.min) {
    return 1;
  } else {
    return 2;
  }
};

const MediaCarousel = () => {
  const [_carouselWidth, setCarouselWidth] = useState<number>(0); // Store the width of the carousel
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel container
  const [_currentSlide, _setCurrentSlide] = useState<number>();
  const [_currentFocus, setCurrentFocus] = useState<number>();
  const [carouselShift, setCarouselShift] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        const newGroup = getResponsivenessGroup(carouselRef.current.offsetWidth);
        if (carouselShift !== newGroup) {
          setCarouselShift(newGroup);
        }
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={carouselRef}>
      <Carousel
        responsive={responsive}
        slidesToSlide={1}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass='custom-dot-list-style'
        afterChange={(_previousSlide, { currentSlide }) => {
          //does not work properly
          setCurrentFocus(currentSlide - mediaSlides.length);
        }}
      >
        {mediaSlides.map((slide, index) => (
          <div className='mb-10 mt-10 flex justify-center items-center' key={index}>
            {slide.type === 'image' ? (
              <img src={slide.mediaUrl} alt={slide.altText} className='h-[500px]' />
            ) : (
              <video height='500' muted autoPlay>
                <source src={slide.mediaUrl} type='video/mp4' />
              </video>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MediaCarousel;
