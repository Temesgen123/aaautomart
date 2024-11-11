import React from 'react';

const FeaturedCard = ({ id, image, name, price }) => {
  return (
    <div
      key={id}
      className="border-2 border-secondary bg-slate-100 rounded-xl mb-2 cursor-pointer hover:scale-90 hover:bg-slate-200 transition duration-300 ease-linear"
    >
      {/* <div >
        <img src={image} alt="carimage" className="rounded-t-xl max-w-[172px] sm:max-w-[320px] md:max-w-[360px]"  />
      </div> */}
      <div>
        <img
          src={image[0]}
          alt="carimage"
          className="rounded-t-xl max-w-[160px] sm:max-w-[240px] md:max-w-[300px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold  text-md md:text-lg pt-1 text-orange-600">
          {name}
        </h1>
        <div className="flex gap-5 pt-1">
          <h2 className="text-sm md:text-md">Starting at ${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
