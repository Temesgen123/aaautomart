import React from 'react';

const WhyUsCard = ({ icon, title }) => {
  return (
    <div
      className="text-center p-8 space-y-4 bg-slate-100 hover:bg-[#1b0459] hover:text-white
    hoover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer "
    >
      <p> {icon}</p>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam
        totam voluptatibus quia neque. Facere quisquam dolore esse veniam dicta,
        adipisci recusandae non ex earum accusantium ut vero, sunt animi.
      </p>
    </div>
  );
};

export default WhyUsCard;
