import React from 'react';
// import img from '../../../assets/images/car0002.png';

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <p className="font-bold text-4xl text-center">
          Our <span>Mission</span>
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8 ">
        {/* image section */}
        <div className="w-full md:w-2/4 ">
          {/* <img src={img} alt="img" className="rounded-3xl max-w-md mx-auto" /> */}
        </div>
        {/* content section */}
        <div className="w-full md:w-2/4 space-y-2/4">
          <h1 className="font-bold text-lg lg:text-3xl">
            {' '}
            To create a community where every journey is extraordinary.
          </h1>

          {/* <h2 className="font-semibold text-lg lg:text-2xl mb-2">
            Empower individuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.
          </h2> */}
          <br />
          {/* <p className="text-sm lg:text-base">
           Our mission is to create a community where every journey is extraordinary and to empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment.     
          </p> */}
          <p className="text-sm lg:text-base">
            Our mission is to provide an exceptional car buying experience,
            offering high-quality vehicles at competitive prices while
            delivering top-tier customer service. We are committed to building
            trust, transparency, and long-term relationships with our customers
            by ensuring satisfaction with every purchase and service.
          </p>
          <p className="text-sm lg:text-base">
            Our goal is to make the car ownership journey seamless and
            enjoyable, with a focus on innovetion, integrity, respect for one
            other and a passion for driving. We will strive for continuous
            improvement in all that we do, both personally and professionally.
            Together, we will bring this commitment to life at every
            opportunity, for every customer.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurMission;
