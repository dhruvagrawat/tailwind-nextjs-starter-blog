'use client'
import { useState, useEffect, useRef } from 'react'
import Link from '@/components/Link'

export function BlogCarousel({ posts }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState({})
  const buttonRefs = useRef({})

  useEffect(() => {
    // Populate buttonRefs.current for all posts
    const refs = {}
    posts.forEach((post) => {
      if (!refs[post.slug]) {
        refs[post.slug] = { current: null }
      }
    })
    buttonRefs.current = refs
  }, [posts])

  const handleMouseMove = (e, slug) => {
    const button = buttonRefs.current[slug]?.current
    if (button) {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const limitedX = Math.max(Math.min(x / 10, 5), -5)
      const limitedY = Math.max(Math.min(y / 10, 5), -5)
      button.style.transform = `translate(${limitedX}px, ${limitedY}px)`
    }
  }

  const handleMouseLeave = (slug) => {
    const button = buttonRefs.current[slug]?.current
    if (button) {
      button.style.transform = 'translate(0, 0)'
    }
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < posts.length - 3 ? prev + 1 : prev))
  }

  const toggleImage = (slug) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }))
  }

  return (
    <div className="relative w-full bg-white p-8">
      <div className="relative flex h-full w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * 25}%)`,
          }}
        >
          {posts.map((post) => {
            const { slug, title, image, readTime, date } = post
            const secondImage = post.secondImage || image

            return (
              <div key={slug} className="min-w-[33%] px-2">
                <div className="h-full overflow-hidden bg-white">
                  <div
                    className="relative bg-[#ff0000] pb-[60%]"
                    onMouseMove={(e) => handleMouseMove(e, slug)}
                    onMouseLeave={() => handleMouseLeave(slug)}
                  >
                    <img
                      src={activeImageIndex[slug] ? secondImage : image}
                      alt={title}
                      className="absolute h-full w-full rounded object-cover transition-opacity duration-300"
                    />
                    <button
                      onClick={() => toggleImage(slug)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white transition-transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <button
                      ref={(el) => {
                        if (!buttonRefs.current[slug]) {
                          buttonRefs.current[slug] = {}
                        }
                        buttonRefs.current[slug].current = el
                      }}
                      className="absolute right-4 top-4 bg-white p-1.5 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-base font-bold text-gray-900">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h2>
                    <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
                      <span>{readTime} min read</span>
                      <span>·</span>
                      <span>{new Date(date).toLocaleDateString()}</span>
                    </div>
                    <div className="mt-4">
                      <button className="text-sm text-gray-600 hover:text-gray-900">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button
        onClick={handlePrevSlide}
        className="absolute -left-4 top-1/2 -translate-y-1/2 p-4 text-black transition-transform hover:scale-110 disabled:opacity-50"
        disabled={currentSlide === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute -right-4 top-1/2 -translate-y-1/2 p-4 text-black transition-transform hover:scale-110 disabled:opacity-50"
        disabled={currentSlide >= posts.length - 3}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}
