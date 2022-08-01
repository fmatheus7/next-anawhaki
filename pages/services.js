import React from "react";
import Card from "../components/Card";
import rape from "../public/rape.jpg";
import sananga from "../public/sananga.jpg";
import ayahuasca from "../public/ayahuasca.jpg";

// TODO: FETCH DATA FROM CMS
// TODO: SWITCH Hcard for the SideCard Component

const Services = () => {
  const reike =
    "O Reiki Xamânico é um tipo de Reiki que segue os mesmos preceitos do Reiki Tradicional de Mikao Usui, onde a canalização das energias universais ocorre através do terapeuta e o Reiki é passado através da imposição de mãos para quem está recebendo. No entanto, a técnica se baseia nos ensinamentos ancestrais, onde vivências com os quatro elementos principais da natureza reestabelece o equilíbrio energético, além de melhoras perceptíveis nos campos físico, mental, emocional e espiritual de quem recebe o Reiki Xamânico.";

  return (
    <div className='max-w-7xl mx-auto py-4 min-h-screen'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>
          Nossos Serviços
        </h1>
      </div>
      <div className='container py-2'>
        <div className='md:flex justify-between space-x-4 flex-wrap space-y-4 '>
          <Card title={"cerimonias"} desc={reike} img={ayahuasca} />
          <Card title={"cerimonias"} desc={reike} img={rape} />
          <Card title={"cerimonias"} desc={reike} img={sananga} />
          <Card title={"cerimonias"} desc={reike} img={ayahuasca} />
          <Card title={"cerimonias"} desc={reike} img={ayahuasca} />

          <Card title={"cerimonias"} desc={reike} img={ayahuasca} />
        </div>
      </div>
    </div>
  );
};

export default Services;
