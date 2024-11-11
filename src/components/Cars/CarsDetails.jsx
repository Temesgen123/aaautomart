import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CarsDetails = () => {
  const location = useLocation();
  const car = location.state;
  const images = [...car.image];
  const [imgActive, setImgActive] = useState(0);
  return (
    <>
      <Navbar />
      <div
        className="p-2 mx-3 mt-3 border-[1px] shadow-md border-secondary 
      h-full bg-slate-100 text-black rounded-xl"
      >
        <h1 className="text-3xl text-center font-bold mt-3 ">Car Details</h1>
        <div className="md:flex p-5 justify-center">
          <div
            key={location.state.id}
            className="border-2 border-secondary h-full bg-slate-200 text-black 
            rounded-xl mb-2 cursor-pointer hover:scale-95 transition duration-200 ease-linear 
            max-w-sm sm:max-w-md md:max-w-lg md:w-[50%]"
          >
            <img
              src={images[imgActive]}
              alt="carimage"
              className="rounded-t-xl max-w-full"
              onClick={() => setImgActive(0)}
            />
          </div>
          <div
            className="md:w-[100px] max-w-[100%] md:max-w-full mx-1
           md:mx-5 flex md:flex-col my-[5px] bg-[#fff] items-center"
          >
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="mb-[2px] 
                  hover:scale-110 transition duration-200 ease-linear cursor-pointer"
                  onClick={() => setImgActive(index)}
                >
                  <img src={images[index]} alt="" />
                </div>
              );
            })}
          </div>
          <div className="md:w-[35%] rounded-xl mb-2 bg-[#010c42] text-[#fff]">
            <h1 className="font-bold text-sm md:text-2xl text-center md:pl-5 text-[#fff] py-3 mb-1">
              {car.name}
            </h1>
            <div className="md:w-[70%] mx-auto px-5 text-sm md:text-lg text-thin">
              <p className="pl-2 md:pl-5 ">Make : {car.make}</p>
              <p className="pl-2 md:pl-5 ">Model : {car.model}</p>
              <p className="pl-2 md:pl-5  ">Year : {car.year}</p>
              <p className="pl-2 md:pl-5  ">Miles : {car.mileage}</p>
              <p className="pl-2 md:pl-5  ">Seller : {car.seller}</p>
              <p className="pl-2 md:pl-5  ">Body Style : {car.bodyStyle}</p>
              <p className="pl-2 md:pl-5  "> Exterior color : {car.extcolor}</p>
              <p className="pl-2 md:pl-5 "> Interior Color : {car.intcolor}</p>
              <p className="pl-2 md:pl-5"> Transmission : {car.transmission}</p>
              <p className="pl-2 md:pl-5"> Drive Line : {car.driveline}</p>
              <p className="pl-2 md:pl-5"> Feul Type : {car.feultype}</p>
              <p className="pl-2 md:pl-5 ">MPG : {car.mpg}</p>
            </div>
            <div className="justify-between px-6 pb-2 ">
              <h3 className="font-semibold text-lg text-center text-red-600 my-1">
                Price : ${car.price}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CarsDetails;
