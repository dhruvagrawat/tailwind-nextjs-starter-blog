'use client'
import React, { useState, useEffect } from 'react'

const MixtapeComponent: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Initialize the audio object when the component mounts
    const newAudio = new Audio('/static/defImages/1.mp3')
    setAudio(newAudio)

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      // Clean up event listener and audio object
      window.removeEventListener('mousemove', handleMouseMove)
      newAudio.pause()
      newAudio.src = ''
    }
  }, [])

  const handleImageClick = () => {
    if (audio && !isPlaying) {
      audio.play().catch((error) => console.error('Audio playback error:', error))
      setIsPlaying(true)
      setTimeout(() => {
        audio.pause()
        audio.currentTime = 0
        setIsPlaying(false)
      }, 10000) // Play for 10 seconds
    }
  }

  const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.02
  const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.02

  return (
    <div
      style={{
        height: '70vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src="/static/defImages/1.webp"
        alt="Mixtape"
        onClick={handleImageClick}
        style={{
          width: '300px',
          height: 'auto',
          position: 'relative',
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: 'transform 0.1s',
          cursor: 'pointer',
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        गाने सुनिएगा जनाब?
      </div>
    </div>
  )
}

export default MixtapeComponent
