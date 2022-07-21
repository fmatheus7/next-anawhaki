import React from "react";
import Card from "./../components/Card";
import rape from "../public/rape.jpg";
import sananga from "../public/sananga.jpg";
import ayahuasca from "../public/ayahuasca.jpg";

// TODO: FETCH DATA FROM CMS
// TODO: SWITCH Hcard for the SideCard Component

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto py-4 min-h-screen'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>
          Nossos Serviços
        </h1>
      </div>
      <div className='sm:grid gap-4 grid-cols-3  py-2'>
        <Card
          title={'cerimonias'}
          desc={"nossa cerimonias são cerimonias xamanicas"}
          img={ayahuasca}
        />
      </div>
    </div>
  );
};

export default Services;
