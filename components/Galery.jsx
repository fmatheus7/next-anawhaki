import React from "react";
import PhotoGaleryModal from "./PhotoGaleryModal";

const isOpen = () => true;
// TODO: MAKE GALERY COMPONENT USABLE IN DIFERENTES SCENARIOS
// SWITCH IMG TAG TO IMAGE FROM NEXT https://www.youtube.com/watch?v=dV4qMj6QNTw&ab_channel=CodeCommerce VIEW TUTORIAL
const Galery = ({ title, image, data }) => {
  return (
    <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
      <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
        <div className='flex flex-wrap -m-1 md:-m-2'>
          {data.ceremonies?.map((cerimonie) => (
            <div key={cerimonie.id} class='flex flex-wrap w-1/3'>
              <div class='w-full p-1 md:p-2'>
                <img
                  alt='gallery'
                  className=' object-cover object-center w-full h-full rounded-lg'
                  src={cerimonie.fotos[0].url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galery;
