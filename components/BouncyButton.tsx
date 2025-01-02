import React from 'react';
import Image from 'next/image'; 

const BouncyButton: React.FC = () => {
    return (
        <div className="button-wrapper">
          <button className="animated-button relative flex items-center justify-center">
            <div
              className="button-content flex items-center justify-center rounded-full bg-white border-[1.5px] border-black transition-all duration-300"
              style={{
                width: '144px',
                height: '40px',
                boxShadow: '4px 4px 0 #000',
              }}
            >
              <Image
                src="/static/defImages/logo.png"
                alt="Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="font-poppins text-[13px] font-[550] leading-[19.5px] text-black">
                Livebuy Home
              </span>
            </div>
          </button>
        </div>
      );
    };

export default BouncyButton;
