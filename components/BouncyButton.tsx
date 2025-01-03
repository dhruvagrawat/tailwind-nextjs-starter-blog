import React from 'react';
import Image from 'next/image'; 

const BouncyButton: React.FC = () => {
  return (
    <div className="button-wrapper relative">
      {/* Black "shadow" div */}
      <div
        className="button-shadow absolute inset-0 rounded-full bg-black"
        style={{
          width: '170px',
          height: '42px',
          top: '6px', // Offset to simulate shadow
          left: '6px',
        }}
      ></div>

      {/* Button */}
      <button className="button-content relative flex items-center justify-center rounded-full border-[2.5px] border-black bg-white transition-transform duration-300">
        <div
          className="flex items-center justify-center border-[2px] border-black rounded-full"
          style={{
            width: '170px',
            height: '42px',
          }}
        >
          <Image
            src="/static/defImages/logo.png"
            alt="Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="font-poppins text-[16px] font-[590] leading-[19.5px] text-black ">
            Livebuy Home
          </span>
        </div>
      </button>
    </div>
  );
};

export default BouncyButton;
