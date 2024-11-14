import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className=" mt-5 md:mt-6 bg-[#010c42] text-white ms-5">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-18 md:px-16 px-5">
        <div className="w-full md:w-1/4 mt-3 md:mt-0 order-3 md:order-1">
          <div>
            <div>
              <h3 className="font-semibold text-2xl pb-2 ">AAAutoMart</h3>
              <p className="mb-2 text-sm md:text-[16px]  leading-relaxed">
                Adwa Rd.,
                <br />
                ABC building, <br />
                3rd Floor, #301,
                <br />
                Phone : +251 911 123123
              </p>
              <p>
                Email :{' '}
                <Link to="mailto:birechis@gmail.com">
                  <span className="underline">aaautomart@gmail.com</span>
                </Link>
              </p>
            </div>
            <div className="flex gap-2 mt-5">
              <Link to="https://www.linkedin.com/in/temesgen-birechis-ab2a18319/">
                <FaXTwitter size={32} />
              </Link>
              <Link to="https://www.linkedin.com/in/temesgen-birechis-ab2a18319/">
                <FaFacebookSquare size={32} />
              </Link>
              <Link to="https://www.linkedin.com/in/temesgen-birechis-ab2a18319/">
                <FaInstagramSquare color="#ff0000" size={32} />
              </Link>
              <Link to="https://www.linkedin.com/in/temesgen-birechis-ab2a18319/">
                <FaLinkedin color="#0000ff" size={32} />
              </Link>
              <Link to="https://www.linkedin.com/in/temesgen-birechis-ab2a18319/">
                <FaWhatsappSquare size={32} />
              </Link>
            </div>
          </div>
        </div>
        <div className="oder-1 md:order-2">
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Pages Links
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/aaautomart/"
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear"
            >
              Home
            </Link>
            <Link
              to="/aaautomart/about"
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/aaautomart/cars"
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear"
            >
              Car
            </Link>
            <Link
              to="/aaautomart/services"
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear"
            >
              Services
            </Link>
          </div>
        </div>
        <div className="order-2 md:order-3">
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Used cars for sale
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <button
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear text-start"
              onClick={(e) => {
                {
                  e.preventDefault();
                  const brandName = 'toyota';
                  navigate({
                    pathname: '/aaautomart/search',
                    search: `query=${brandName}`,
                  });
                }
              }}
            >
              Toyota
            </button>
            <button
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear text-start"
              onClick={(e) => {
                {
                  e.preventDefault();
                  const brandName = 'honda';
                  navigate({
                    pathname: '/aaautomart/search',
                    search: `query=${brandName}`,
                  });
                }
              }}
            >
              Honda
            </button>
            <button
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear text-start"
              onClick={(e) => {
                {
                  e.preventDefault();
                  const brandName = 'hyundai';
                  navigate({
                    pathname: '/aaautomart/search',
                    search: `query=${brandName}`,
                  });
                }
              }}
            >
              Hyundai
            </button>
            <button
              className="hover:text-slate-300 hover:translate-x-3 transition duration-200 ease-linear text-start"
              onClick={(e) => {
                {
                  e.preventDefault();
                  const brandName = 'nissan';
                  navigate({
                    pathname: '/aaautomart/search',
                    search: `query=${brandName}`,
                  });
                }
              }}
            >
              Nissan
            </button>
          </div>
        </div>
      </div>
      <div>
        {}
        <p className="text-center py-4 text-sm">
          @ Copyright Developed by{' '}
          <span className="font-semibold mx-2">AAAutoMart</span> | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
