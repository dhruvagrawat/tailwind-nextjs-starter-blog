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

  const dotImage = '/static/defImages/gdot.svg';

  return (
    <div className="relative flex h-[10vh] w-full items-center overflow-hidden">
      {/* Marquee container */}
      <div className="flex animate-marquee whitespace-nowrap">
        {headlines.map((headline, index) => (
          <span
            key={index}
            className="flex items-center mx-4 text-[20px] font-semibold text-white"
          >
            {headline}
            <img src={dotImage} alt="Green Dot" className="mx-4 h-4 w-4" />
          </span>
        ))}
      </div>
      {/* Duplicate marquee for infinite scroll effect */}
      <div className="flex animate-marquee whitespace-nowrap">
        {headlines.map((headline, index) => (
          <span
            key={`duplicate-${index}`}
            className="flex items-center mx-4 text-[20px] font-semibold text-white"
          >
            {headline}
            <img src={dotImage} alt="Green Dot" className="mx-4 h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MiddleMarquee;