'use client'
import { Parallax } from 'react-scroll-parallax'
import RotatingStarIcon from './other-icons/icons'

export function TagSection() {
  const tagsData = [
    [
      {
        title: 'Delhi University',
        subtitle: 'Education Hub',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: true,
      },
      {
        title: 'Mumbai City',
        subtitle: 'City of Dreams',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: false,
      },
      {
        title: 'Goa Beaches',
        subtitle: 'Tourist Paradise',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: true,
      },
      {
        title: 'Kerala Backwaters',
        subtitle: "Nature's Beauty",
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: false,
      },
    ],
    [
      {
        title: 'Rajasthan Heritage',
        subtitle: 'Royal Legacy',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: true,
      },
      {
        title: 'Sikkim Hills',
        subtitle: 'Scenic Views',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: false,
      },
      {
        title: 'Kolkata Culture',
        subtitle: 'City of Joy',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: true,
      },
      {
        title: 'Chennai Coast',
        subtitle: 'Marina Beach',
        image: '/static/defImages/1.webp',
        gif: '/static/defImages/1.gif',
        hasLabel: false,
      },
    ],
  ]

  return (
    <Parallax speed={+20}>
      <div className="m-10 mx-auto mb-10 flex w-[100%] flex-col justify-center rounded-[10px] bg-black pt-10">
        <div className="flex justify-center pb-6">
          <h1 className="text-white">READ BY CATEGORY</h1>
        </div>
        {tagsData.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-4 flex flex-col justify-center pl-4 pr-4">
            <div className="flex flex-row items-center justify-center gap-[30px] pl-2 pr-2 pt-2">
              {row.map((tag, colIndex) => (
                <div
                  key={colIndex}
                  className="relative min-h-[150px] w-[23%] overflow-hidden rounded-[11px] bg-cgray"
                  style={{
                    backgroundImage: `url(${tag.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = `url(${tag.gif})`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = `url(${tag.image})`
                  }}
                >
                  {tag.hasLabel && (
                    <div
                      className="z-999 absolute right-0 top-[-10%] translate-x-[50%] translate-y-[-50%] rounded-full bg-red-500 px-1 py-0.5 text-[9px] text-black"
                      style={{
                        transform: 'translate(50%, -50%)',
                      }}
                    >
                      New
                    </div>
                  )}
                  <div className="absolute left-3 top-3 flex flex-col text-black">
                    <h3 className="text-sm font-semibold">{tag.title}</h3>
                    <p className="text-xs">{tag.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Parallax>
  )
}