'use client';

import React from 'react';

const MiddleMarquee: React.FC = () => {
  // Headlines array
  const headlines = [
    'Breaking News: New features coming soon!',
    'Live updates: Major event happening now!',
    'Stay tuned for more information...',
    "Special announcement: Don't miss out!",
    'Urgent: Service interruptions expected!',
  ];

  const dotImage = '/static/defImages/gdot.svg'; // Path to the green dot SVG

  return (
    <div className="relative flex h-[10vh] w-full items-center overflow-hidden ">
      {/* Marquee container */}
      <div className="flex animate-marquee whitespace-nowrap">
        {headlines.map((headline, index) => (
          <React.Fragment key={index}>
            <span className="flex items-center mx-4 text-[20px] font-semibold text-white">
              {headline}
              <img
                src={dotImage}
                alt="Green Dot"
                className="mx-4 h-4 w-4"
              />
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* Duplicate marquee for infinite scroll effect */}
      <div className="absolute left-full top-0 flex animate-marquee whitespace-nowrap">
        {headlines.map((headline, index) => (
          <React.Fragment key={`duplicate-${index}`}>
            <span className="flex items-center mx-4 text-[20px] font-semibold text-white">
              {headline}
              <img
                src={dotImage}
                alt="Green Dot"
                className="mx-4 h-4 w-4"
              />
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MiddleMarquee;
