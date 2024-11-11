import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarsCard = ({
  id,
  image,
  name,
  price,
  make,
  model,
  year,
  mileage,
  seller,
  bodyStyle,
  extcolor,
  intcolor,
  transmission,
  driveline,
  feultype,
  mpg,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className="border-2 border-secondary h-full bg-slate-200 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 transition duration-200 ease-linear max-w-sm sm:max-w-md md:max-w-lg"
    >
      <img src={image[0]} alt="carimage" className="rounded-t-xl max-w-full" />
      <h1 className="font-bold text-sm md:text-xl text-center md:pl-5 text-primary mb-1">
        {name}
      </h1>
      <div className="lg:flex">
        <div>
          <p className="pl-2 md:pl-5 text-xs">Make : {make}</p>
          <p className="pl-2 md:pl-5  text-xs">Model : {model}</p>
          <p className="pl-2 md:pl-5  text-xs ">Year : {year}</p>
        </div>
        <div>
          <p className="pl-2 md:pl-5  text-xs">Miles : {mileage}</p>
          <p className="pl-2 md:pl-5  text-xs">Seller : {seller}</p>
        </div>
      </div>
      <div className="justify-between px-6 pb-2 ">
        <h3 className="font-semibold text-sm text-center text-red-600 my-1">
          Price : ${price}
        </h3>
        <button
          className="bg-[#010c42] w-full text-white text-xs sm:text-sm 
           md:px-4 py-2 rounded-md hover:bg-primary transition duration-200 ease-linear
            font-semibold"
          onClick={() => {
            navigate('/cardetails', {
              state: {
                id,
                image,
                name,
                price,
                make,
                model,
                year,
                mileage,
                seller,
                bodyStyle,
                extcolor,
                intcolor,
                transmission,
                driveline,
                feultype,
                mpg,
              },
            });
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CarsCard;
