import React from "react";
import Galery from "./../components/Galery";
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
import PhotoGaleryModal from "../components/PhotoGaleryModal";

// TODO: SWITCH STATIC DATA TO API DATA CALL

const cerimoniesQuery = gql`
  query {
    ceremonies {
      title
      data
      fotos {
        url
      }
    }
  }
`;

const Cerimonies = () => {
  const { data, error, loading } = useQuery(cerimoniesQuery);

  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Oooops... Something went wrong</p>
      </>
    );
  console.log(data);
  const galeryImgs = data.ceremonies.map((ceremony) => ceremony.fotos[0].url);
  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Cerimonias</h1>
      </div>
      <Galery width={450} height={450} image={galeryImgs} />
    </div>
  );
};

export default Cerimonies;
