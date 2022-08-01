import React from "react";
import Image from "next/image";

const SideCard = ({ description, img, title }) => {
  return (
    <div className='card card-side bg-base-100 shadow-xl'>
      <figure>
        <Image
          src={img}
          alt='Album'
          className='rounded-xl'
          width={400}
          height={400}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SideCard;
