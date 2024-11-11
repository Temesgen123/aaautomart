import React from 'react';
import { FaShippingFast, FaUser } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';
import WhyUsCard from './WhyUsCard';

const icon1 = <SiWebmoney className="text-blue-800 mx-auto" size={48} />;
const icon2 = <FaUser className="text-blue-800 mx-auto" size={48} />;
const icon3 = <FaShippingFast className="text-blue-800 mx-auto" size={48} />;

const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center container  md:mt-10 mt-5">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Why choose <span>AAAutoMart</span>?
      </h1>
      <p className="text-sm text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime
        earum labore ratione eum quisquam natus ab porro iure sint obcaecati,
        atque nisi assumenda nostrum accusamus aliquid totam nulla. Debitis!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime
        earum labore ratione eum quisquam natus ab porro iure sint obcaecati,
        atque nisi assumenda nostrum accusamus aliquid totam nulla. Debitis!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 ">
        <WhyUsCard icon={icon1} title="Financing Options" />
        <WhyUsCard icon={icon2} title="Satisfied Customers" />
        <WhyUsCard icon={icon3} title="Fast & Easy Booking" />
      </div>
    </div>
  );
};
export default WhyUs;
