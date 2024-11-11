import React from 'react';
import CarsCard from '../../Cars/CarsCard.jsx';
import carsData from '../../../CarsData.jsx';

const NewArrivals = () => {
  const newArrivals = carsData.filter((car) => car.newArrival === true);
  return (
    <div className="container pt-5 mt-5 bg-slate-100">
      <div>
        <h1 className="font-bold text-4xl text-center">New Arrivals</h1>
        <p className="text-center text-lg">
          {' '}
          Handpicked models that combine style, performance, and comfort.
        </p>
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {newArrivals.map((item) => (
          <div key={item.id}>
            <CarsCard
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              make={item.make}
              model={item.model}
              year={item.year}
              mileage={item.mileage}
              seller={item.seller}
              bodyStyle={item.bodyStyle}
              extcolor={item.extcolor}
              intcolor={item.intcolor}
              transmission={item.transmission}
              driveline={item.driveline}
              feultype={item.feultype}
              mpg={item.mpg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
