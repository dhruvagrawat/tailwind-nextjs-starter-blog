// // components/TagSection.js
'use client'
import { Parallax } from 'react-scroll-parallax'
import RotatingStarIcon from './other-icons/icons'

export function TagSection() {
  const tagsData = [
    [
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
    ],
    [
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
      {
        image: '/static/defImages/TrendingTopics.png',
        hoverImage: '/static/defImages/TrendingTopics.png',
      },
    ],
  ]

  return (
    <Parallax speed={+20}>
      <div
        className="mx-auto flex h-[676px] w-[100%] flex-col justify-start bg-black"
        style={{ marginTop: '0px' }}
      >
        <div className="flex justify-center gap-5 py-[80px] pb-[25px]">
          <div className="flex animate-spin-slow justify-center">
            <RotatingStarIcon />
          </div>

          <div className="flex justify-center">
            <h1 className="font-popins text-[16px] text-white">READ BY CATEGORY</h1>
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
                  <img
                    src={tag.image}
                    alt="tag image"
                    className="h-full w-full object-cover transition-all duration-[2000ms] ease-in-out"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = tag.hoverImage
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = tag.image
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
