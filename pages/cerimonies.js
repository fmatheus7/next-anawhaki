import React from "react";
import Galery from "./../components/Galery";

const Cerimonies = () => {
  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Cerimonias</h1>
      </div>
      <div>
        <Galery />
      </div>
    </div>
  );
};

export default Cerimonies;
