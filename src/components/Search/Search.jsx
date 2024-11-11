import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CarsData from '../../CarsData.jsx';
import CarsCard from '../../components/Cars/CarsCard.jsx';

const Search = () => {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedCar = searchParams.get('query');

  const filteredCars = CarsData.filter((car) =>
    car.name.toLowerCase().includes(searchedTerm.toLocaleLowerCase())
  );

  useEffect(() => {
    setSearchedTerm(searchedCar);
  }, [searchedCar]);

  return (
    <div className="container pt-5 mt-5 bg-slate-100">
      <div className="bg-slate-300">
        <h1 className="text-2xl text-center">
          Search Result for &quot;{' '}
          <span className="font-bold text-blue-600">
            {searchedTerm.toUpperCase()}
          </span>{' '}
          &quot;
        </h1>
      </div>
      <div>
        {filteredCars.length > 0 ? (
          <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {filteredCars.map((item) => (
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
        ) : (
          <div className="min-h-[50vh] text-2xl text-red-500 mt-5 ms-10">
            No Car Found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
