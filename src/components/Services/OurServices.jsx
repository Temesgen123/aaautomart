import React from 'react';
import { FaCar } from 'react-icons/fa';
import { GiMechanicGarage } from 'react-icons/gi';
import { GiGears } from 'react-icons/gi';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { GiTrade } from 'react-icons/gi';
import { MdContactSupport } from 'react-icons/md';
import ServiceCards from './ServiceCards';
import image from '../../assets/images/services.webp';

const OurServices = () => {
  const icon1 = (
    <FaCar className="text-[#1f1fab] hover:text-[#fff] mx-auto" size={48} />
  );
  const icon2 = (
    <FaMoneyCheckDollar
      className="text-[#1f1fab] hover:text-[#fff] mx-auto"
      size={48}
    />
  );
  const icon3 = (
    <GiTrade className="text-[#1f1fab] hover:text-[#fff] mx-auto" size={48} />
  );
  const icon4 = (
    <GiMechanicGarage
      className="text-[#1f1fab] hover:text-[#fff] mx-auto"
      size={48}
    />
  );
  const icon5 = (
    <GiGears className="text-[#1f1fab] hover:text-[#fff] mx-auto" size={48} />
  );
  const icon6 = (
    <MdContactSupport
      className="text-[#1f1fab] hover:text-[#fff] mx-auto"
      size={48}
    />
  );
  const paragraphs1 =
    ' Explore a wide range of new and certified pre-owned vehicles. Our team will help you find the perfect match based on your needs and budget.';
  const paragraphs2 =
    'We offer flexible financing solutions to suit all types of credit. Get competitive rates and quik approvals, making your car-buying experience smooth and hassle-free.';
  const paragraphs3 =
    ' Looking to upgrade? We make trading in your old car easy. Get a fair market valuation and use it toward your new purchase.';
  const paragraphs4 =
    'Keep your vehicle running like new with our comprehensive maintenance services. From oil changes to advanced repairs, our certified technicians handle it all.';
  const paragraphs5 =
    " Upgrade or repair your vehicle with genuine parts and accessories. We offer a wide selection tailored to fit your car's make and model perfectly.";
  const paragraphs6 =
    'Our team is dedicated to providing outstanding customer service. Reach out with any question and we will ensure you get the help you need.';
  return (
    <div className="container pt-5">
      <div>
        <h1 className="font-bold text-4xl text-center p-5">
          Our <span>Services</span>
        </h1>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <ServiceCards
          icon={icon1}
          title="New & Used Car Sales"
          paragraphs={paragraphs1}
        />
        <ServiceCards
          icon={icon2}
          title="Financing Options"
          paragraphs={paragraphs2}
        />
        <ServiceCards
          icon={icon3}
          title="Trade-In Program"
          paragraphs={paragraphs3}
        />
        <ServiceCards
          icon={icon4}
          title="Vehicles Service & Maintenance"
          paragraphs={paragraphs4}
        />
        <ServiceCards
          icon={icon5}
          title="Parts & Accessories"
          paragraphs={paragraphs5}
        />
        <ServiceCards
          icon={icon6}
          title="Customer Support"
          paragraphs={paragraphs6}
        />
      </div>
    </div>
  );
};

export default OurServices;
