import React from 'react';
import Navbar from '../components/Navbar';
import OurCars from '../components/Cars/OurCars';
import Footer from '../components/Footer';
import Brands from '../components/Home/Brands/Brands';
import OurCarsM from '../components/Cars/OurCrasM';

const Cars = () => {
  return (
    <>
      <Navbar />
      <div className='hidden md:flex'>
        <OurCars />
      </div>
      <div className='md:hidden'>
        <OurCarsM />
      </div>
      <Brands />
      <Footer />
    </>
  );
};

export default Cars;
