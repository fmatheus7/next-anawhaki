import React from "react";
import HCard from "./../components/HCard";
// TODO: FETCH DATA FROM CMS
const Medicines = () => {
  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Medicinas</h1>
      </div>
      <div className='md:grid grid-cols-4 py-4 gap-4'>
        <HCard />
        <HCard />
        <HCard />
        <HCard />
        <HCard />
      </div>
    </div>
  );
};

export default Medicines;
