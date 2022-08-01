import { locatedError } from "graphql";
import React from "react";
import SideCard from "../../components/SideCard";
import HCard from "../../components/HCard";
import rape from "../../public/rape.jpg";
import sananga from "../../public/sananga.jpg";
import ayahuasca from "../../public/ayahuasca.jpg";
import Card from "../../components/Card";
import Link from "next/link";
// TODO: SWITCH Hcard for the SideCard Component
// TODO: FIX PAGE ASPECT
const Medicines = () => {
  return (
    <div className='max-w-7xl mx-auto py-4 min-h-screen'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Medicinas</h1>
      </div>
      <div className='container py-4'>
        <div className='md:flex justify-between space-x-4 flex-wrap space-y-4  items-center '>
          <Link href={`/medicines/ayahuasca}`}>
            <Card title={"Ayhuasca"} img={ayahuasca} />
          </Link>
          <Card title={"Rape"} img={ayahuasca} />
          <Card title={"Kambô"} img={ayahuasca} />
          <Card title={"Sananga"} img={ayahuasca} />
        </div>
        <Link href={`/medicines/ayahuasca}`}>Ayahuasca</Link>
      </div>
    </div>
  );
};

export default Medicines;
