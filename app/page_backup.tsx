'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

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

// Service data with exact content
const serviceData = {
  'Social Media': {
    backgroundImage: imgImage,
    title: 'Social Media',
    content: [
      { label: 'Boost AI', description: 'Enhance your social media presence with AI-powered content creation and optimization.' },
      { label: 'Engagement groups', description: 'Build and manage active communities that drive meaningful interactions.' },
      { label: 'Community manager', description: 'Professional community management to maintain brand consistency and engagement.' }
    ]
  },
  'Website': {
    backgroundImage: imgImage1,
    title: 'Website',
    content: [
      { label: 'Custom Design', description: 'Tailored website designs that reflect your brand identity and values.' },
      { label: 'Responsive Layout', description: 'Mobile-first approach ensuring optimal experience across all devices.' },
      { label: 'SEO Optimization', description: 'Built-in SEO best practices to improve your search engine visibility.' }
    ]
  },
  'Design': {
    backgroundImage: imgImage2,
    title: 'Design',
    content: [
      { label: 'Brand Identity', description: 'Complete brand identity packages including logos, colors, and guidelines.' },
      { label: 'UI/UX Design', description: 'User-centered design approach for intuitive and engaging interfaces.' },
      { label: 'Print Materials', description: 'Professional print design for business cards, brochures, and marketing materials.' }
    ]
  },
  'Press': {
    backgroundImage: imgVideo,
    title: 'Press',
    content: [
      { label: 'Press Releases', description: 'Professional press release writing and distribution services.' },
      { label: 'Media Relations', description: 'Build relationships with journalists and media outlets in your industry.' },
      { label: 'Crisis Management', description: 'Strategic communication during challenging times to protect your reputation.' }
    ]
  }
};

export default function HomePage() {
  const [activeService, setActiveService] = useState('Social Media');
  const [isAnimating, setIsAnimating] = useState(false);

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
          <Button className="bg-[#ffbc3a] text-black hover:bg-[#faba2c] rounded-full px-6 border border-[#050505]">
            Get started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-[#faba2c] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${imgVideo}')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="bg-[#faba2c] rounded-3xl p-16 shadow-2xl inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black uppercase leading-none">
              LET'S <span className="text-black">MAKE</span><br />
              <span className="text-black">YOU</span> <span className="text-white">GROW!</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#faba2c] py-12 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left: Copyright */}
          <p className="text-lg text-white font-['Onest'] font-normal">
            2024 Growi. All rights reserved.
          </p>
          
          {/* Right: Logo + Terms & Privacy (stacked vertically) */}
          <div className="flex flex-col items-center gap-3">
            {/* GROWI Logo - WHITE TEXT */}
            <div className="text-2xl font-bold text-white font-['Inter']">
              GROWI
            </div>
            
            {/* Terms & Privacy - HORIZONTAL (side by side) */}
            <div className="flex gap-4">
              <a href="#" className="text-white text-sm hover:text-[#181818] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white text-sm hover:text-[#181818] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
