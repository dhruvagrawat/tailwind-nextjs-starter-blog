'use client'
import { Parallax } from 'react-scroll-parallax'
import RotatingStarIcon from './other-icons/icons'

export function TagSection() {
  const tagsData = [
    [
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
    ],
    [
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
      {
        image: '/static/defImages/Trending.png',
        gif: '/static/defImages/Trending2.gif',
        gifHover: '/static/defImages/Trending1.gif',
        hasLabel: false,
      },
    ],
  ]

  return (
    <Parallax speed={+20}>
      <div className="mx-auto flex w-[100%] h-[676px] flex-col justify-start bg-black">
        <div className="flex justify-center gap-5 py-[100px] pb-[25px]">
          <div className="animate-spin-slow flex justify-center">
            <RotatingStarIcon />
          </div>

          <div className="flex justify-center">
            <h1 className="text-white text-[16px] font-popins">READ BY CATEGORY</h1>
          </div>
        </div>
        {tagsData.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-4 flex flex-col justify-center pl-4 pr-4">
            <div className="flex flex-row items-center justify-center gap-[30px] pl-2 pr-2 pt-2">
              {row.map((tag, colIndex) => (
                <div
                  key={colIndex}
                  className="relative min-h-[100px] w-[20%] overflow-hidden rounded-[11px]"
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

                  <img
                    src={tag.image}
                    alt="tag image"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = tag.gifHover;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = tag.gif;
                      setTimeout(() => {
                        target.src = tag.image;
                      }, 200);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Parallax>
  )
}