import React from 'react';

export const HouseWithYard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[487.5px] h-[230px] mt-[-20px] mx-auto bg-[#1A1A1A] scale-75 sm:scale-90 md:scale-100 overflow-visible sm:overflow-hidden">
      <div className="absolute top-[15px] left-[1%] sm:left-[10%] w-[375px] h-[225px]">
        <div className="absolute top-[22.5px] left-[37.5px] w-[300px] h-[165px] border-[2.25px] border-[#495355] bg-[#FBE6D5] rounded-md shadow-lg">

          {[{ left: '30px' }, { right: '30px' }].map((style, index) => (
            <div key={index} className="absolute top-[45px] w-[75px] h-[90px] border-[2.25px] border-[#495355] bg-[#8E9899] rounded-sm" style={style}>
              <div className="absolute top-[7.5px] left-[5.5px] w-[60px] h-[75px] border-[1.5px] border-[#495355] bg-gradient-to-r from-[#0ED2F7] to-[#B2FEFA] rounded-sm">
                <div className="absolute left-[50%] h-full border-[0.375px] border-[#495355]"></div>
                <div className="absolute top-[50%] w-full border-[0.375px] border-[#495355]"></div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-0 left-[120px] w-[60px] h-[105px] border-[2.25px] border-[#495355] bg-[#B9AFA5] rounded-md shadow-md">
            <div className="absolute top-[8.25px] left-[5.52px] w-[45px] h-[87.5px] border-[1.5px] border-[#495355] bg-[#867f7a] rounded-sm">
              <div className="absolute top-[37.5px] right-[7.5px] w-[7.5px] h-[7.5px] border-[1.5px] border-[#495355] rounded-full bg-[#FBE6D5]"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 w-full h-[7.5px] bg-[#4A5E3F]"></div>

        <div className="absolute bottom-[30px] left-[15px] right-[15px] h-[30px] flex justify-between space-x-[7.5px]">
          {[...Array(25)].map((_, index) => (
            <div key={index} className="w-[7.5px] h-full bg-[#B9AFA5] border-[0.75px] border-[#495355] rounded-sm shadow-sm"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
