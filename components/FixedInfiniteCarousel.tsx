'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  image: string
  text: string
}

interface FixedInfiniteCarouselProps {
  testimonials: Testimonial[]
}

export default function FixedInfiniteCarousel({ testimonials }: FixedInfiniteCarouselProps) {
  const CARD_WIDTH = 320
  const GAP = 24
  const STEP = CARD_WIDTH + GAP
  
  // Create tripled array for infinite scrolling: [Set1, Set2, Set3]
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const singleSetLength = testimonials.length // 5 cards per set
  
  // Start at index 0, but transform will position us at middle set
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Calculate transform - offset by singleSetLength to show middle set initially
  const transformX = -(currentIndex + singleSetLength) * STEP

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1
        
        // When we reach the end of the middle set, reset to beginning
        if (nextIndex >= singleSetLength) {
          setTimeout(() => {
            setIsTransitioning(false)
            setCurrentIndex(0) // Reset to start
            setTimeout(() => setIsTransitioning(true), 50)
          }, 500)
        }
        
        return nextIndex
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, singleSetLength])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex - 1
      
      // If going below 0, reset to end of set
      if (nextIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(singleSetLength - 1) // Reset to end
          setTimeout(() => setIsTransitioning(true), 50)
        }, 500)
      }
      
      return nextIndex
    })
    
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1
      
      // If reaching end of set, reset to beginning
      if (nextIndex >= singleSetLength) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(0) // Reset to start
          setTimeout(() => setIsTransitioning(true), 50)
        }, 500)
      }
      
      return nextIndex
    })
    
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto',
      minHeight: '500px',
      marginTop: '60px',
      overflow: 'hidden'
    }}>
      {/* Testimonial List with Transform */}
      <ul 
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          transform: `translateX(${transformX}px)`,
          transition: isTransitioning ? 'transform 0.5s ease-out' : 'none',
          cursor: 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          width: `${extendedTestimonials.length * STEP}px`
        }}
      >
        {extendedTestimonials.map((testimonial, i) => (
          <li 
            key={`${testimonial.id}-${Math.floor(i / singleSetLength)}`}
            style={{ 
              flexShrink: 0,
              display: 'block'
            }}
          >
            <div 
              style={{
                background: 'rgb(255, 255, 255)',
                borderRadius: '54px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: `${CARD_WIDTH}px`,
                height: '400px',
                flexShrink: 0,
                userSelect: 'none',
                overflow: 'hidden'
              }}
            >
              {/* Star Rating */}
              <div style={{ marginBottom: '20px' }}>
                <svg width="154" height="26" viewBox="0 0 154 26" fill="none">
                  <g>
                    <path d="M13 1L15.09 6.26L21 7.27L17 11.14L18.18 17.02L13 14.77L7.82 17.02L9 11.14L5 7.27L10.91 6.26L13 1Z" fill="#FFBC3A"/>
                    <path d="M44 1L46.09 6.26L52 7.27L48 11.14L49.18 17.02L44 14.77L38.82 17.02L40 11.14L36 7.27L41.91 6.26L44 1Z" fill="#FFBC3A"/>
                    <path d="M75 1L77.09 6.26L83 7.27L79 11.14L80.18 17.02L75 14.77L69.82 17.02L71 11.14L67 7.27L72.91 6.26L75 1Z" fill="#FFBC3A"/>
                    <path d="M106 1L108.09 6.26L114 7.27L110 11.14L111.18 17.02L106 14.77L100.82 17.02L102 11.14L98 7.27L103.91 6.26L106 1Z" fill="#FFBC3A"/>
                    <path d="M137 1L139.09 6.26L145 7.27L141 11.14L142.18 17.02L137 14.77L131.82 17.02L133 11.14L129 7.27L134.91 6.26L137 1Z" fill="#FFBC3A"/>
                  </g>
                </svg>
              </div>
              
              {/* Testimonial Text */}
              <p 
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '16px',
                  color: 'rgb(24, 24, 24)',
                  lineHeight: '1.5',
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                {testimonial.text}
              </p>
              
              {/* Author Section */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '100%',
                    objectFit: 'cover'
                  }}
                />
                <p 
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgb(24, 24, 24)'
                  }}
                >
                  {testimonial.name}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Navigation Controls */}
      <div 
        style={{
          position: 'absolute',
          top: '-40px',
          right: '0',
          display: 'flex',
          gap: '10px',
          zIndex: 10
        }}
      >
        <button
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '40px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={handlePrevious}
        >
          <img 
            src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
            alt="Previous"
            style={{ width: '16px', height: '16px' }}
          />
        </button>
        
        <button
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '40px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={handleNext}
        >
          <img 
            src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
            alt="Next"
            style={{ width: '16px', height: '16px' }}
          />
        </button>
      </div>
    </div>
  )
}
