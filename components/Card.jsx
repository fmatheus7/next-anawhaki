import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInfo } from "react-icons/fa";
const Card = ({ title, img, desc }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image alt='/' src={img} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className='card-actions justify-end'>
        <Link href={`/medicines/${title}`}>
          <button className='btn  w-full'>
            <FaInfo size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
