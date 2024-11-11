import React from 'react';
import img from '../../assets/images/ourmission.webp';

const Mission = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold md:mt-5 px-5">
        Our <span className="text-blue-700">Mission</span>
      </h1>
      <div className="flex flex-col justify-center md:flex-row item-center md:gap-2">
        {/* image section */}
        <div className="w-full md:w-2/5 my-auto md:me-20 p-3">
          <img src={img} alt="image" className="rounded-lg max-w-full" />
        </div>
        {/* content section */}
        <div className="w-full md:w-2/4 space-y-3 md:mb-10">
          <p className="text-sm lg:text-base ">
            Our mission is simple: to deliver the highest quality vehicles and
            provide outstanding customer service. we believe in building
            long-term relationships with our customers, and we are committed to
            exceeding your expectations at every step of the journey, from the
            moment you walk into our showroom to the day you drive away in your
            new vehicle.
          </p>
          <p className="text-sm lg:text-base">
            We are customer-focused, ethical, and community-oriented company and
            we strive to grow through sustainability and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Mission;
