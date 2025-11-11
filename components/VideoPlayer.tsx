"use client"

import { useRef, useEffect } from 'react'

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error)
      })
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      playsInline
      loop
      muted
      controls
    >
      <source src="/videos/personal-loans.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
