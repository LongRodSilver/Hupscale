'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import BaseImage from "@/components/BaseImage"

// Helper function to get proper image path for GitHub Pages
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Hupscale' : ''
  return `${basePath}${path}`
}

// Image constants from Figma - Updated with exact Figma assets
const imgVideo = "/fe540649cf394e58a3b8ab82969a56c8986eabd0.png";
const imgImage = "/ca16dd70619f6181cdc0736e25281ce5ce01a00f.png";
const imgImage1 = "/9f9c6ec5cd42f0de2ce9daa8177aea3ffbd1c251.png";
const imgImage2 = "/60e78bf03c5763350f3f59eb986b8f1161881bf8.png";
const imgImage15 = "/90b0d00cdb8d93a4639e55a1c4c931e564f43944.png";

// Exact Figma icon assets with yellow circular backgrounds
const imgVector = "/81417d56ddb0e91c48261e33fa79e8836ffe91fb.svg";
const imgGroup = "/ddb0f713051b1968eb5b31559b96b90e0d5b8269.svg";
const imgGroup1 = "/247fdaea7f0190f36fe3725ca7f53bfbbf32e6dd.svg";
const imgGroup2 = "/f302ba4a760693ecef74be423376db6cbfdcdd8b.svg";
const imgGroup3 = "/d0ddeba688dce871000a2f59380399df9f722106.svg";
const imgGroup4 = "/97bf03cf831983789e546c82b209089c2e88c5d4.svg";
const imgGroup5 = "/19b982bde308c54c36c8b1041c97ddacad9e504f.svg";
const imgGroup6 = "/2628b9befc9bfb78ab53b4208d27350d2c3c79b0.svg";
const imgGroup7 = "/87e17e7ac1aac184f78d55c1bae380d352574d1e.svg";
const imgGroup8 = "/413721b31b56ea1b3c4a7cfe47ea585c51af8dd7.svg";
const imgGroup9 = "/dac0790b5695b094e9224eaf2e3e8618c2352bff.svg";
const imgGroup10 = "/db2269603e19b2893ac9b7f4b68e0def59298972.svg";
const imgGroup11 = "/1d4bc412bcf41351946fd6762cb511d557e44ddd.svg";
const imgGroup12 = "/b11a2b22ff9f4ab6e12557d4b40dfdd0e7d1d50c.svg";
const imgGroup13 = "/ec7e36d90074dcb2987757da53887cf07309485c.svg";
const imgGroup14 = "/cbaba1434d448391a98b32934ddbef4a6bd4c3f9.svg";
const imgGroup15 = "/778292292843c35f3ccd007069f4bfa68a27e3f0.svg";
const imgGroup16 = "/5bb61d9240d8a6618426ce2fdcd073a203bb1899.svg";
const imgGroup17 = "/ab3cb107a656ec2efc0e2aa893521b21c5dc0f95.svg";
const imgGroup18 = "/a055e9a0312f2cada01d3d71c58169355ad7d8be.svg";

// Correct icons from Figma icons page (exact matches from node 12-1880)
const imgIconMotorsport = "/247fdaea7f0190f36fe3725ca7f53bfbbf32e6dd.svg";
const imgIconContentCreators = "/d0ddeba688dce871000a2f59380399df9f722106.svg";
const imgIconGolfAthletes = "/19b982bde308c54c36c8b1041c97ddacad9e504f.svg";
const imgIconSoccerTeams = "/2628b9befc9bfb78ab53b4208d27350d2c3c79b0.svg";
const imgIconPersonalBrand = "/dac0790b5695b094e9224eaf2e3e8618c2352bff.svg";
const imgIconRealEstate = "/b11a2b22ff9f4ab6e12557d4b40dfdd0e7d1d50c.svg";
const imgIconModels = "/cbaba1434d448391a98b32934ddbef4a6bd4c3f9.svg";
const imgIconInfluencers = "/413721b31b56ea1b3c4a7cfe47ea585c51af8dd7.svg";
const imgIconCarRentals = "/5bb61d9240d8a6618426ce2fdcd073a203bb1899.svg";
const imgIconMedical = "/a055e9a0312f2cada01d3d71c58169355ad7d8be.svg";

// Service card data
const serviceCards = {
  'Social Media': {
    backgroundImage: '/4e74ec9b8a2bccfe99d73407a423b8bc34be4d99.png',
    title: 'Social media',
    content: [
      {
        label: 'Boost AI:',
        description: ' Hupscale helps you upscale your content — smarter reach, more freedom.'
      },
      {
        label: 'Engagement Groups:',
        description: ' Upscale your community with Hupscale — connect, grow, repeat.'
      },
      {
        label: 'Community Manager:',
        description: ' Your life is offline. Hupscale keeps your presence upscale — always on point.'
      }
    ]
  },
  'Website': {
    backgroundImage: '/website-bg.png',
    title: 'Website',
    content: [
      {
        label: 'Landing Page:',
        description: ' Perfect for course sale, subscription boosts, early projects needing idea validation.'
      },
      {
        label: 'Corporative web:',
        description: ' recommended for businesses seeking analytics measurement, SEO strategy, and Google visibility.'
      },
      {
        label: 'E-commerce:',
        description: ' Suggested for companies with validated products and internal web management capabilities.'
      }
    ]
  },
  'Design': {
    backgroundImage: '/design-bg.png',
    title: 'Design',
    content: [
      {
        label: 'Brand Identity:',
        description: ' Complete visual identity creation including logo, colors, and brand guidelines.'
      },
      {
        label: 'UI/UX Design:',
        description: ' User-centered design approach for optimal user experience and interface design.'
      },
      {
        label: 'Print Design:',
        description: ' Professional print materials including brochures, business cards, and marketing collateral.'
      }
    ]
  },
  'Press': {
    backgroundImage: '/press-bg.png',
    title: 'Press',
    content: [
      {
        label: 'Media Relations:',
        description: ' Strategic media outreach and relationship building with key industry publications.'
      },
      {
        label: 'Press Releases:',
        description: ' Professional press release writing and distribution to relevant media outlets.'
      },
      {
        label: 'Crisis Management:',
        description: ' Proactive crisis communication strategies and reputation management services.'
      }
    ]
  }
};

export default function Home() {
  const [activeService, setActiveService] = useState('Social Media');
  const [isAnimating, setIsAnimating] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FAQ Data Array
  const faqs = [
    {
      q: "Why choose Hupscale?",
      a: "At Hupscale, we feel that — it's chaos out there to grow on social. So, we are here to help. We are more than a marketing agency, we are your growth partners. Our tactics are designed to be scalable for new or advanced developers alike. We provide results, 1:1 support and great affection. Let's grow together."
    },
    {
      q: "Why should I grow?",
      a: "You might think it is very easy because you will get more followers, however this must be about growing a community that loves what do. Growth is important for anything you do, whether that be a small business or creator or sharing your message and connecting with new people. And being the center of attention in social will also unlock new opportunities for you and thus, collaboration with others. When you can flourish, why be small?"
    },
    {
      q: "What kind of guarantees do I have?",
      a: "We believe in what we do and the results we achieve. We won't lie to you—no one can guarantee you'll become famous overnight, but we'll be with you every step of the way, tweaking strategies as needed to keep you on track for real progress. Our success is measured by your satisfied smile, so we won't stop until you're happy with the results."
    },
    {
      q: "What information do I need to provide?",
      a: "We only require the essential information that any agency might need, such as your target audience, your current audience, your goals, and how we can help you achieve them. Hupscale or any member of our staff will never ask for your username or password."
    }
  ];

  // TESTIMONIALS CAROUSEL - 50 CARD INFINITE SCROLL IMPLEMENTATION
  // Default testimonials data array with exactly 5 unique testimonials - EACH WITH THEIR OWN LOCAL PNG
  const defaultTestimonials = [
    {
      id: 1,
      name: "Jake W.",
      image: "/jake-w-profile.png",
      text: "Working with Hupscale has been a game-changer! My Instagram went from a few hundred followers to over 10k in just a couple of months. The engagement is off the charts too. If you're serious about growing your social media, these guys are the real deal!"
    },
    {
      id: 2,
      name: "Emily R.",
      image: "/Emily-r-profile.png",
      text: "I had struggled to develop a clear online presence as a small business owner. Hupscale not only increased that visibility but actually connected me with my customer base in a way I never had before. My sales went through the roof. So worth it!"
    },
    {
      id: 3,
      name: "Michael L.",
      image: "/Michael-l-profile.png",
      text: "I've always had trouble finding the right strategy to make my brand pop on social media. Working with Hupscale, however, has brought my business to another level. Their personalized approach is what makes them stand out. Recommended!"
    },
    {
      id: 4,
      name: "Sarah H.",
      image: "/Sarah-h-profile.png",
      text: "I appreciate Hupscale's dedication to their customers and, truly, they know what they are doing in the area of social media marketing. Finally, my professional profile has the visibility it's been asking for, and my followers are actually engaging with my content now. Kudos to the Hupscale team!"
    },
    {
      id: 5,
      name: "Chris M.",
      image: "/chris-m-profile.png",
      text: "Hupscale has played a key role in the success of my new venture. They haven't just helped grow my followers but taught me how to manage my social media like a pro. The team is super creative, professional, and always there for you when you need them. Couldn't be happier with the results!"
    }
  ]
  
  const CARD_WIDTH = 400
  const GAP = 24
  const STEP = CARD_WIDTH + GAP // 424px per card
  // NATURAL VIEWPORT EDGE CUTTING - No artificial container constraints
  
  // CREATE EXACTLY 50 TESTIMONIAL CARDS (10 SETS OF 5)
  const createInfiniteArray = () => {
    const baseTestimonials = [...defaultTestimonials] // 5 cards
    const infiniteArray = []
    for (let i = 0; i < 10; i++) { // Repeat 10 times = 50 cards total
      infiniteArray.push(...baseTestimonials.map(t => ({...t, id: `${t.id}-set${i}` })))
    }
    return infiniteArray
  }
  const infiniteTestimonials = createInfiniteArray()
  
  const [currentIndex, setCurrentIndex] = useState(20) // Start at card 20 (middle)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // NATURAL VIEWPORT EDGE CUTTING - Center 3 cards, let viewport cut the edges naturally
  const translateX = -((currentIndex - 0.5) * STEP)

  // Automatic rotation with boundary resets
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        let nextIndex = prevIndex + 1
        
        // When index > 35: jump to index - 25
        if (nextIndex > 35) {
          nextIndex = nextIndex - 25
        }
        
        return nextIndex
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Left arrow navigation with boundary reset
  const handlePrevious = () => {
    setIsAutoPlaying(false) // Pause auto-rotation
    
    setCurrentIndex(prevIndex => {
      let nextIndex = prevIndex - 1
      
      // When index < 10: jump to index + 25
      if (nextIndex < 10) {
        nextIndex = nextIndex + 25
      }
      
      return nextIndex
    })
    
    // Resume auto-rotation after 4 seconds
    setTimeout(() => setIsAutoPlaying(true), 4000)
  }

  // Right arrow navigation with boundary reset
  const handleNext = () => {
    setIsAutoPlaying(false) // Pause auto-rotation
    
    setCurrentIndex(prevIndex => {
      let nextIndex = prevIndex + 1
      
      // When index > 35: jump to index - 25
      if (nextIndex > 35) {
        nextIndex = nextIndex - 25
      }
      
      return nextIndex
    })
    
    // Resume auto-rotation after 4 seconds
    setTimeout(() => setIsAutoPlaying(true), 4000)
  }

  // Handle service change with animation
  const handleServiceChange = (service: string) => {
    if (service !== activeService) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveService(service);
        setIsAnimating(false);
      }, 200); // Half of the animation duration
    }
  };


  // Simple Scroll Animation Implementation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Global CSS Reset */
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: white !important;
        overflow: visible !important;
      }
      
      /* OVERFLOW DEBUG - Force all elements to visible */
      html, body, * {
        overflow: visible !important;
      }
      
      /* SURGICAL OVERFLOW FIX - Minimal addition */
      body {
        overflow-x: hidden !important;
      }
      .sticky-section {
        width: 100vw !important;
        max-width: 100vw !important;
      }
      
      .scroll-container {
        overflow: visible !important;
        margin: 0 !important;
        padding: 0 !important;
        background-color: white !important;
      }
      
      /* 6-SECTION STICKY TRACK - MATCHING ORIGINAL */
      .sticky-section {
        position: sticky;
        top: 0;
        height: 100vh;
        width: 100%;
        z-index: 1;
      }
      
      .sticky-section:nth-child(1) { z-index: 1; } /* Hero - lowest */
      .sticky-section:nth-child(2) { z-index: 2; } /* What is Hupscale */
      .sticky-section:nth-child(3) { z-index: 3; } /* What we do */
      .sticky-section:nth-child(4) { z-index: 4; } /* Idea to Execution */
      .sticky-section:nth-child(5) { z-index: 5; } /* Testimonials */
      .sticky-section:nth-child(6) { z-index: 6; } /* Interaction - highest sticky */
      
      /* Avatar circular styling */
      .avatar-circular {
        border-radius: 50% !important;
        overflow: hidden !important;
        display: block !important;
      }
      
      /* Footer styling */
      footer {
        position: relative !important;
        z-index: 100 !important;
        margin: 0 !important;
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
      }
      
      /* Navigation - Highest priority z-index */
      nav { 
        z-index: 9999 !important; 
        position: fixed !important;
        top: 1rem !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
      }
      
      /* Mobile menu overlay - High z-index */
      .mobile-menu-overlay {
        z-index: 9998 !important;
      }
      
      /* Video container - Ensure it stays below navigation */
      .hero-video-container {
        z-index: 1 !important;
        position: relative !important;
      }
      
      /* Mobile video optimization - Prevent stretching and pixelation */
      @media (max-width: 640px) {
        .hero-video {
          object-fit: cover !important;
          object-position: center center !important;
          transform: scale(1.01) !important; /* Slight scale to prevent edge artifacts */
          filter: contrast(1.05) brightness(1.02) !important; /* Enhance mobile video quality */
        }
        
        /* Ensure proper viewport handling on mobile */
        .hero-video-container {
          width: 100vw !important;
          height: 100vh !important;
          overflow: hidden !important;
        }
      }
      
      /* Tablet and small desktop optimization */
      @media (min-width: 641px) and (max-width: 1024px) {
        .hero-video {
          object-fit: cover !important;
          object-position: center center !important;
        }
      }
      
      /* Mobile landscape orientation */
      @media (max-width: 768px) and (orientation: landscape) {
        .hero-video {
          object-fit: cover !important;
          object-position: center center !important;
          width: 100% !important;
          height: 100% !important;
        }
      }
      
      /* Prevent video from interfering with touch events on mobile */
      @media (max-width: 768px) {
        .hero-video {
          pointer-events: none !important;
        }
      }
      
      /* High DPI mobile screens */
      @media (max-width: 640px) and (-webkit-min-device-pixel-ratio: 2) {
        .hero-video {
          image-rendering: -webkit-optimize-contrast !important;
          image-rendering: crisp-edges !important;
        }
      }
      
      /* Ensure navigation stays visible on all mobile devices */
      @media (max-width: 768px) {
        nav {
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px) !important;
          background-color: rgba(244, 244, 244, 0.95) !important;
        }
      }
    `;
    document.head.appendChild(style);

    // No scroll animation needed - using 5-section sticky track

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="scroll-container bg-white" style={{ 
      overflow: 'visible', 
      margin: 0, 
      padding: 0, 
      backgroundColor: 'white' 
    }}>
      {/* Responsive navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-fit px-4" style={{
        backgroundColor: 'rgb(244, 244, 244)',
        borderRadius: '206px',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
        border: '1px solid rgb(35, 35, 35)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 9999
      }}>
        
        {/* HUPSCALE Logo - Responsive */}
        <div className="flex items-center text-sm sm:text-lg font-black text-[rgb(35,35,35)] font-inter tracking-wide mr-4 sm:mr-8">
          HUPSC<span style={{ color: '#007B79' }}>A</span>LE
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center justify-center w-8 h-8 text-[rgb(35,35,35)]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          {/* Benefits */}
          <button
            onClick={() => {
              // Simple scroll with timing that works with sticky animations
              setTimeout(() => {
                window.scrollTo({ top: window.innerHeight * 1, behavior: 'smooth' });
              }, 100);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgb(35, 35, 35)',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              borderRadius: '100px',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgb(0, 176, 129)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            }}
          >
            Benefits
          </button>

          {/* Services */}
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
              }, 100);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgb(35, 35, 35)',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              borderRadius: '100px',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgb(0, 176, 129)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            }}
          >
            Services
          </button>

          {/* Testimonials */}
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' });
              }, 100);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgb(35, 35, 35)',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              borderRadius: '100px',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgb(0, 176, 129)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            }}
          >
            Testimonials
          </button>

          {/* FAQ's */}
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: window.innerHeight * 6, behavior: 'smooth' });
              }, 100);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgb(35, 35, 35)',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              borderRadius: '100px',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgb(0, 176, 129)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            }}
          >
            FAQ's
          </button>
        </div>
        
        {/* Get Started Button - Responsive */}
        <button
          className="hidden md:block bg-[rgb(0,123,121)] text-[rgb(5,5,5)] border border-[rgb(5,5,5)] rounded-full px-4 lg:px-5 py-2 lg:py-3 text-xs lg:text-sm font-medium font-inter cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap ml-4 lg:ml-6"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 100);
          }}
        >
          Get started
        </button>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay md:hidden fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="fixed top-20 left-4 right-4 bg-white rounded-2xl p-6 shadow-xl max-w-[calc(100vw-32px)]" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col space-y-4">
                <button
                  className="text-left py-2 px-4 text-[rgb(35,35,35)] hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      window.scrollTo({ top: window.innerHeight * 1, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Benefits
                </button>
                <button
                  className="text-left py-2 px-4 text-[rgb(35,35,35)] hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Services
                </button>
                <button
                  className="text-left py-2 px-4 text-[rgb(35,35,35)] hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Testimonials
                </button>
                <button
                  className="text-left py-2 px-4 text-[rgb(35,35,35)] hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      window.scrollTo({ top: window.innerHeight * 6, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  FAQ's
                </button>
                <button
                  className="bg-[rgb(0,123,121)] text-[rgb(5,5,5)] border border-[rgb(5,5,5)] rounded-full px-6 py-3 text-sm font-medium text-center mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
        
      </nav>

      {/* Section 1: Hero - Base layer */}
      <section className="sticky-section relative w-full h-screen overflow-hidden" style={{position: 'sticky', top: 0, height: '100vh', width: '100%', zIndex: 1, backgroundColor: '#1a1a1a'}}>
        {/* Video Container with Mobile Optimization */}
        <div className="hero-video-container absolute inset-0 w-full h-full">
          <video 
            className="hero-video absolute inset-0 w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              maxWidth: 'none',
              maxHeight: 'none'
            }}
            src={getImagePath("/HUPSCALE_Final.mp4")}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={getImagePath("/video-poster.jpg")}
          />
          
          {/* Mobile Video Quality Enhancement Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-10 sm:bg-opacity-0 pointer-events-none" />
        </div>
      </section>

      {/* Section 2: What is Hupscale - Layer 2 */}
      <section id="benefits" className="sticky-section min-h-screen bg-[#007B79] py-16 pl-4 sm:pl-8 lg:pl-16" style={{position: 'sticky', top: 0, height: '100vh', width: '100%', zIndex: 2}}>
        <div className="flex w-full h-full flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* What is Hupscale - Left side content */}
        <div className="flex-1 max-w-2xl">
          {/* Heading - Responsive */}
          <div className="mb-6">
            <h2 className="font-inter font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#efefef]">
              WHAT IS
            </h2>
            <h2 className="font-inter font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-[#181818]">
              Hupscale?
            </h2>
          </div>
          
          {/* Description - Responsive */}
          <div className="max-w-md">
            <p className="font-onest text-lg sm:text-xl lg:text-2xl leading-relaxed text-[#181818]">
              At Hupscale, we craft powerful personal brands through strategic clarity, deep insight, and unwavering dedication — then amplify businesses with the same precision, turning vision into influence.
            </p>
          </div>
        </div>

        {/* We work with - Dark container responsive */}
        <div className="bg-[#181818] flex-1 w-full rounded-tl-[60px] rounded-bl-[60px] p-8 lg:p-12 xl:p-16">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* We work with heading - Responsive */}
            <div>
              <h3 className="font-inter font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#efefef]">
                <span>We </span>
                <span className="text-[#007B79]">work </span>
                <span>with</span>
                <span className="text-[#007B79]">...</span>
              </h3>
            </div>
            
            {/* Industry categories - Two Column Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {/* LEFT COLUMN */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Motorsport" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-motorsport.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Motorsport</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Content creators" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-content.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Content creators</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Golf athletes" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-golf.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Golf athletes</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Soccer teams" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-soccer.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Soccer teams</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Personal brand" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-personal.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Personal brand</span>
                </div>
              </div>
              
              {/* RIGHT COLUMN */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Real estate" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-real.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Real estate</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Models" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-models.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Models</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Influencers" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-influencer.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Influencers</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Car rentals" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-car.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Car rentals</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <img alt="Medical" className="w-8 h-8 flex-shrink-0" src={getImagePath("/svg-medical.svg")} />
                  <span className="font-onest text-lg text-[#efefef]">Medical</span>
                </div>
              </div>
            </div>
            
            {/* Social Media Logos - Responsive */}
            <div className="flex items-center gap-4 lg:gap-5 mt-8 lg:mt-10">
              {/* Facebook Logo */}
              <img 
                src={getImagePath("/Facebook.png")} 
                alt="Facebook" 
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
              
              {/* Instagram Logo */}
              <img 
                src={getImagePath("/Instagram.png")} 
                alt="Instagram" 
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
              
              {/* YouTube Logo */}
              <img 
                src={getImagePath("/YouTube.png")} 
                alt="YouTube" 
                className="h-6 sm:h-7 lg:h-8 w-auto"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Section 3: What we do - Layer 3 */}
      <section id="services" className="sticky-section min-h-screen bg-[#181818] py-16 px-4 sm:px-8 lg:px-16" style={{position: 'sticky', top: 0, height: '100vh', width: '100%', zIndex: 3}}>
        <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Content - Responsive */}
            <div className="text-white flex-1 max-w-2xl text-center lg:text-left">
              <h2 className="font-black leading-tight mb-5 text-white">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">
                  WHAT
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase">
                  WE <span style={{ color: '#007B79' }}>DO</span>?
                </div>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white mb-2 font-onest">
                Digital Services
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 lg:mb-12 font-onest">
                <span className="text-[#007B79]">human</span> experiences
              </p>
              
              {/* 2x2 Button Grid - Responsive */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-8 max-w-sm mx-auto lg:mx-0">
                  {/* Social Media Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 flex justify-center items-center rounded-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium font-inter cursor-pointer ${
                      activeService === 'Social Media' 
                        ? 'bg-[#EFEFEF] text-[#00B081] shadow-lg' 
                        : 'bg-[#00B081] text-black hover:shadow-md'
                    }`}
                    onClick={() => handleServiceChange('Social Media')}
                  >
                    Social Media
                  </button>

                  {/* Website Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 flex justify-center items-center rounded-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium font-inter cursor-pointer ${
                      activeService === 'Website' 
                        ? 'bg-[#EFEFEF] text-[#00B081] shadow-lg' 
                        : 'bg-[#00B081] text-black hover:shadow-md'
                    }`}
                    onClick={() => handleServiceChange('Website')}
                  >
                    Website
                  </button>

                  {/* Design Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 flex justify-center items-center rounded-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium font-inter cursor-pointer ${
                      activeService === 'Design' 
                        ? 'bg-[#EFEFEF] text-[#00B081] shadow-lg' 
                        : 'bg-[#00B081] text-black hover:shadow-md'
                    }`}
                    onClick={() => handleServiceChange('Design')}
                  >
                    Design
                  </button>

                  {/* Press Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 flex justify-center items-center rounded-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium font-inter cursor-pointer ${
                      activeService === 'Press' 
                        ? 'bg-[#EFEFEF] text-[#00B081] shadow-lg' 
                        : 'bg-[#00B081] text-black hover:shadow-md'
                    }`}
                    onClick={() => handleServiceChange('Press')}
                  >
                    Press
                  </button>
              </div>
            </div>
            
            {/* Right Content - Dynamic Service Card - Responsive */}
            <Card 
              key={activeService}
              className={`border-none shadow-lg transition-all duration-700 ease-out flex-1 max-w-2xl w-full ${isAnimating ? 'animate-slide-down' : ''}`}
              style={{
                minHeight: '400px',
                height: 'auto',
                borderRadius: '40px',
                backgroundImage: `url("${getImagePath(serviceCards[activeService as keyof typeof serviceCards]?.backgroundImage || '')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#f0f0f0',
                transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
                opacity: isAnimating ? 0 : 1
              }}
            >
              <CardContent className="relative h-full p-6 sm:p-8 lg:p-12">
                {/* Service Title Pill - Responsive */}
                <div className="bg-[#00BCBE] text-[#232323] font-inter font-black rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight mb-6 lg:mb-8 inline-block transition-all duration-500 ease-out">
                  {serviceCards[activeService as keyof typeof serviceCards]?.title}
                </div>
                
                {/* Dynamic Content - Responsive */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {serviceCards[activeService as keyof typeof serviceCards]?.content?.map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-start transition-all duration-300 ease-out"
                      style={{
                        transitionDelay: `${i * 100}ms`
                      }}
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#007B79] rounded-full mr-3 sm:mr-4 mt-1.5 flex-shrink-0"></div>
                      <div className="font-onest text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-[#181818] max-w-full">
                        <span className="font-bold">{item.label}</span>
                        <span className="font-normal">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
      </section>

      {/* Section 4: Idea to Execution - Layer 4 */}
      <section className="sticky-section min-h-screen bg-[#F5F5F5] py-16 px-4 sm:px-8 lg:px-16" style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: 4,
        backgroundImage: `url('${getImagePath('/gradient-background-teal.png')}')`
      }}>
        <div className="max-w-6xl mx-auto">
        <div className="bg-[#181818] rounded-3xl lg:rounded-[84px] p-8 sm:p-12 lg:p-16 xl:p-20 shadow-2xl flex flex-col items-center gap-8 lg:gap-12">
          {/* Main Title - Responsive */}
          <div className="text-center">
            <h2 className="font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#EFEFEF]">
              IDEA TO <span style={{ color: '#007B79' }}>EXECUTION</span>
            </h2>
          </div>

          {/* Process Steps Container - Responsive */}
          <div className="w-full">
            {/* Desktop Process Steps Row */}
            <div className="hidden lg:flex items-start justify-between w-full max-w-5xl mx-auto mb-12">
              {/* Step 1: We listen */}
              <div className="flex flex-col items-start flex-1 max-w-xs">
                <h3 className="font-black text-2xl lg:text-3xl xl:text-4xl mb-6 lg:mb-8 whitespace-nowrap">
                  <span style={{ color: '#007B79', textTransform: 'uppercase' }}>WE</span> <span style={{ color: '#EFEFEF' }}>LISTEN</span>
                </h3>
                <p className="font-onest text-base lg:text-lg xl:text-xl leading-relaxed text-[#EFEFEF] max-w-full">
                  We engage in strategic listening capturing your vision & the expectations of your audience.
                </p>
              </div>

              {/* Step 2: We analyze */}
              <div className="flex flex-col items-start flex-1 max-w-xs">
                <h3 className="font-black text-2xl lg:text-3xl xl:text-4xl mb-6 lg:mb-8 whitespace-nowrap">
                  <span style={{ color: '#007B79', textTransform: 'uppercase' }}>WE</span> <span style={{ color: '#EFEFEF' }}>ANALYZE</span>
                </h3>
                <p className="font-onest text-base lg:text-lg xl:text-xl leading-relaxed text-[#EFEFEF] max-w-full">
                  We explore and assess tailored solutions, weighing impact & alignment.
                </p>
              </div>

              {/* Step 3: We create */}
              <div className="flex flex-col items-start flex-1 max-w-xs">
                <h3 className="font-black text-2xl lg:text-3xl xl:text-4xl mb-6 lg:mb-8 whitespace-nowrap">
                  <span style={{ color: '#007B79', textTransform: 'uppercase' }}>WE</span> <span style={{ color: '#EFEFEF' }}>CREATE</span>
                </h3>
                <p className="font-onest text-base lg:text-lg xl:text-xl leading-relaxed text-[#EFEFEF] max-w-full">
                  We design with purpose crafting elevated experiences that resonate.
                </p>
              </div>
            </div>

            {/* Desktop Connector Container */}
            <div className="hidden lg:flex justify-center items-center gap-24 xl:gap-32 mt-6 mb-12">
              {/* Curved Arrow 1 - Exact SVG */}
              <div style={{ width: '245px', height: '68px', flexShrink: 0 }}>
                <svg width="245" height="68" viewBox="0 0 245 68" fill="none">
                  <path d="M240.597 4.26153C233.842 -3.70832 225.193 4.88885 225.193 4.88885C225.193 4.88885 184.121 37.752 122.505 38.7073C60.875 37.7378 19.8169 4.88885 19.8169 4.88885C19.8169 4.88885 11.1539 -3.70832 4.41294 4.26153C-4.04106 14.2417 -1.95207 28.0856 24.9419 43.9682C69.2319 70.1162 117.449 68.8758 118.062 68.8616C119.301 68.8901 175.973 70.0021 220.054 43.9682C246.948 28.0856 249.037 14.2417 240.597 4.26153Z" fill="#00BCBE"/>
                </svg>
              </div>

              {/* Curved Arrow 2 - Exact SVG */}
              <div style={{ width: '245px', height: '68px', flexShrink: 0 }}>
                <svg width="245" height="68" viewBox="0 0 245 68" fill="none">
                  <path d="M240.597 4.26153C233.842 -3.70832 225.193 4.88885 225.193 4.88885C225.193 4.88885 184.121 37.752 122.505 38.7073C60.875 37.7378 19.8169 4.88885 19.8169 4.88885C19.8169 4.88885 11.1539 -3.70832 4.41294 4.26153C-4.04106 14.2417 -1.95207 28.0856 24.9419 43.9682C69.2319 70.1162 117.449 68.8758 118.062 68.8616C119.301 68.8901 175.973 70.0021 220.054 43.9682C246.948 28.0856 249.037 14.2417 240.597 4.26153Z" fill="#00BCBE"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center space-y-8 sm:space-y-12 w-full">
            {/* Mobile Step 1 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <h3 className="text-xl sm:text-2xl font-black mb-4">
                <span style={{ color: '#007B79' }}>WE</span>&nbsp;<span style={{ color: '#EFEFEF' }}>LISTEN</span>
              </h3>
              <p className="text-sm sm:text-base text-[#EFEFEF] font-onest leading-relaxed">
                We engage in strategic listening capturing your vision & the expectations of your audience.
              </p>
            </div>

            {/* Mobile Arrow 1 */}
            <div className="transform rotate-90">
              <svg width="40" height="30" viewBox="0 0 40 30" className="sm:w-16 sm:h-12">
                <path 
                  d="M5 25 Q 20 5, 35 25" 
                  stroke="#00BCBE" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Mobile Step 2 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <h3 className="text-xl sm:text-2xl font-black mb-4">
                <span style={{ color: '#007B79' }}>WE</span>&nbsp;<span style={{ color: '#EFEFEF' }}>ANALYZE</span>
              </h3>
              <p className="text-sm sm:text-base text-[#EFEFEF] font-onest leading-relaxed">
                We explore and assess tailored solutions, weighing impact & alignment.
              </p>
            </div>

            {/* Mobile Arrow 2 */}
            <div className="transform rotate-90">
              <svg width="40" height="30" viewBox="0 0 40 30" className="sm:w-16 sm:h-12">
                <path 
                  d="M5 25 Q 20 5, 35 25" 
                  stroke="#00BCBE" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Mobile Step 3 */}
            <div className="flex flex-col items-center text-center max-w-sm">
              <h3 className="text-xl sm:text-2xl font-black mb-4">
                <span style={{ color: '#007B79' }}>WE</span>&nbsp;<span style={{ color: '#EFEFEF' }}>CREATE</span>
              </h3>
              <p className="text-sm sm:text-base text-[#EFEFEF] font-onest leading-relaxed">
                We design with purpose crafting elevated experiences that resonate.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Section 5: Testimonials - Layer 5 */}
      <section id="testimonials" className="sticky-section min-h-screen bg-[#007B79] pt-6 pb-32 px-4 sm:px-8 lg:px-16" style={{position: 'sticky', top: 0, height: '100vh', width: '100%', zIndex: 5}}>
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-start">
          <div className="w-full flex flex-col items-center gap-6 lg:gap-8">
            {/* Header Section - Responsive */}
            <div className="text-center flex flex-col gap-2 lg:gap-4">
              {/* "Great work" text - Responsive */}
              <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white m-0">
                GREAT WORK
              </p>
              
              {/* "For great people" text - Responsive */}
              <p className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-[rgb(35,35,35)] m-0">
                FOR GREAT PEOPLE
              </p>
              
              {/* Subtext - Responsive */}
              <p className="font-onest text-base sm:text-lg lg:text-xl xl:text-2xl text-center text-[rgb(35,35,35)] mt-4 mb-8 lg:mb-12 max-w-4xl mx-auto">
                Since 2021 <span className="font-bold">we work with incredible clients</span> to create<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>meaningful impact and compelling experiences.
              </p>
            </div>

            {/* Carousel Section - Compact Layout */}
            <div className="w-full mt-2">
              <div className="relative w-full overflow-hidden flex items-center">
              {/* Testimonials Track - Responsive */}
              <div 
                className="flex transition-transform duration-500 ease-out cursor-grab select-none"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(${translateX}px)`,
                  touchAction: 'pan-y',
                  width: `${infiniteTestimonials.length * STEP}px`
                }}
              >
                {infiniteTestimonials.map((testimonial, index) => {
                  return (
                    <div 
                      key={testimonial.id}
                      className="bg-white rounded-3xl lg:rounded-[54px] p-6 flex flex-col justify-between flex-shrink-0 select-none"
                      style={{
                        width: `min(${CARD_WIDTH}px, 90vw)`,
                        height: '420px',
                        maxWidth: '100%'
                      }}
                    >
                      {/* Star Rating - Compact Spacing */}
                      <div className="mb-3">
                        <svg className="w-24 sm:w-32 lg:w-36 xl:w-40 h-auto" viewBox="0 0 154 26" fill="none">
                          <g>
                            <path d="M13 1L15.09 6.26L21 7.27L17 11.14L18.18 17.02L13 14.77L7.82 17.02L9 11.14L5 7.27L10.91 6.26L13 1Z" fill="#00B081"/>
                            <path d="M44 1L46.09 6.26L52 7.27L48 11.14L49.18 17.02L44 14.77L38.82 17.02L40 11.14L36 7.27L41.91 6.26L44 1Z" fill="#00B081"/>
                            <path d="M75 1L77.09 6.26L83 7.27L79 11.14L80.18 17.02L75 14.77L69.82 17.02L71 11.14L67 7.27L72.91 6.26L75 1Z" fill="#00B081"/>
                            <path d="M106 1L108.09 6.26L114 7.27L110 11.14L111.18 17.02L106 14.77L100.82 17.02L102 11.14L98 7.27L103.91 6.26L106 1Z" fill="#00B081"/>
                            <path d="M137 1L139.09 6.26L145 7.27L141 11.14L142.18 17.02L137 14.77L131.82 17.02L133 11.14L129 7.27L134.91 6.26L137 1Z" fill="#00B081"/>
                          </g>
                        </svg>
                      </div>
                      
                      {/* Testimonial Text - Contained Within Card */}
                      <div className="flex-grow flex flex-col justify-between">
                        <p className="font-onest text-sm sm:text-base lg:text-lg text-[rgb(24,24,24)] leading-relaxed mb-4">
                          {testimonial.text}
                        </p>
                        
                        {/* Profile Section - Contained Within Card Boundaries */}
                        <div className="flex items-center gap-3 lg:gap-4">
                          <img 
                            src={getImagePath(testimonial.image)} 
                            alt={testimonial.name} 
                            className="w-16 h-16 aspect-square rounded-full object-cover flex-shrink-0"
                          />
                          <p className="font-onest text-base sm:text-lg lg:text-xl font-bold text-[rgb(24,24,24)]">
                            {testimonial.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation Arrows - Responsive */}
              <div className="absolute -top-12 sm:-top-16 right-0 flex gap-2 sm:gap-3 z-10">
                {/* Left Arrow Button - Responsive */}
                <button
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-200 text-[#EFEFEF]"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </button>
                
                {/* Right Arrow Button - Responsive */}
                <button
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-200 text-[#EFEFEF]"
                  onClick={handleNext}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 6: Interaction - Top layer */}
      <section className="sticky-section min-h-screen w-full flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:px-16 xl:px-24 relative" style={{ 
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: 6,
        backgroundImage: `url(${getImagePath('/interaction-person-teal.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        
        {/* Text content overlay - Responsive */}
        <div className="text-center lg:text-right text-white max-w-2xl">
          <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 lg:mb-5 leading-tight" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            INTERACTION
          </h1>
          <p className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 lg:mb-10 leading-tight" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            into <span style={{ color: '#007B79' }}>BUSINESS.</span>
          </p>
          
          <button className="bg-[#007B79] text-white border-none rounded-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold cursor-pointer uppercase shadow-lg hover:shadow-xl transition-all duration-200">
            Let's Scale
          </button>
        </div>
        
      </section>

      {/* Final sections: Non-sticky */}
      <section id="faq" className="relative z-50 min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8 lg:px-16" style={{backgroundImage: `url(${getImagePath("/answers-section-bg-teal-vectorized.png")})`}}>
        <div className="w-full min-h-screen relative overflow-visible">

        {/* FAQ Container - Responsive */}
        <div className="relative z-10 flex justify-center py-12 lg:py-16 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 overflow-visible">
          
          {/* Main FAQ Container - Responsive */}
          <div className="inline-flex flex-col h-auto w-full max-w-5xl bg-[#007B79] shadow-2xl p-6 sm:p-8 lg:p-12 xl:p-16 mx-auto overflow-visible transition-all duration-300 rounded-3xl lg:rounded-[60px]">

            {/* Title - Responsive */}
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-[rgb(239,239,239)] mb-6 lg:mb-8 leading-tight">
              ANSWERS <span className="text-[rgb(35,35,35)] font-black">YOU NEED</span>
            </h2>

            {/* FAQ Items - Responsive */}
            {faqs.map((item, i) => (
              <div key={i}>
                <div
                  className="flex items-center gap-3 lg:gap-4 cursor-pointer py-2"
                  onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                >
                  {/* Custom Plus/Minus Icon - Responsive */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center relative flex-shrink-0">
                    {/* Horizontal bar (always visible) */}
                    <div className="absolute w-3 sm:w-4 h-0.5 bg-[#232323] rounded-sm" />
                    {/* Vertical bar (hidden when open) */}
                    {openFaqIdx !== i && (
                      <div className="absolute w-0.5 h-3 sm:h-4 bg-[#232323] rounded-sm" />
                    )}
                  </div>
                  <span className="font-onest text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#232323] flex-1">
                    {item.q}
                  </span>
                </div>
                {openFaqIdx === i && item.a && (
                  <div className="font-onest text-base sm:text-lg lg:text-xl xl:text-2xl text-white max-w-full w-full ml-8 sm:ml-12 mt-2 mb-4 lg:mb-6 leading-relaxed break-words">
                    {item.a}
                  </div>
                )}
                <div className="h-px bg-[#232323] w-full my-3 lg:my-4" />
              </div>
            ))}

          </div>
        </div>

        {/* CTA Section - Responsive */}
        <div className="relative z-10 flex flex-col items-center gap-12 lg:gap-16 pt-20 lg:pt-32 pb-20 lg:pb-32">
          
          {/* Main Heading - Responsive */}
          <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#232323] leading-tight uppercase max-w-4xl mx-auto">
            TAKE YOUR ASTEROIDS AND<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>SCALE YOUR VISION
          </h1>
          
          {/* Contact Info Text - Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mt-4 lg:mt-6 mb-6 lg:mb-8 text-center">
            <span className="font-onest text-base sm:text-lg lg:text-xl text-[#232323]">
              you can also contact us directly
            </span>
            <a
              href="mailto:hello@hupscaleagency.com"
              className="font-onest text-base sm:text-lg lg:text-xl text-[#232323] underline hover:no-underline transition-all duration-200"
            >
              hello@hupscaleagency.com
            </a>
          </div>
          
          {/* CTA Button - Responsive */}
          <a 
            href="https://wa.me/qr/ASGK4GMJI7E7P1"
            target="_blank"
            rel="noopener"
            className="bg-[#007B79] rounded-full px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 no-underline inline-block mt-4 lg:mt-6 hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="font-onest text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase tracking-wide">
              Let's Hupscale
            </span>
          </a>
          
        </div>
        </div>
      </section>

      <footer className="relative z-100 bg-[#007B79] px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          
          {/* Left: Copyright - Responsive */}
          <p className="text-base sm:text-lg text-white font-onest font-normal text-center lg:text-left order-3 lg:order-1">
            2025 Hupscale. All rights reserved.
          </p>
          
          {/* Center: Instagram Link with Icon - Responsive */}
          <div className="flex items-center gap-2 sm:gap-3 order-2">
            {/* Instagram Icon */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 17.4 17.4 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 2.6 2.6 0 5.8 0ZM5.6 2C3.61 2 2 3.61 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C16.39 18 18 16.39 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.94 3.5 16.5 4.06 16.5 4.75C16.5 5.44 15.94 6 15.25 6C14.56 6 14 5.44 14 4.75C14 4.06 14.56 3.5 15.25 3.5ZM10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7Z" fill="white"/>
            </svg>
            <a href="https://www.instagram.com/lets.hupscale/" target="_blank" rel="noopener" className="text-base sm:text-lg text-white font-onest font-semibold hover:text-opacity-80 transition-all duration-200">
              Instagram
            </a>
          </div>
          
          {/* Right: Logo + Terms & Privacy - Responsive */}
          <div className="flex flex-col items-center gap-3 lg:gap-4 order-1 lg:order-3">
            {/* HUPSCALE Logo */}
            <div className="text-xl sm:text-2xl font-bold text-white font-inter">
              HUPSCALE
            </div>
            
            {/* Terms & Privacy */}
            <div className="flex items-center gap-4 sm:gap-6 text-white">
              <span className="text-base sm:text-lg font-onest cursor-pointer hover:text-opacity-80 transition-all duration-200">Terms</span>
              <span className="text-base sm:text-lg font-onest cursor-pointer hover:text-opacity-80 transition-all duration-200">Privacy</span>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  )
}
