import React from 'react';
import { useState } from 'react';
import CarsCard from './CarsCard.jsx';
import Pagination from './Pagination.jsx';
import CarsData from '../../CarsData.jsx';

const OurCars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = CarsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container pt-5">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Cars</span>
        </h1>
      </div>
      <div className="flex">
        {/* className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5" */}
        {currentPosts.map((item) => (
          <div key={item.id} className="mt-2 p-2 mx-1 bg-[#010c42] rounded-lg">
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
      <Pagination
        totalPosts={CarsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default OurCars;
