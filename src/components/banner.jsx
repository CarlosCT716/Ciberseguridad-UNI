import React from 'react';
import banner from '../assets/banner.jpg';
import logo from '../assets/logo.png';

const Banner = () => {
  return (
    <div
    className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden banner-bg"
  >
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-transparent" />

      <div className="relative z-10 flex w-full h-full">
        <div className="flex flex-col justify-center items-start w-1/2 pl-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-green-500 mb-6">
           C³:
            <span className="text-white text-transparent bg-clip-text">
              {" "}la interseccion entre 
            </span>
              <span className="bg-gradient-to-r from-green-500 to-green-400 text-transparent bg-clip-text">
              {" "}cultura, conocimiento y ciberseguridad
            </span>
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-xl mb-8">
            Unete como miembro o aliado y forma parte del crecimiento de un espacio donde el 
            conocimiento es nuestra mejor defensa.
          </p>
          <div className="flex">
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-400 py-3 px-4 mr-4 rounded-md text-black"
            >
              Conócenos
            </a>
            <a href="#" className="py-3 px-4 rounded-md border border-green-500 text-green-500">
              Contactanos
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={logo}
            alt="Logo"
            className="w-120 h-120 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;