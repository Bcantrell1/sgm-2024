import React from 'react';

export const CommercialAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[650px] h-[230px] mx-auto bg-[#fef0c300] mt-[-20px] rounded-[10px] scale-75 sm:scale-90 md:scale-100">
      <div className="absolute top-[0px] left-[-5%] sm:left-[18%] w-[400px] h-[175px]">
        <div className="absolute top-[12px] left-[5px] w-[75px] h-[10px] border-3 border-[#495355] rounded-[10px] bg-[#505A5C]"></div>
        <div className="absolute top-[18px] left-[10px] w-[65px] h-[180px] border-3 border-[#495355] border-b-0 rounded-tl-[5px] rounded-tr-[5px] z-[10] bg-[#8E9899]">
          <div className="absolute left-[9px] w-[45px] h-[180px] border-2 border-[#495355] border-b-0 border-t-0 bg-gradient-to-r from-[#0ED2F7] to-[#B2FEFA]">
            <div className="absolute left-[20px] h-[180px] border-[0.5px] border-[#495355] bg-black"></div>
            {[25, 50, 75, 100, 125, 150].map((top, index) => (
              <div key={index} className="absolute w-[45px] left-[-2px] border-[0.5px] border-black" style={{top: `${top}px`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute top-[30%] left-[19%] w-[80px] h-[140px] border-3 border-[#495355] border-b-0 bg-[#FBE6D5]">
          <div className="w-[13px] h-[140px] bg-[#B9AFA5]"></div>
          <div className="absolute top-0 w-[80px] h-[15px] border-3 border-[#495355] border-t-0 bg-[#867f7a]"></div>
          <div className="absolute top-[45px] left-[7px] w-[60px] h-[5px] border-3 border-[#495355] rounded-[5px] bg-white"></div>
          <div className="absolute top-[50px] left-[12px] w-[50px] h-[30px] border-3 border-[#495355] rounded-[3px] bg-gradient-to-r from-[#0ED2F7] to-[#B2FEFA]">
            <div className="absolute left-[45%] h-[30px] border-[0.5px] border-[#495355]"></div>
            <div className="absolute top-[50%] w-[50px] border-[0.5px] border-[#495355]"></div>
          </div>
        </div>
        <div className="absolute top-[34px] left-[36.5%] w-[120px] h-[10px] border-3 border-[#495355] rounded-[10px] bg-white"></div>
        <div className="absolute top-[45px] left-[39%] w-[100px] h-[150px] border-3 border-[#495355] bg-[#867f7a] z-[20]">
          {[20, 50, 80, 110, 140].map((top, index) => (
            <div key={index} className="absolute w-[100px] border-[0.5px] border-[#495355]" style={{top: `${top}px`}}></div>
          ))}
          <div className="absolute top-[25px] left-[17px] w-[70px] h-[5px] border-3 border-[#495355] rounded-[10px] bg-white"></div>
          <div className="absolute top-[30px] left-[20px] w-[65px] h-[120px] border-3 border-[#495355] border-t-0 border-b-0 bg-gradient-to-r from-[#0ED2F7] to-[#B2FEFA]">
            <div className="absolute left-[48%] h-[120px] border border-[#495355]"></div>
            {['left', 'right'].map((side) => (
              <div key={side} className={`absolute top-[40%] ${side === 'left' ? 'left-[24px]' : 'right-[25px]'} h-[15px] border border-[#495355] rounded-[5px]`}></div>
            ))}
          </div>
        </div>
        <div className="absolute top-[30%] right-[16%] w-[80px] h-[140px] border-3 border-[#495355] border-b-0 bg-[#FBE6D5]">
          <div className="w-[13px] h-[140px] bg-[#B9AFA5]"></div>
          <div className="absolute top-0 w-[80px] h-[15px] border-3 border-[#495355] border-t-0 bg-[#867f7a]"></div>
          <div className="absolute top-[45px] left-[7px] w-[60px] h-[5px] border-3 border-[#495355] rounded-[5px] bg-white"></div>
          <div className="absolute top-[50px] left-[12px] w-[50px] h-[30px] border-3 border-[#495355] rounded-[3px] bg-gradient-to-r from-[#0ED2F7] to-[#B2FEFA]">
            <div className="absolute left-[45%] h-[30px] border-[0.5px] border-[#495355]"></div>
            <div className="absolute top-[50%] w-[50px] border-[0.5px] border-[#495355]"></div>
          </div>
        </div>
        <div className="absolute top-[12px] left-[82.3%] w-[75px] h-[10px] border-3 border-[#495355] rounded-[10px] bg-[#505A5C]"></div>
        <div className="absolute top-[18px] right-[-0px] w-[65px] h-[180px] border-3 border-[#495355] border-b-0 rounded-tl-[5px] rounded-tr-[5px] z-[10] bg-[#8E9899]">
          <div className="absolute left-[9px] w-[45px] h-[180px] border-2 border-[#495355] border-b-0 border-t-0 bg-gradient-to-r from-[#0ED2F7] to-[#B2FEFA]">
            <div className="absolute left-[20px] h-[180px] border-[0.5px] border-[#495355] bg-black"></div>
            {[25, 50, 75, 100, 125, 150].map((top, index) => (
              <div key={index} className="absolute w-[45px] left-[-2px] border-[0.5px] border-black" style={{top: `${top}px`}}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
