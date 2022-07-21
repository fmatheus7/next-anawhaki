import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
// TODO: MAKE GRAPHQL REQUEST TO USE IMAGES FROM THE gRAphCMS

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla max-w-7xl mx-auto'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Image
                width={900}
                height={450}
                alt='/'
                src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Fzd5lATYRm6cHcsUvKed'
              />
            </div>
          </div>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Image
                width={900}
                height={450}
                alt='/'
                src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Fzd5lATYRm6cHcsUvKed'
              />
            </div>
          </div>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Image
                width={900}
                height={450}
                alt='/'
                src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Fzd5lATYRm6cHcsUvKed'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex mx-auto items-center justify-evenly'>
        <button className='embla__prev' onClick={scrollPrev}>
          <GrPrevious size={50} />
        </button>
        <button className='embla__next' onClick={scrollNext}>
          <GrNext size={50} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
