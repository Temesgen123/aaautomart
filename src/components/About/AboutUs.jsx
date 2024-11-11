import React from 'react';
import Vision from './Vision.jsx';
import Approach from './Approach.jsx';
import Mission from './Mission.jsx';

const AboutUs = () => {
  return (
    <div className="container pt-6 md:px-16 ">
      <div className=" pb-6 md:pb-0">
        <h1 className="text-4xl font-bold text-center mb-6">
          About <span className="text-blue-700">Us</span>
        </h1>
        <h1 className="text-xl font-bold mb-4 text-center">
          Welcome to AAAutoMart - Your Trusted Automotive Partner
        </h1>
        <p>
          At AAAutomotive, we are passionate about helping you find the perfect
          vehicle to match your lifestyle, needs and budget. Located in the
          heart of Addis Ababa, we have been proudly serving the community since
          2001. Whether you are looking for a new or used car, SUV, or truck, we
          are dedicated to providing an exceptional car-buying experience that
          is transparent, honest and stress-free.
        </p>
      </div>
      <Mission />
      <Vision />
      <Approach />
    </div>
  );
};

export default AboutUs;
