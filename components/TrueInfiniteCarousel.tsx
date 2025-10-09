'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  image: string
  text: string
}

export default function TrueInfiniteCarousel() {
  // Testimonials data array with exactly 5 unique testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jake W.",
      image: "https://framerusercontent.com/images/NzngQvMRPYbRqsEkKUsxyulHadI.png",
      text: "Working with Growi has been a game-changer! My Instagram went from a few hundred followers to over 10k in just a couple of months. The engagement is off the charts too. If you're serious about growing your social media, these guys are the real deal!"
    },
    {
      id: 2,
      name: "Emily R.",
      image: "https://framerusercontent.com/images/0RXq56D8kY7Vtm8ROpC088Z95hE.png",
      text: "I had struggled to develop a clear online presence as a small business owner. Growi not only increased that visibility but actually connected me with my customer base in a way I never had before. My sales went through the roof. So worth it!"
    },
    {
      id: 3,
      name: "Michael L.",
      image: "https://framerusercontent.com/images/aqRBrBoJ5J2YsaDe45fNA8SoKs.png",
      text: "I've always had trouble finding the right strategy to make my brand pop on social media. Working with Growi, however, has brought my business to another level. Their personalized approach is what makes them stand out. Recommended!"
    },
    {
      id: 4,
      name: "Sarah H.",
      image: "https://framerusercontent.com/images/8p1PLaHdPrvJmrFNVsTtybSo.png",
      text: "I appreciate Growi's dedication to their customers and, truly, they know what they are doing in the area of social media marketing. Finally, my professional profile has the visibility it's been asking for, and my followers are actually engaging with my content now. Kudos to the Growi team!"
    },
    {
      id: 5,
      name: "Chris M.",
      image: "https://framerusercontent.com/images/53bFBBvfLR7X33w6MCwbEax6yY.png",
      text: "Growi has played a key role in the success of my new venture. They haven't just helped grow my followers but taught me how to manage my social media like a pro. The team is super creative, professional, and always there for you when you need them. Couldn't be happier with the results!"
    }
  ]

  const CARD_WIDTH = 320
  const GAP = 24
  const STEP = CARD_WIDTH + GAP // 344px per card
  
  // Generate infinite card array by repeating testimonials 3 times (15 total cards)
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const singleSetLength = testimonials.length // 5 cards per set
  
  const [currentIndex, setCurrentIndex] = useState(singleSetLength) // Start at middle set (index 5)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Calculate translateX to show 3 full cards + 2 partial cards
  // Center the view by offsetting by 1 card width
  const translateX = -(currentIndex * STEP) + CARD_WIDTH

  // Automatic rotation every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1
        
        // When reaching end of middle set (index 10), seamlessly reset to start of middle set (index 5)
        if (nextIndex >= singleSetLength * 2) {
          setTimeout(() => {
            setIsTransitioning(false)
            setCurrentIndex(singleSetLength) // Reset to start of middle set
            setTimeout(() => setIsTransitioning(true), 50)
          }, 500)
        }
        
        return nextIndex
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, singleSetLength])

  // Left arrow navigation (previous card)
  const handlePrevious = () => {
    setIsAutoPlaying(false) // Pause auto-rotation
    
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex - 1
      
      // When reaching start of middle set (index 5), seamlessly reset to end of middle set (index 9)
      if (nextIndex < singleSetLength) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(singleSetLength * 2 - 1) // Reset to end of middle set
          setTimeout(() => setIsTransitioning(true), 50)
        }, 500)
      }
      
      return nextIndex
    })
    
    // Resume auto-rotation after 4 seconds
    setTimeout(() => setIsAutoPlaying(true), 4000)
  }

  // Right arrow navigation (next card)
  const handleNext = () => {
    setIsAutoPlaying(false) // Pause auto-rotation
    
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1
      
      // When reaching end of middle set (index 10), seamlessly reset to start of middle set (index 5)
      if (nextIndex >= singleSetLength * 2) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(singleSetLength) // Reset to start of middle set
          setTimeout(() => setIsTransitioning(true), 50)
        }, 500)
      }
      
      return nextIndex
    })
    
    // Resume auto-rotation after 4 seconds
    setTimeout(() => setIsAutoPlaying(true), 4000)
  }

  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            style={{
              fontFamily: 'Dallas PS Sans Bld, sans-serif',
              fontSize: '68px',
              fontWeight: 700,
              color: '#EFEFEF',
              marginBottom: '20px'
            }}
          >
            For great people
          </h2>
        </div>

        {/* Carousel Container */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: 'auto',
          minHeight: '500px',
          overflow: 'hidden' // Hide cards outside viewport - shows 3 full + 2 partial
        }}>
          {/* Testimonials Track */}
          <div 
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: isTransitioning ? 'transform 0.5s ease-out' : 'none',
              cursor: 'grab',
              touchAction: 'pan-y',
              userSelect: 'none',
              width: `${infiniteTestimonials.length * STEP}px` // Width for all 15 cards
            }}
          >
            {infiniteTestimonials.map((testimonial, i) => (
              <div 
                key={`${testimonial.id}-${Math.floor(i / singleSetLength)}`} // Unique key for each duplicate
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
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* 5-Star Rating */}
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
                    alignItems: 'flex-start',
                    marginBottom: '20px'
                  }}
                >
                  {testimonial.text}
                </p>
                
                {/* Author Section with 64px circular profile image */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #f0f0f0'
                    }}
                  />
                  <p 
                    style={{
                      fontFamily: 'Onest, sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'rgb(24, 24, 24)',
                      margin: 0
                    }}
                  >
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bidirectional Navigation Arrows */}
          <div 
            style={{
              position: 'absolute',
              top: '-60px',
              right: '0',
              display: 'flex',
              gap: '10px',
              zIndex: 10
            }}
          >
            {/* Left Arrow Button */}
            <button
              style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease'
              }}
              onClick={handlePrevious}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              <img 
                src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
                alt="Previous"
                style={{ width: '16px', height: '16px' }}
              />
            </button>
            
            {/* Right Arrow Button */}
            <button
              style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease'
              }}
              onClick={handleNext}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              <img 
                src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                alt="Next"
                style={{ width: '16px', height: '16px' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
