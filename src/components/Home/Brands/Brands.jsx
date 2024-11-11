import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiToyota } from 'react-icons/si';
import { SiNissan } from 'react-icons/si';
import { SiPeugeot } from 'react-icons/si';
import { SiHonda } from 'react-icons/si';
import { SiMitsubishi } from 'react-icons/si';
import { SiHyundai } from 'react-icons/si';
import { SiMercedes } from 'react-icons/si';
import { SiMazda } from 'react-icons/si';
import { SiBmw } from 'react-icons/si';
import { SiVolkswagen } from 'react-icons/si';
import { SiVolvo } from 'react-icons/si';
import { SiSuzuki } from 'react-icons/si';
import { SiRenault } from 'react-icons/si';
import { SiFord } from 'react-icons/si';
import { SiKia } from 'react-icons/si';
import { SiCadillac } from 'react-icons/si';
import { SiTesla } from 'react-icons/si';
import { SiChevrolet } from 'react-icons/si';
import { SiJaguar } from 'react-icons/si';

const carBrands = [
  { iconName: SiTesla, brandName: 'TESLA' },
  { iconName: SiMercedes, brandName: 'MERCEDES' },
  { iconName: SiFord, brandName: 'FORD' },
  { iconName: SiToyota, brandName: 'TOYOTA' },
  { iconName: SiNissan, brandName: 'NISSAN' },
  { iconName: SiHonda, brandName: 'HONDA' },
  { iconName: SiMitsubishi, brandName: 'Mitsubishi' },
  { iconName: SiVolkswagen, brandName: 'Volkswagen' },
  { iconName: SiKia, brandName: 'KIA' },
  { iconName: SiChevrolet, brandName: 'Chevrolet' },
  { iconName: SiCadillac, brandName: 'CADILLAC' },
  { iconName: SiJaguar, brandName: 'JAGUAR' },
  { iconName: SiRenault, brandName: 'RENAULT' },
  { iconName: SiVolvo, brandName: 'VOLVO' },
  { iconName: SiSuzuki, brandName: 'SUZUKI' },
  { iconName: SiHyundai, brandName: 'HYUNDAI' },
  { iconName: SiMazda, brandName: 'MAZDA' },
  { iconName: SiBmw, brandName: 'BMW' },
  { iconName: SiPeugeot, brandName: 'Peugeot' },
];

const Brands = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 mt-8 px-6 py-2 shadow-sm ">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
        {carBrands.map((brand) => (
          <div
            key={brand.brandName}
            className="bg-slate-200 m-2 w-full text-center"
          >
            {' '}
            <button className="p-1 w-[64px] sm:w-[72px] md:w-[100px] ">
              <div className="rounded-lg hover:bg-[#8d97dc] hover:text-[#ff0000] hover:scale-105 transition duration-300 ease-linear hover:shadow-xl hover:shadow-[#6a6262] hover:backdrop-blur-xl hover:bg-opacity-40 bg-[#d2d6ec] max-w-[64px] sm:max-w-[100px] md:max-w-full mx-[2px]">
                {' '}
                <h1 className="text-center font-bold text-xs ">
                  {brand.brandName}
                </h1>
                <div
                  className="flex justify-center hover:text-white"
                  onClick={(e) => {
                    {
                      e.preventDefault();
                      navigate({
                        pathname: '/search',
                        search: `query=${brand.brandName}`,
                      });
                    }
                  }}
                >
                  <brand.iconName
                    className="carIcon"
                    style={{ color: '#000', fontSize: '50px' }}
                  />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
