import React from "react";

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            "url(" +
            "https://cdn.pixabay.com/photo/2015/05/13/01/44/fractal-764921_960_720.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>
              Anawhaki <span className='font-bold underline'>Xamanismo</span>
              Estelar
            </h1>
            <p className='mb-5'>
              Queremos ajudar te a compreender o que os véus do sofrimento não
              te deixam ver. Esses véus podem ser extraídos. Sei que não parece
              uma grande promessa. Mas prometemos isto: Estar a teu lado na
              escuridão lembrando-te (e preparando-te) sempre que um dia vais
              ser capaz de iluminar a tua imensidão.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
