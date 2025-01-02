'use client'
import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
// import SearchButton from './SearchButton' // Commented out SearchButton import
import Image from 'next/image' // Import the Image component from next/image
import BouncyButton from './BouncyButton'

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
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Announcement Section */}
      <div className="bg-gray-100 py-2 text-center text-black">
        <div className="overflow-hidden whitespace-nowrap text-sm font-semibold">
          <div className="flex h-[3vh] items-center justify-center">
            <p className="font-poppins font-[500] underline">
              {' '}
              Get upto 50% off on your first month's rent
            </p>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header
        className={headerClass}
        style={{
          ...headerStyle,
          height: '100px', // Explicitly set the height
          maxWidth: '100%', // Ensure responsiveness on smaller screens
          borderTop: '3px solid black', // Top border
          borderBottom: '3px solid black', // Bottom border
          zIndex: 100 // Ensure it's above other elements
        }}
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
          <div className="no-scrollbar hidden max-w-40 items-center space-x-8 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="border-black font-popins text-[13px] font-black leading-[19.5px] text-white transition duration-300"
                  style={{
                    textShadow:
                      '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000',
                    padding: '8px 12px', // Add padding for better appearance
                    borderRadius: '20px', // Rounded corners for the hover effect
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.backgroundColor = '#3E3E3E' // Background color on hover
                    target.style.color = '#ffffff' // Text color on hover
                    target.style.border = '2px solid #000' // Add border on hover
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.backgroundColor = 'transparent' // Reset background
                    target.style.color = '#ffffff' // Reset text color
                    target.style.border = 'none' // Reset border
                  }}
                >
                  {link.title}
                </Link>
              ))}
          </div>

          {/* Add a button with an image using next/image for optimization */}
          {/* <button
            className="flex items-center justify-center rounded-full border-[1.5px] border-black bg-white shadow-md transition duration-300"
            style={{
              width: '144px', // Set the width
              height: '40px', // Adjust the height to balance the padding (includes vertical space for text)
              boxShadow: '4px 4px 0 #000', // Black shadow to replicate the style
            }}
          >
            <Image
              src="/static/defImages/logo.png"
              alt="Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="font-poppins text-[13px] font-[550] leading-[19.5px] text-black">
              Livebuy Home
            </span>
          </button> */}
          <BouncyButton />

          {/* Commented out SearchButton section */}
          {/* <SearchButton /> */}

          <MobileNav />
        </div>
      </header>
    </>
  )
}

export default Header
