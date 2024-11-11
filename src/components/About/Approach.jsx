import React from 'react';
import img from '../../assets/images/approach.webp';

const Approach = () => {
  return (
    <div className="mb-5">
      <h1 className="text-xl font-bold md:mt-2 pt-5 px-1 pb-3">
        Our <span className="text-blue-700">Approach</span>
      </h1>
      <div className="flex flex-col justify-center md:flex-row item-center md:gap-5 md:pt-0">
        {/* image section */}
        <div className="w-full md:w-[40%] my-auto  flex justify-center">
          <img src={img} alt="image" className="rounded-lg w-full" />
        </div>
        {/* content section */}
        <div className="w-full md:w-[60%] space-y-3 mb-0 md:mb-1">
          <ul className="list-disc ms-10 md:ms-10">
            <li>
              <span className="font-bold text-lg">
                Customer Service Excellence :
              </span>{' '}
              Every customer interaction is tailored to ensure they find the
              vehicle that fits their lifestyle and budget. We follow up
              post-purchase to maintain strong relationships and ensure
              long-term satisfaction.
            </li>
            <li>
              <span className="font-bold text-lg">Transparency in Sales :</span>
              Our pricing is upfront, with no hidden fees, so customers always
              know they are getting a fair deal. We offer comprehensive
              information on vehicle history and performance to aid informed
              decision-making.
            </li>
            <li>
              <span className="font-bold text-lg">Focus on Innovation :</span>
              By staying on top of industry trends, we continuously update our
              vehicle inventory and offer the latest automotive technologies,
              including electric and hybrid models.
            </li>
            <li>
              <span className="font-bold text-lg">
                Community-Centered Operations :
              </span>
              We actively engage with and support our community, recognizing the
              mutual benefit of a strong local presence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Approach;
