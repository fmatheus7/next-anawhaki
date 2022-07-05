import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 rounded-2xl'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>
          Nossos Serviços
        </h1>
      </div>
      <div className='sm:grid gap-4 grid-cols-3  py-2'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
