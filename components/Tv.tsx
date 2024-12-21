import React from 'react'
import Image from 'next/image'

interface AchievementSectionProps {
  title: string
  description: string
  videoUrl?: string
  gifUrl?: string
}

const AchievementSection = ({ title, description, videoUrl, gifUrl }: AchievementSectionProps) => {
  return (
    <div className="w-full bg-black py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <div className="mb-4 inline-block rounded-full bg-amber-100/10 px-4 py-1 text-sm text-amber-100">
            Achievements
          </div>
          <h2 className="text-4xl font-bold leading-tight">{title}</h2>
          <p className="leading-relaxed text-gray-400">{description}</p>
        </div>

        {/* Image Frame with Content Hole */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Base TV Frame Image */}
            <Image
              src="/static/defImages/tv.png"
              alt="TV Frame"
              layout="fill"
              objectFit="contain"
              className="z-10"
            />

            {/* Video/GIF Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              {videoUrl ? (
                <video autoPlay loop muted playsInline className="h-[65%] w-[65%] object-cover">
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : gifUrl ? (
                <Image
                  src={gifUrl}
                  alt="Content"
                  width={300}
                  height={300}
                  className="h-[65%] w-[65%] object-cover"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementSection
