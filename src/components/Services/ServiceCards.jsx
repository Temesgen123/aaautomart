import React from 'react';

const ServiceCards = ({ icon, title, paragraphs }) => {
  return (
    <div className="group text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-[#010c42] hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
      <p>{icon}</p>
      <h1 className="text-[#010c42] text-3xl font-bold group-hover:text-white">
        {title}
      </h1>
      <p className="text-sm">{paragraphs}</p>
    </div>
  );
};

export default ServiceCards;
