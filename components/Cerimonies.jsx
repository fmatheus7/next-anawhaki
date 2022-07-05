import React from "react";
import Galery from "./Galery";

const Cerimonies = () => {
  return (
    <div className='max-w-7xl mx-auto py-6'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 rounded-2xl mx-4'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Cerimonias</h1>
      </div>
      <div>
        <Galery />
      </div>
    </div>
  );
};

export default Cerimonies;
