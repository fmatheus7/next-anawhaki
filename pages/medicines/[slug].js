import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

//TODO: FIX

const MedicinesDetails = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 uppercase '>
          {slug}
        </h1>
      </div>
    </div>
  );
};

export default MedicinesDetails;
