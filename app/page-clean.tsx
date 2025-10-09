'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import TrueInfiniteCarousel from "@/components/TrueInfiniteCarousel"

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

export default function Home() {
  const [activeService, setActiveService] = useState("Instagram Growth");
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    "Instagram Growth",
    "TikTok Growth", 
    "YouTube Growth",
    "LinkedIn Growth"
  ];

  const serviceContent = {
    "Instagram Growth": {
      title: "Instagram Growth",
      description: "Grow your Instagram following organically with our proven strategies and engagement techniques.",
      image: imgVideo
    },
    "TikTok Growth": {
      title: "TikTok Growth", 
      description: "Boost your TikTok presence with viral content strategies and audience engagement.",
      image: imgImage
    },
    "YouTube Growth": {
      title: "YouTube Growth",
      description: "Scale your YouTube channel with optimized content and subscriber growth tactics.",
      image: imgImage1
    },
    "LinkedIn Growth": {
      title: "LinkedIn Growth",
      description: "Build your professional network and establish thought leadership on LinkedIn.",
      image: imgImage2
    }
  };

  const handleServiceChange = (service: string) => {
    if (service !== activeService) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveService(service);
        setIsAnimating(false);
      }, 200); // Half of the animation duration
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[#f4f4f4] rounded-full px-6 py-3 border border-[#181818] flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={imgImage15} alt="GROWI" className="h-6" />
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#181818] text-sm font-medium hover:text-[#faba2c]">Benefits</a>
            <a href="#" className="text-[#181818] text-sm font-medium hover:text-[#faba2c]">Services</a>
            <a href="#" className="text-[#181818] text-sm font-medium hover:text-[#faba2c]">Testimonials</a>
            <a href="#" className="text-[#181818] text-sm font-medium hover:text-[#faba2c]">FAQ's</a>
          </div>
          <Button className="bg-[#faba2c] text-black hover:bg-[#faba2c]/90 px-4 py-2 text-sm font-bold rounded-full font-['Onest']">
            LET'S GROW
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 font-['Inter'] leading-tight">
            Let's Make You <span className="text-[#faba2c]">Grow!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-['Onest']">
            We help businesses and individuals grow their social media presence with proven strategies and authentic engagement.
          </p>
          <Button className="bg-[#faba2c] text-black hover:bg-[#faba2c]/90 px-8 py-6 text-lg font-bold rounded-full font-['Onest']">
            START GROWING TODAY
          </Button>
        </div>
      </section>

      {/* What is Growi Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-['Onest']">What is Growi?</h2>
            <p className="text-lg text-gray-600 mb-6 font-['Onest']">
              Growi is a social media growth agency that specializes in organic growth strategies. 
              We help businesses and content creators build authentic audiences and increase engagement 
              across all major social media platforms.
            </p>
            <p className="text-lg text-gray-600 mb-8 font-['Onest']">
              Our proven methods focus on real, sustainable growth that converts followers into customers 
              and builds lasting brand loyalty.
            </p>
            <Button className="bg-[#faba2c] text-black hover:bg-[#faba2c]/90 px-6 py-3 font-bold rounded-full font-['Onest']">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="bg-[#faba2c] rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-black font-['Onest']">Growth Focused</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We work with Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 font-['Onest']">We work with...</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#faba2c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 font-['Onest']">Businesses</h3>
              <p className="text-gray-600 font-['Onest']">Small to large businesses looking to expand their digital presence</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#faba2c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 font-['Onest']">Creators</h3>
              <p className="text-gray-600 font-['Onest']">Content creators and influencers building their personal brand</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#faba2c] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 font-['Onest']">Entrepreneurs</h3>
              <p className="text-gray-600 font-['Onest']">Entrepreneurs launching new ventures and products</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-['Onest']">What we do?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Onest']">
              We offer comprehensive social media growth services across all major platforms, 
              helping you build authentic audiences and drive real business results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service Buttons */}
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceChange(service)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 font-['Onest'] ${
                    activeService === service
                      ? 'bg-[#faba2c] text-black shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-sm opacity-80">
                    {serviceContent[service as keyof typeof serviceContent].description}
                  </p>
                </button>
              ))}
            </div>

            {/* Service Content Card */}
            <div className="relative">
              <Card className={`overflow-hidden transition-all duration-400 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-[#faba2c] to-[#f0a500] relative overflow-hidden">
                    <img 
                      src={serviceContent[activeService as keyof typeof serviceContent].image}
                      alt={serviceContent[activeService as keyof typeof serviceContent].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 font-['Onest']">
                      {serviceContent[activeService as keyof typeof serviceContent].title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-['Onest']">
                      {serviceContent[activeService as keyof typeof serviceContent].description}
                    </p>
                    <Button className="bg-[#faba2c] text-black hover:bg-[#faba2c]/90 font-bold rounded-full font-['Onest']">
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Idea to Execution Section */}
      <section 
        className="w-full flex justify-center py-16 px-4"
        style={{ 
          background: 'url("./gradient-background.png") lightgray 50% / contain no-repeat'
        }}
      >
        <div 
          style={{
            background: '#181818',
            borderRadius: '84px',
            padding: '74px 32px 120px 32px',
            maxWidth: '1248px',
            width: '100%',
            boxShadow: '0 4px 50px 8px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '60px',
            margin: '0 auto'
          }}
        >
          {/* Main Title */}
          <div style={{ textAlign: 'center' }}>
            <h2 
              style={{
                fontFamily: 'Dallas PS Sans Bld, sans-serif',
                fontSize: '68px',
                fontWeight: 700,
                color: '#EFEFEF',
                lineHeight: '81.6px',
                marginBottom: '0'
              }}
            >
              <span style={{ color: '#EFEFEF' }}>idea to </span>
              <span style={{ color: '#FABA2C' }}>execution</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
              maxWidth: '1184px',
              gap: '32px'
            }}
          >
            {/* Step 1: WE LISTEN */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 
                style={{
                  fontFamily: 'Dallas PS Sans Bld, sans-serif',
                  fontSize: '35px',
                  fontWeight: 700,
                  color: '#FABA2C',
                  marginBottom: '16px'
                }}
              >
                WE LISTEN
              </h3>
              <p 
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#EFEFEF',
                  lineHeight: '24px',
                  maxWidth: '280px',
                  margin: '0 auto'
                }}
              >
                We actively listen to your needs and expectations to understand your vision.
              </p>
            </div>

            {/* Step 2: WE ANALYZE */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 
                style={{
                  fontFamily: 'Dallas PS Sans Bld, sans-serif',
                  fontSize: '35px',
                  fontWeight: 700,
                  color: '#FABA2C',
                  marginBottom: '16px'
                }}
              >
                WE ANALYZE
              </h3>
              <p 
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#EFEFEF',
                  lineHeight: '24px',
                  maxWidth: '280px',
                  margin: '0 auto'
                }}
              >
                We analyze different possible solutions to find the best approach for your goals.
              </p>
            </div>

            {/* Step 3: WE CREATE */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 
                style={{
                  fontFamily: 'Dallas PS Sans Bld, sans-serif',
                  fontSize: '35px',
                  fontWeight: 700,
                  color: '#FABA2C',
                  marginBottom: '16px'
                }}
              >
                WE CREATE
              </h3>
              <p 
                style={{
                  fontFamily: 'Onest, sans-serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#EFEFEF',
                  lineHeight: '24px',
                  maxWidth: '320px',
                  margin: '0 auto'
                }}
              >
                We implement the solution that best aligns with user needs and available resources.
              </p>
            </div>
          </div>

          {/* Connector SVGs */}
          <div 
            style={{
              display: 'flex',
              width: '676px',
              height: '69px',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              gap: '185px',
              margin: '25px auto 0 auto'
            }}
          >
            {/* First Connector */}
            <svg width="245" height="68" viewBox="0 0 245 68" fill="none" style={{ width: '245px', height: '68px', flexShrink: 0 }}>
              <path d="M240.597 4.26153C233.842 -3.70832 225.193 4.88885 225.193 4.88885C225.193 4.88885 184.121 37.752 122.505 38.7073C60.875 37.7378 19.8169 4.88885 19.8169 4.88885C19.8169 4.88885 11.1539 -3.70832 4.41294 4.26153C-4.04106 14.2417 -1.95207 28.0856 24.9419 43.9682C69.2319 70.1162 117.449 68.8758 118.062 68.8616C119.301 68.8901 175.973 70.0021 220.054 43.9682C246.948 28.0856 249.037 14.2417 240.597 4.26153Z" fill="#FFBC25"/>
            </svg>

            {/* Second Connector */}
            <svg width="245" height="68" viewBox="0 0 245 68" fill="none" style={{ width: '245px', height: '68px', flexShrink: 0 }}>
              <path d="M240.597 4.26153C233.842 -3.70832 225.193 4.88885 225.193 4.88885C225.193 4.88885 184.121 37.752 122.505 38.7073C60.875 37.7378 19.8169 4.88885 19.8169 4.88885C19.8169 4.88885 11.1539 -3.70832 4.41294 4.26153C-4.04106 14.2417 -1.95207 28.0856 24.9419 43.9682C69.2319 70.1162 117.449 68.8758 118.062 68.8616C119.301 68.8901 175.973 70.0021 220.054 43.9682C246.948 28.0856 249.037 14.2417 240.597 4.26153Z" fill="#FFBC25"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW INFINITE CAROUSEL */}
      <TrueInfiniteCarousel />

      {/* Interaction into Business Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-96 h-96 bg-[#faba2c] rounded-full mx-auto relative overflow-hidden">
              <img 
                src="/api/placeholder/400/500" 
                alt="Person with phone" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-[450px] object-cover object-top"
              />
            </div>
            <div className="absolute bottom-10 right-0">
              <svg width="200" height="60" viewBox="0 0 200 60">
                <path 
                  d="M10 50 Q 100 10, 190 50" 
                  stroke="white" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="text-right text-white">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 font-['Onest']">
              interaction<br />
              into <span className="text-[#faba2c]">business</span>
            </h2>
            <Button className="bg-[#faba2c] text-black hover:bg-[#faba2c]/90 px-8 py-6 text-lg font-bold rounded-full font-['Onest']">
              LET'S GROW
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#faba2c] rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 font-['Onest']">Answers you need</h2>
            <div className="space-y-6">
              {[
                "Why choose Growi?",
                "Why should I grow?",
                "What kind of guarantees do I have?",
                "What information do I need to provide?"
              ].map((question, i) => (
                <div key={i} className="flex items-center justify-between border-b border-black/20 pb-4">
                  <p className="text-lg text-black font-medium font-['Onest']">{question}</p>
                  <Plus className="w-5 h-5 text-black" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6 font-['Onest']">
              take your asteroids and<br />
              grow your vision
            </h3>
            <p className="text-gray-600 mb-8 font-['Onest']">you can also contact us directly here</p>
            <Button className="bg-[#faba2c] text-black hover:bg-[#faba2c]/90 px-8 py-6 text-lg font-bold rounded-full font-['Onest']">
              LET'S GROW! TOGETHER
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#faba2c] py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-sm text-black font-['Onest']">2024 Growi. All rights reserved.</p>
          <div className="flex items-center">
            <span className="text-black font-['Onest']">Instagram</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black mr-4 font-['Inter']">GROWI</span>
            <div className="flex space-x-2 text-black">
              <span className="font-['Onest']">Terms</span>
              <span className="font-['Onest']">Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
