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
  
  const CARD_WIDTH = 320
  const GAP = 24
  const STEP = CARD_WIDTH + GAP // 344px per card
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
      
      .sticky-section:nth-child(2) { z-index: 1; } /* What is Hupscale - lowest first */
      .sticky-section:nth-child(3) { z-index: 2; } /* What we do */
      .sticky-section:nth-child(4) { z-index: 3; } /* Idea to Execution */
      .sticky-section:nth-child(5) { z-index: 4; } /* Testimonials */
      .sticky-section:nth-child(6) { z-index: 5; } /* Interaction - highest sticky */
      
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
      
      nav { z-index: 50 !important; }
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
      {/* Pixel-perfect Framer navigation recreation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50" style={{
        backgroundColor: 'rgb(244, 244, 244)', // Exact original color
        borderRadius: '206px', // Original border radius
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 'fit-content',
        margin: '0 auto',
        border: '1px solid rgb(35, 35, 35)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        
        {/* HUPSCALE Logo - Modified with teal A */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px',
          fontWeight: '900',
          color: 'rgb(35, 35, 35)',
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '0.5px',
          marginRight: '32px'
        }}>
          HUPSC<span style={{ color: '#007B79' }}>A</span>LE
        </div>
        
        {/* Navigation that preserves sticky animations */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flex: '1',
          justifyContent: 'center'
        }}>
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
        
        {/* Get Started Button */}
        <button
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 100);
          }}
          style={{
            backgroundColor: 'rgb(0, 123, 121)',
            color: 'rgb(5, 5, 5)',
            border: '1px solid rgb(5, 5, 5)',
            borderRadius: '395px',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: '"Inter", sans-serif',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap',
            marginLeft: '24px'
          }}
        >
          Get started
        </button>
        
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen" style={{ backgroundColor: '#1a1a1a' }}>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src={getImagePath("/HUPSCALE_Final.mp4")}
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* What is Hupscale & We work with Section - Exact Figma Implementation */}
      <section id="benefits" className="sticky-section" style={{ backgroundColor: '#007B79' }}>
        <div className="relative w-full h-full" style={{ minHeight: '900px', height: 'auto' }}>
        {/* What is Hupscale - Left side content */}
        <div className="absolute left-[95.5px] top-[226.7px] w-[569px]">
          {/* Heading */}
          <div className="mb-[16px]">
            <div className="h-[48px] w-[426px] mb-0">
              <h2 className="font-['Inter'] text-[65.1px] leading-[48px] text-[#efefef] whitespace-nowrap" style={{ fontWeight: 900 }}>
                WHAT IS
              </h2>
            </div>
            <div className="h-[81.6px] w-[569px]">
              <h2 className="font-['Inter'] text-[98.7px] leading-[81.6px] text-[#181818] whitespace-nowrap" style={{ fontWeight: 900 }}>
                Hupscale?
              </h2>
            </div>
          </div>
          
          {/* Description */}
          <div className="w-[363px] h-[192px]">
            <div className="font-['Onest'] text-[22px] leading-[32px] text-[#181818]">
              <p className="whitespace-nowrap">At Hupscale, we craft powerful</p>
              <p className="whitespace-nowrap">personal brands through strategic</p>
              <p className="whitespace-nowrap">clarity, deep insight, and unwavering</p>
              <p className="whitespace-nowrap">dedication — then amplify businesses</p>
              <p className="whitespace-nowrap">with the same precision, turning</p>
              <p className="whitespace-nowrap">vision into influence.</p>
            </div>
          </div>
        </div>

        {/* We work with - Dark container positioned on the right */}
        <div className="bg-[#181818] absolute right-0 top-[177.39px] inline-flex items-center h-[545.21002px]" style={{ width: 'calc(100% - 664.5px)', padding: '81px 212.5px 177px 96px', borderRadius: '96px 0 0 96px' }} data-name="Div [framer-qtno2k]" data-node-id="12:1127">
          <div className="absolute box-border content-stretch flex flex-col gap-[48px] h-[287.21px] items-start justify-start left-[96px] pb-[1118.39px] pt-0 px-0 top-[81px] w-[452px]" data-name="Div [framer-1js28r7]" data-node-id="12:1128">
            {/* We work with heading */}
            <div className="h-[49.21px] relative shrink-0 w-[506px]" data-name="Paragraph [framer-text]" data-node-id="12:1129">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.21px] relative w-[506px]">
                <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[66.9px] text-nowrap top-[24.4px] translate-y-[-50%]" style={{ fontWeight: 900 }} data-node-id="12:1130">
                  <p className="leading-[49.2px] whitespace-pre">
                    <span>We </span>
                    <span className="text-[#007B79]">work </span>
                    <span>with</span>
                    <span className="text-[#007B79]">...</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Industry categories - Two columns */}
            <div className="h-[198px] relative shrink-0 w-[376.4px]" data-name="Div [framer-vnml9u]" data-node-id="12:1131">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[75.609px] h-[198px] items-start justify-start pl-0 pr-[602.625px] py-0 relative w-[376.4px]">
                {/* Left column */}
                <div className="h-[150px] relative shrink-0 w-[218.52px]" data-name="Div [framer-1gtmeta]" data-node-id="12:1132">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[150px] items-start justify-start pb-[1225.59px] pt-0 px-0 relative w-[218.52px]">
                    {/* Motorsport */}
                    <div className="h-[30px] relative shrink-0 w-[158.3px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[158.3px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[116.3px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Motorsport</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Motorsport" className="block max-w-none size-full" src={getImagePath("/svg-motorsport.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content creators */}
                    <div className="h-[30px] relative shrink-0 w-[218.52px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[218.52px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[176.52px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Content creators</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Content creators" className="block max-w-none size-full" src={getImagePath("/svg-content.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Golf athletes */}
                    <div className="h-[30px] relative shrink-0 w-[173.05px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[173.05px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[131.05px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Golf athletes</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Golf athletes" className="block max-w-none size-full" src={getImagePath("/svg-golf.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Soccer teams */}
                    <div className="h-[30px] relative shrink-0 w-[157.88px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[157.88px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[115.88px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Soccer teams</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Soccer teams" className="block max-w-none size-full" src={getImagePath("/svg-soccer.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Personal brand */}
                    <div className="h-[30px] relative shrink-0 w-[157.88px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[157.88px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[115.88px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Personal brand</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Personal brand" className="block max-w-none size-full" src={getImagePath("/svg-personal.svg")} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="h-[150px] relative shrink-0 w-[82.28px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[150px] items-start justify-start pb-[1225.59px] pt-0 px-0 relative w-[82.28px]">
                    {/* Real estate */}
                    <div className="h-[30px] relative shrink-0 w-[120.75px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[120.75px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[78.75px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Real estate</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Real estate" className="block max-w-none size-full" src={getImagePath("/svg-real.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Models */}
                    <div className="h-[30px] relative shrink-0 w-[82.28px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[82.28px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[40.28px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Models</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Models" className="block max-w-none size-full" src={getImagePath("/svg-models.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Influencers */}
                    <div className="h-[30px] relative shrink-0 w-[157.88px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[157.88px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[113.86px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Influencers</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Influencers" className="block max-w-none size-full" src={getImagePath("/svg-influencer.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Car rentals */}
                    <div className="h-[30px] relative shrink-0 w-[157.88px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[157.88px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[112.4px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Car rentals</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Car rentals" className="block max-w-none size-full" src={getImagePath("/svg-car.svg")} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Medical */}
                    <div className="h-[30px] relative shrink-0 w-[120.75px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[120.75px]">
                        <div className="absolute h-[26.41px] left-[42px] top-[1.8px] w-[78.75px]">
                          <div className="absolute flex flex-col font-['Onest:Regular',_sans-serif] justify-center leading-[0] left-0 not-italic text-[#efefef] text-[22px] text-nowrap top-[13.3px] translate-y-[-50%]">
                            <p className="leading-[26.4px] whitespace-pre">Medical</p>
                          </div>
                        </div>
                        <div className="absolute left-0 overflow-clip size-[30px] top-0">
                          <img alt="Medical" className="block max-w-none size-full" src={getImagePath("/svg-medical.svg")} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Logos */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '40px'
            }}>
              {/* Facebook Logo */}
              <img 
                src={getImagePath("/Facebook.png")} 
                alt="Facebook" 
                style={{
                  height: '30px',
                  width: 'auto'
                }}
              />
              
              {/* Instagram Logo */}
              <img 
                src={getImagePath("/Instagram.png")} 
                alt="Instagram" 
                style={{
                  height: '30px',
                  width: 'auto'
                }}
              />
              
              {/* YouTube Logo */}
              <img 
                src={getImagePath("/YouTube.png")} 
                alt="YouTube" 
                style={{
                  height: '30px',
                  width: 'auto'
                }}
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* What we do Section - Pixel Perfect */}
      <section id="services" className="sticky-section" style={{ backgroundColor: '#181818' }}>
        <div 
          className="flex justify-center items-center"
          style={{
            width: '1425px',
            height: '900px',
            padding: '175px 92.5px 171px 92.5px',
            background: '#181818'
          }}
        >
          <div className="flex w-full h-full items-center justify-between">
            {/* Left Content */}
            <div className="text-white">
              <h2 style={{
                fontFamily: '"Dallas PS Sans Bld", "Dallas PS Sans Bld Placeholder", sans-serif',
                fontWeight: 900,
                lineHeight: '0.9',
                margin: 0,
                marginBottom: '20px',
                color: 'white'
              }}>
                <div style={{ 
                  fontSize: '36px',           // Smaller size for "WHAT"
                  textTransform: 'uppercase'  // Force all caps
                }}>
                  WHAT
                </div>
                <div style={{ 
                  fontSize: '72px',           // Much larger size for "WE DO?"
                  textTransform: 'uppercase'  // Force all caps
                }}>
                  WE <span style={{ color: '#007B79' }}>DO</span>?
                </div>
              </h2>
              <p className="text-2xl text-white mb-2 font-['Onest']">
                Digital Services
              </p>
              <p className="text-2xl text-white mb-12 font-['Onest']">
                <span className="text-[#007B79]">human</span> experiences
              </p>
              
              {/* 2x2 Button Grid - Pixel Perfect */}
              <div 
                className="flex flex-col gap-4"
                style={{ marginTop: '32px' }}
              >
                {/* First Row */}
                <div className="flex gap-4">
                  {/* Social Media Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 ${
                      activeService === 'Social Media' ? 'shadow-lg' : 'hover:shadow-md'
                    }`}
                    style={{
                      display: 'flex',
                      width: '170px',
                      height: '56px',
                      padding: '18px 24.092px 18px 24.078px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      borderRadius: '100px',
                      background: activeService === 'Social Media' ? '#EFEFEF' : '#00B081',
                      border: 'none',
                      color: activeService === 'Social Media' ? '#00B081' : '#000000',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleServiceChange('Social Media')}
                  >
                    Social Media
                  </button>

                  {/* Website Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 ${
                      activeService === 'Website' ? 'shadow-lg' : 'hover:shadow-md'
                    }`}
                    style={{
                      display: 'flex',
                      width: '170px',
                      height: '56px',
                      padding: '18px 45.351px 18px 45.359px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      borderRadius: '100px',
                      background: activeService === 'Website' ? '#EFEFEF' : '#00B081',
                      border: 'none',
                      color: activeService === 'Website' ? '#00B081' : '#000000',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleServiceChange('Website')}
                  >
                    Website
                  </button>
                </div>

                {/* Second Row */}
                <div className="flex gap-4">
                  {/* Design Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 ${
                      activeService === 'Design' ? 'shadow-lg' : 'hover:shadow-md'
                    }`}
                    style={{
                      display: 'flex',
                      width: '170px',
                      height: '56px',
                      padding: '18px 52.01px 18px 52px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      borderRadius: '100px',
                      background: activeService === 'Design' ? '#EFEFEF' : '#00B081',
                      border: 'none',
                      color: activeService === 'Design' ? '#00B081' : '#000000',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleServiceChange('Design')}
                  >
                    Design
                  </button>

                  {/* Press Button */}
                  <button
                    className={`transition-all duration-200 hover:scale-105 ${
                      activeService === 'Press' ? 'shadow-lg' : 'hover:shadow-md'
                    }`}
                    style={{
                      display: 'flex',
                      width: '170px',
                      height: '56px',
                      padding: '18px 58.625px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      borderRadius: '100px',
                      background: activeService === 'Press' ? '#EFEFEF' : '#00B081',
                      border: 'none',
                      color: activeService === 'Press' ? '#00B081' : '#000000',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleServiceChange('Press')}
                  >
                    Press
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Dynamic Service Card */}
            <Card 
              key={activeService}
              className={`border-none shadow-lg transition-all duration-700 ease-out ${isAnimating ? 'animate-slide-down' : ''}`}
              style={{
                width: '624px',
                height: '550px',
                borderRadius: '80px',
                backgroundImage: `url("${getImagePath(serviceCards[activeService as keyof typeof serviceCards]?.backgroundImage || '')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#f0f0f0',
                transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
                opacity: isAnimating ? 0 : 1
              }}
            >
              <CardContent 
                className="relative h-full"
                style={{
                  padding: '48px 64px'
                }}
              >
                {/* Service Title Pill */}
                <div 
                  className="text-black font-bold inline-block font-['Inter'] transition-all duration-500 ease-out"
                  style={{
                    width: '261.8px',
                    height: '62.41px',
                    padding: '12px 32px',
                    borderRadius: '100px',
                    background: '#00BCBE',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30.9px',
                    fontWeight: 900,
                    lineHeight: '38.4px',
                    color: '#232323',
                    marginBottom: '40px'
                  }}
                >
                  {serviceCards[activeService as keyof typeof serviceCards]?.title}
                </div>
                
                {/* Dynamic Content */}
                <div className="space-y-8">
                  {serviceCards[activeService as keyof typeof serviceCards]?.content?.map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-start transition-all duration-300 ease-out"
                      style={{
                        transitionDelay: `${i * 100}ms`
                      }}
                    >
                      <div className="w-3 h-3 bg-[#007B79] rounded-full mr-4 mt-1.5 flex-shrink-0"></div>
                      <div className="font-['Onest']" style={{ fontSize: '20px', lineHeight: '24px', color: '#181818', maxWidth: '320px' }}>
                        <span style={{ fontWeight: 700 }}>{item.label}</span>
                        <span style={{ fontWeight: 400 }}>{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Idea to Execution Section - CORRECTED Pixel Perfect */}
      <section className="sticky-section" style={{ backgroundColor: '#F5F5F5' }}>
        <div 
          className="w-full flex justify-center py-16 px-4"
          style={{
            backgroundImage: `url('${getImagePath('/gradient-background-teal.png')}')`
          }}
        >
        <div 
          className="flex flex-col items-center mx-auto"
          style={{
            width: '1248px',
            padding: '74px 32px 120px 32px',
            gap: '31.994px',
            borderRadius: '84px',
            background: '#181818',
            boxShadow: '0 4px 50px 8px rgba(0, 0, 0, 0.25)',
            flexShrink: 0
          }}
        >
          {/* Main Title */}
          <div className="text-center">
            <h2 
              className="leading-none"
              style={{
                fontFamily: 'Dallas PS Sans Bld, sans-serif',
                fontSize: '68px',
                fontWeight: 700,
                fontStyle: 'normal',
                color: '#EFEFEF',
              }}
            >
              IDEA TO <span style={{ color: '#007B79' }}>EXECUTION</span>
            </h2>
          </div>

          {/* Process Steps Container */}
          <div className="flex flex-col items-center w-full" style={{ maxWidth: '1184px' }}>
            {/* Process Steps Row */}
            <div className="flex items-start justify-between w-full" style={{ maxWidth: '1000px', marginBottom: '50px' }}>
              {/* Step 1: We listen */}
              <div 
                className="flex flex-col items-start"
                style={{
                  display: 'flex',
                  width: '324.68px',
                  height: '114px',
                  paddingBottom: '20px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '32px',
                  flexShrink: 0
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Dallas PS Sans Bld, sans-serif',
                    fontSize: '35px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ color: '#007B79', textTransform: 'uppercase' }}>WE</span> <span style={{ color: '#EFEFEF' }}>LISTEN</span>
                </h3>
                <p 
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.4',
                    color: '#EFEFEF',
                    maxWidth: '280px',
                    fontStyle: 'normal'
                  }}
                >
                  We engage in strategic listening capturing your vision & the expectations of your audience.
                </p>
              </div>

              {/* Step 2: We analyze */}
              <div 
                className="flex flex-col items-start"
                style={{
                  display: 'flex',
                  width: '324.68px',
                  height: '114px',
                  paddingBottom: '20px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '32px',
                  flexShrink: 0
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Dallas PS Sans Bld, sans-serif',
                    fontSize: '35px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ color: '#007B79', textTransform: 'uppercase' }}>WE</span> <span style={{ color: '#EFEFEF' }}>ANALYZE</span>
                </h3>
                <p 
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.4',
                    color: '#EFEFEF',
                    maxWidth: '280px',
                    fontStyle: 'normal'
                  }}
                >
                  We explore and assess tailored solutions, weighing impact & alignment.
                </p>
              </div>

              {/* Step 3: We create */}
              <div 
                className="flex flex-col items-start"
                style={{
                  display: 'flex',
                  width: '324.68px',
                  height: '114px',
                  paddingBottom: '20px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '32px',
                  flexShrink: 0
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Dallas PS Sans Bld, sans-serif',
                    fontSize: '35px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ color: '#007B79', textTransform: 'uppercase' }}>WE</span> <span style={{ color: '#EFEFEF' }}>CREATE</span>
                </h3>
                <p 
                  style={{
                    fontFamily: 'Onest, sans-serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.4',
                    color: '#EFEFEF',
                    maxWidth: '320px',
                    fontStyle: 'normal'
                  }}
                >
                  We design with purpose crafting elevated experiences that resonate.
                </p>
              </div>
            </div>

            {/* Connector Container - Exact Figma Positioning */}
            <div 
              style={{
                marginTop: '25px',
                display: 'flex',
                width: '676px',
                height: '69px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '185px',
                margin: '25px auto 0 auto'
              }}
            >
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

          {/* Mobile Responsive Layout */}
          <div className="md:hidden flex flex-col items-center space-y-12 w-full">
            {/* Mobile Step 1 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4 font-['Inter']">
                <span style={{ color: '#007B79' }}>WE</span>&nbsp;<span style={{ color: '#EFEFEF' }}>LISTEN</span>
              </h3>
              <p className="text-sm text-[#EFEFEF] max-w-xs font-['Inter'] leading-relaxed">
                We engage in strategic listening capturing your vision & the expectations of your audience.
              </p>
            </div>

            {/* Mobile Arrow 1 - Rotated */}
            <div className="transform rotate-90">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <path 
                  d="M5 30 Q 30 10, 55 30" 
                  stroke="#00BCBE" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Mobile Step 2 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4 font-['Inter']">
                <span style={{ color: '#007B79' }}>WE</span>&nbsp;<span style={{ color: '#EFEFEF' }}>ANALYZE</span>
              </h3>
              <p className="text-sm text-[#EFEFEF] max-w-xs font-['Inter'] leading-relaxed">
                We explore and assess tailored solutions, weighing impact & alignment.
              </p>
            </div>

            {/* Mobile Arrow 2 - Rotated */}
            <div className="transform rotate-90">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <path 
                  d="M5 30 Q 30 10, 55 30" 
                  stroke="#00BCBE" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Mobile Step 3 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold mb-4 font-['Inter']">
                <span style={{ color: '#007B79' }}>WE</span>&nbsp;<span style={{ color: '#EFEFEF' }}>CREATE</span>
              </h3>
              <p className="text-sm text-[#EFEFEF] max-w-xs font-['Inter'] leading-relaxed">
                We design with purpose crafting elevated experiences that resonate.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section - PIXEL PERFECT FIGMA DIMENSIONS */}
      <section id="testimonials" className="sticky-section" style={{ backgroundColor: '#007B79' }}>
        <div style={{ overflow: 'visible', width: '100vw' }}>  {/* FIXED: Changed from hidden to visible */}
          <div 
            style={{
              width: '100vw',
              display: 'flex',
            justifyContent: 'center',
            background: 'rgb(0, 123, 121)', // Exact Figma background
            overflowX: 'visible' // FIXED: Allow sticky positioning to work
          }}
        >
          {/* EXACT FRAMER SPECIFICATIONS: 1425px × 900px with proper spacing */}
          <div
            style={{
              display: 'flex',
              width: '1425px',
              height: '900px',
              padding: '80px 0 133.906px 0', // Reduce top padding from 133.891px to 80px
              flexDirection: 'column',
              justifyContent: 'flex-start', // Push content higher instead of center
              alignItems: 'center',
              gap: '0px', // Keep sections tight, let individual margins handle spacing
              flexShrink: 0,
              margin: '0 auto',
              background: 'rgb(0, 123, 121)'
            }}
          >
            {/* Header Section - Exact Framer Specifications */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* "Great work" text (smaller, bolder) - ALL CAPS */}
              <p style={{
                fontFamily: '"Dallas PS Sans Med", "Dallas PS Sans Reg", sans-serif',
                fontSize: '44px',
                lineHeight: '0.7em',
                textAlign: 'center',
                color: 'rgb(255, 255, 255)', // White text
                fontWeight: 600, // ADD weight - original appears heavier
                margin: 0
              }}>
                GREAT WORK
              </p>
              
              {/* "For great people" text (larger, much bolder) - ALL CAPS */}
              <p style={{
                fontFamily: '"Dallas PS Sans Bld", "Dallas PS Sans Bld Placeholder", sans-serif',
                fontSize: '68px',
                textAlign: 'center',
                color: 'rgb(35, 35, 35)', // Dark text
                fontWeight: 800, // ADD heavy weight - original is very bold
                margin: 0
              }}>
                FOR GREAT PEOPLE
              </p>
              
              {/* Subtext with mixed font weights - Two lines */}
              <p style={{
                fontFamily: '"Onest", "Onest Placeholder", sans-serif',
                fontSize: '22px',
                textAlign: 'center',
                color: 'rgb(35, 35, 35)', // Dark text
                margin: '0 auto 40px auto' // ADD 40px bottom margin for spacing to cards
              }}>
                Since 2021 <span style={{ fontWeight: 700 }}>we work with incredible clients</span> to create<br />
                meaningful impact and compelling experiences.
              </p>
            </div>

            {/* Carousel Section */}
            <div style={{ width: '100%' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%', // Will be constrained by parent 1425px
                overflow: 'visible', // Let cards extend naturally beyond container
                display: 'flex',
                alignItems: 'center'
              }}>
              {/* Testimonials Track - 50 Cards */}
              <div 
                style={{
                  display: 'flex',
                  gap: `${GAP}px`,
                  transform: `translateX(${translateX}px)`,
                  transition: 'transform 0.5s ease-out',
                  cursor: 'grab',
                  touchAction: 'pan-y',
                  userSelect: 'none',
                  width: `${infiniteTestimonials.length * STEP}px` // Width for all 50 cards
                }}
              >
                {infiniteTestimonials.map((testimonial, index) => {
                  console.log('Rendering card:', index, testimonial.name) // MUST show 50 cards
                  return (
                    <div 
                      key={testimonial.id} // Use the unique ID with set number
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
                        overflow: 'visible'  // FIXED: Allow sticky positioning
                      }}
                    >
                      {/* Star Rating - Original SVG */}
                      <div style={{ marginBottom: '20px' }}>
                        <svg width="154" height="26" viewBox="0 0 154 26" fill="none">
                          <g>
                            <path d="M13 1L15.09 6.26L21 7.27L17 11.14L18.18 17.02L13 14.77L7.82 17.02L9 11.14L5 7.27L10.91 6.26L13 1Z" fill="#00B081"/>
                            <path d="M44 1L46.09 6.26L52 7.27L48 11.14L49.18 17.02L44 14.77L38.82 17.02L40 11.14L36 7.27L41.91 6.26L44 1Z" fill="#00B081"/>
                            <path d="M75 1L77.09 6.26L83 7.27L79 11.14L80.18 17.02L75 14.77L69.82 17.02L71 11.14L67 7.27L72.91 6.26L75 1Z" fill="#00B081"/>
                            <path d="M106 1L108.09 6.26L114 7.27L110 11.14L111.18 17.02L106 14.77L100.82 17.02L102 11.14L98 7.27L103.91 6.26L106 1Z" fill="#00B081"/>
                            <path d="M137 1L139.09 6.26L145 7.27L141 11.14L142.18 17.02L137 14.77L131.82 17.02L133 11.14L129 7.27L134.91 6.26L137 1Z" fill="#00B081"/>
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
                          src={getImagePath(testimonial.image)} 
                          alt={testimonial.name} 
                          className="avatar-circular"
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',      // FIXED: Use 50% for perfect circle
                            objectFit: 'cover',
                            overflow: 'hidden',       // ADDED: Ensure circular clipping
                            display: 'block'          // ADDED: Remove inline spacing
                          }}
                        />
                        <p 
                          style={{
                            fontFamily: 'Onest, sans-serif',
                            fontSize: '18px',
                            fontWeight: 700,
                            color: 'rgb(24, 24, 24)'
                          }}
                        >
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  )
                })}
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
                    transition: 'background 0.2s ease',
                    color: '#EFEFEF'
                  }}
                  onClick={handlePrevious}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  <ChevronLeft size={20} />
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
                    transition: 'background 0.2s ease',
                    color: '#EFEFEF'
                  }}
                  onClick={handleNext}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>


      {/* Interaction Section - Image as full background, text overlay */}
      <section className="sticky-section" style={{ 
        backgroundImage: `url(${getImagePath('/interaction-person-teal.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', // Position text on right side
        padding: '0 100px',
        position: 'relative',
        zIndex: 5
      }}>
        
        {/* Text content overlay - positioned on right */}
        <div style={{
          textAlign: 'right',
          color: '#FFFFFF',
          maxWidth: '600px'
        }}>
          <h1 style={{
            fontFamily: '"Dallas PS Sans Bld", sans-serif',
            fontSize: '72px',
            fontWeight: 900,
            margin: '0 0 20px 0',
            lineHeight: '0.9',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            INTERACTION
          </h1>
          <p style={{
            fontFamily: '"Dallas PS Sans Bld", sans-serif', 
            fontSize: '48px',
            fontWeight: 900,
            margin: '0 0 40px 0',
            lineHeight: '1.1',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            into <span style={{ color: '#007B79' }}>BUSINESS.</span>
          </p>
          
          <button style={{
            backgroundColor: '#007B79',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50px',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 700,
            cursor: 'pointer',
            textTransform: 'uppercase',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            Let's Scale
          </button>
        </div>
        
      </section>

      {/* "Answers you need" Section - COMPLETE FRAMER STRUCTURE */}
      <section id="faq" style={{ 
        backgroundColor: '#F5F5F5', 
        margin: 0, 
        paddingBottom: 0,
        position: 'relative',
        zIndex: 6
      }}>
        <div style={{
          width: '100vw',
          height: 'auto',
          minHeight: '900px',
          position: 'relative',
          overflow: 'visible'
        }}>
        
        {/* Background Image (Full Coverage) */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: 0,
          borderRadius: 'inherit'
        }}>
          <img 
            src={getImagePath("/answers-section-bg-teal-vectorized.png")}
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              objectPosition: 'center',
              objectFit: 'fill'
            }}
          />
        </div>

        {/* FAQ Container with Accordion Functionality */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '60px',           // COMPACT: Reduced top padding
          paddingBottom: '60px',       // COMPACT: Reduced bottom padding
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: '40px',
          paddingRight: '40px',
          overflow: 'visible'          // Prevent container clipping
        }}>
          
          {/* Main FAQ Container */}
          <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            height: 'auto',              // Dynamic height only - no min-height
            width: '100%',
            maxWidth: '1200px',
            minWidth: '900px',
            borderRadius: '60px',        // FIXED: Match original rounding
            background: '#007B79',
            boxShadow: '0 4px 30px 8px rgba(0, 0, 0, 0.15)',
            padding: '40px 60px 40px 60px',  // COMPACT: Reduced padding significantly
            margin: '0 auto',
            overflow: 'visible',         // Prevent content clipping
            transition: 'height 0.3s ease'  // Smooth height transition
          }}>

            {/* Title */}
            <p style={{
              fontFamily: '"Dallas PS Sans Bld", "Dallas PS Sans Bld Placeholder", sans-serif',
              fontSize: '59px',           // FIXED: Match original size exactly
              fontWeight: 900,            // Keep bold weight
              textAlign: 'center',
              color: 'rgb(239, 239, 239)',
              margin: '0 0 20px 0',       // COMPACT: Reduced bottom margin
              lineHeight: '1.1',          // ADJUSTED: Slightly more breathing room than 0.9
              letterSpacing: '0.5px'      // REDUCED: Less aggressive letter spacing
            }}>
              ANSWERS <span style={{ 
                color: 'rgb(35, 35, 35)',
                fontWeight: 900
              }}>YOU NEED</span>
            </p>

            {/* FAQ Items */}
            {faqs.map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',              // REDUCED: Match original spacing
                    cursor: 'pointer'
                  }}
                  onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                >
                  {/* Custom Plus/Minus Icon */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    flexShrink: 0
                  }}>
                    {/* Horizontal bar (always visible) */}
                    <div style={{
                      position: 'absolute',
                      width: '16px',
                      height: '2px',
                      backgroundColor: '#232323',
                      borderRadius: '1px'
                    }} />
                    {/* Vertical bar (hidden when open) */}
                    {openFaqIdx !== i && (
                      <div style={{
                        position: 'absolute',
                        width: '2px',
                        height: '16px',
                        backgroundColor: '#232323',
                        borderRadius: '1px'
                      }} />
                    )}
                  </div>
                  <span style={{
                    fontFamily: '"Onest", "Onest Placeholder", sans-serif',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: '#232323'
                  }}>
                    {item.q}
                  </span>
                </div>
                {openFaqIdx === i && item.a && (
                  <div style={{
                    fontFamily: '"Onest", "Onest Placeholder", sans-serif',
                    fontSize: '22px',
                    color: '#FFFFFF',
                    maxWidth: '100%',          // Ensure text stays within card
                    width: '100%',             // Fill available width
                    marginLeft: '50px',        // Indent from plus icon
                    marginTop: '10px',
                    marginBottom: '20px',      // Add bottom spacing
                    lineHeight: '1.4',         // Improve readability
                    wordWrap: 'break-word'     // Prevent text overflow
                  }}>
                    {item.a}
                  </div>
                )}
                <div style={{
                  height: '1px',
                  background: '#232323',
                  width: '100%',
                  margin: '12px 0'          // TIGHTER: Reduced spacing between items
                }} />
              </div>
            ))}

          </div>
        </div>

        {/* CTA Section - INCREASE all spacing to match original */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '60px',                     // INCREASED from 32px to 60px - much larger gaps
          paddingTop: '120px',             // INCREASED from 80px to 120px - more top space
          paddingBottom: '120px'           // INCREASED from 100px to 120px - more bottom space
        }}>
          
          {/* Main Heading - INCREASE size for better match */}
          <h1 style={{
            fontFamily: '"Dallas PS Sans Bld", "Dallas PS Sans Bld Placeholder", sans-serif',
            fontSize: '48px',              // INCREASED from 42px to 48px
            fontWeight: 900,
            textAlign: 'center',
            color: '#232323',
            margin: 0,
            lineHeight: '1.1',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            maxWidth: '800px'              // Keep line break constraint
          }}>
            TAKE YOUR ASTEROIDS AND<br/>SCALE YOUR VISION
          </h1>
          
          {/* Contact Info Text - INCREASE size */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            marginTop: '20px',
            marginBottom: '32px'
          }}>
            <span style={{
              fontFamily: '"Onest", sans-serif',
              fontSize: '20px',              // INCREASED from 18px to 20px
              fontWeight: 400,
              color: '#232323'
            }}>
              you can also contact us directly
            </span>
            <a
              href="mailto:hello@hupscaleagency.com"
              style={{
                fontFamily: '"Onest", sans-serif',
                fontSize: '20px',            // INCREASED from 18px to 20px
                color: '#232323',
                textDecoration: 'underline',
                fontWeight: 400,
              }}
            >
              hello@hupscaleagency.com
            </a>
          </div>
          
          {/* CTA Button - INCREASE text size and button padding */}
          <a 
            href="https://wa.me/qr/ASGK4GMJI7E7P1"
            target="_blank"
            rel="noopener"
            style={{
              backgroundColor: '#007B79',
              borderRadius: '100px',
              padding: '15px 32px',          // INCREASED padding for larger button
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '20px'
            }}
          >
            <span style={{
              fontFamily: '"Onest", sans-serif',
              fontSize: '21px',              // INCREASED from 19px to 21px
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Let's Hupscale
            </span>
          </a>
          
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        id="footer"
        className="bg-[#007B79] px-4" 
        style={{ 
          position: 'relative', 
          zIndex: 100, 
          margin: 0,
          paddingTop: '3rem',
          paddingBottom: '3rem'
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Copyright */}
          <p className="text-lg text-white font-['Onest'] font-normal">
            2025 Hupscale. All rights reserved.
          </p>
          
          {/* Center: Instagram Link with Icon */}
          <div className="flex items-center gap-2">
            {/* Instagram Icon (white fill) */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 17.4 17.4 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 2.6 2.6 0 5.8 0ZM5.6 2C3.61 2 2 3.61 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C16.39 18 18 16.39 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.94 3.5 16.5 4.06 16.5 4.75C16.5 5.44 15.94 6 15.25 6C14.56 6 14 5.44 14 4.75C14 4.06 14.56 3.5 15.25 3.5ZM10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7Z" fill="white"/>
            </svg>
            <a href="https://www.instagram.com/lets.hupscale/" target="_blank" rel="noopener" className="text-lg text-white font-['Onest'] font-semibold">
              Instagram
            </a>
          </div>
          
          {/* Right: Logo + Terms & Privacy (stacked vertically) */}
          <div className="flex flex-col items-center gap-3">
            {/* HUPSCALE Logo - WHITE TEXT */}
            <div className="text-2xl font-bold text-white font-['Inter']">
              HUPSCALE
            </div>
            
            {/* Terms & Privacy - HORIZONTAL (side by side) */}
            <div className="flex items-center gap-6 text-white">
              <span className="text-lg font-['Onest'] cursor-pointer">Terms</span>
              <span className="text-lg font-['Onest'] cursor-pointer">Privacy</span>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  )
}
