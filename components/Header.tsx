'use client'
import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
// import SearchButton from './SearchButton' // Commented out SearchButton import
import Image from 'next/image' // Import the Image component from next/image

const Header = () => {
  // State for custom cursor
  const [isCustomCursor, setIsCustomCursor] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Track mouse movement for cursor position
  const handleMouseMove = (e) => {
    if (isCustomCursor) {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }

  // Handle mouse enter and leave events for custom cursor
  const handleMouseEnter = () => {
    setIsCustomCursor(true)
  }

  const handleMouseLeave = () => {
    setIsCustomCursor(false)
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

  // Use a dynamic background image with next/image for optimization
  const headerStyle = {
    backgroundImage: 'url(/static/defImages/Grain.png)', // Regular URL for background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  let headerClass =
    'flex items-center bg-red-500 border-b-[3px] border-black lg:pr-10 lg:pl-10 w-full h-[9vh] justify-between py-7'

  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <>
      {/* Announcement Section */}
      <div className="bg-white py-2 text-center text-black">
        <div className="overflow-hidden whitespace-nowrap text-sm font-semibold">
          <div className="animate-marquee flex h-[3vh] items-center justify-center">
            <p className="font-popins font-medium underline">
              {' '}
              Get upto 50% off on your first months rent
            </p>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header
        className={headerClass}
        style={headerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Custom Cursor */}
        {isCustomCursor && (
          <div
            className="custom-cursor"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          />
        )}

        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8">
            <div className="ml-3 mr-3">
              {/* No need for next/image for SVG logos */}
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="flex items-center space-x-4 px-4 leading-5 sm:space-x-6 sm:px-6 md:px-8">
          <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-popins font-extrabold text-white transition duration-300 hover:text-yellow-400" // Text color white with yellow hover
                >
                  {link.title}
                </Link>
              ))}
          </div>

          {/* Add a button with an image using next/image for optimization */}
          <button className="flex transform items-center rounded-full bg-white px-4 py-2 font-popins text-black shadow-custom transition duration-300 hover:scale-105 hover:bg-gray-200 active:scale-100">
            <Image
              src="/static/defImages/logo.png"
              alt="Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-sm">Livebuy Home</span>
          </button>

          {/* Commented out SearchButton section */}
          {/* <SearchButton /> */}

          <MobileNav />
        </div>
      </header>
    </>
  )
}

export default Header
