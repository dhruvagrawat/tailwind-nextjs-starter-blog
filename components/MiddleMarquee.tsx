import React from 'react'

const MiddleMarquee: React.FC = () => {
  // Random test headlines
  const headlines = [
    'Breaking News: New features coming soon!',
    'Live updates: Major event happening now!',
    'Stay tuned for more information...',
    "Special announcement: Don't miss out!",
    'Urgent: Service interruptions expected!',
  ]

  const dotImage = '/static/defImages/gdot.svg' // The provided SVG path for the green dot

  return (
    <div className="perspective-[300px] relative flex h-[10vh] w-full items-center justify-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Loop through headlines with alternating text and dot pattern */}
        {headlines.flatMap((headline, index) => [
          <span key={`headline-${index}`} className="mx-2 py-[10%] text-2xl leading-[80%]">
            {headline}
          </span>,
          <img key={`dot-${index}`} src={dotImage} alt="Green Dot" className="z-10 mx-4 h-[50%]" />,
        ])}
      </div>

      {/* Duplicate marquee for seamless scrolling */}
      <div className="absolute left-full top-0 flex animate-marquee whitespace-nowrap">
        {headlines.flatMap((headline, index) => [
          <span
            key={`duplicate-headline-${index}`}
            className="mx-2 py-[10%] text-2xl leading-[80%]"
          >
            {headline}
          </span>,
          <img
            key={`duplicate-dot-${index}`}
            src={dotImage}
            alt="Green Dot"
            className="z-10 mx-4 h-[50%]"
          />,
        ])}
      </div>
    </div>
  )
}

export default MiddleMarquee
