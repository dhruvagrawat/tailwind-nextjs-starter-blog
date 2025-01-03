// components/CustomCursor.js
'use client'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

export function CustomCursor() {
  const [isCustomCursor, setIsCustomCursor] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [liveReaders, setLiveReaders] = useState(3000)

  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    if (isCustomCursor) {
      document.addEventListener('mousemove', handleMouseMove)
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isCustomCursor])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveReaders((prev) => prev + Math.floor(Math.random() * 21 - 10)) // Random change between -10 and +10
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Parallax speed={-20}>
      <div
        className="cursor-section flex h-[84vh] flex-row bg-white"
        onMouseEnter={() => setIsCustomCursor(true)}
        onMouseLeave={() => setIsCustomCursor(false)}
        style={{
          marginTop: '30px', // Create space between the header and the section
          zIndex: -10, // Ensure it's below the header (if necessary)
          marginBottom: '0px',
        }}
      >
        {isCustomCursor && (
          <div
            className="custom-cursor"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          />
        )}
        <div className="mt-8 flex w-full flex-col justify-between">
          {/* Live Readers Section */}
          <div className="flex items-center space-x-2 pl-5 pt-2">
            <span className="ml-9 h-3 w-3 animate-pulse-custom rounded-full bg-transparent"></span>
            <h1 className="text-left font-poppins text-[16px] font-thin text-black">
              <b className="font-bold">{liveReaders}</b> <b>LIVE READERS</b>
            </h1>
          </div>
          {/* Main Section Content */}
          <div className="mt-2 flex h-full w-full items-end justify-center">
            <p className="whitespace-nowrap text-center font-palatino text-[8vw] font-bold text-black">
              DECLUTTER THE NOISE
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  )
}
