'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

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

  // Remove or comment out the sticky scroll CSS for now
  /*
  useEffect(() => {
    // Sticky scroll styles commented out temporarily
  }, []);
  */

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Fixed positioning to avoid conflicts */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#F5F5F5',
        borderRadius: '50px',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        width: 'auto',
        maxWidth: '90%'
      }}>
        
        {/* Logo with Asteroid Icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 900,
          color: '#2B2B2B',
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '0.5px'
        }}>
          GR
          <div style={{
            width: '22px',
            height: '22px',
            backgroundColor: '#FABA2C',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 1px',
            position: 'relative'
          }}>
            <div style={{
              width: '3px',
              height: '3px',
              backgroundColor: '#E6A820',
              borderRadius: '50%',
              position: 'absolute',
              top: '6px',
              left: '6px'
            }}></div>
            <div style={{
              width: '2px',
              height: '2px',
              backgroundColor: '#E6A820',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '5px',
              right: '5px'
            }}></div>
          </div>
          WI
        </div>
        
        {/* Navigation Links with Much More Space */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          flex: 1,
          justifyContent: 'center',
          marginLeft: '40px',
          marginRight: '40px'
        }}>
          {['Benefits', 'Services', 'Testimonials', "FAQ's"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#2B2B2B',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: '"Inter", sans-serif',
                transition: 'color 0.2s ease',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Get Started Button */}
        <button style={{
          backgroundColor: '#FABA2C',
          color: '#2B2B2B',
          border: 'none',
          borderRadius: '25px',
          padding: '10px 20px',
          fontSize: '15px',
          fontWeight: 700,
          fontFamily: '"Inter", sans-serif',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          whiteSpace: 'nowrap'
        }}>
          Get started
        </button>
        
      </nav>

      {/* Main Content - Add padding top to avoid navigation overlap */}
      <main style={{ paddingTop: '100px' }}>
        
        {/* Hero Section */}
        <section style={{ 
          minHeight: '100vh', 
          backgroundColor: '#1a1a1a', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
          position: 'relative'
        }}>
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Hero Section</h1>
            <p>Your hero video background is here</p>
          </div>
        </section>

        {/* What is Growi Section */}
        <section style={{ 
          minHeight: '100vh', 
          backgroundColor: '#FABA2C', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#2B2B2B' }}>What is Growi?</h2>
            <p style={{ color: '#2B2B2B' }}>Your "What is Growi" content goes here</p>
          </div>
        </section>

        {/* What We Do Section */}
        <section style={{ 
          minHeight: '100vh', 
          backgroundColor: '#181818', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          padding: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>What We Do</h2>
            <p>Your "What We Do" content goes here</p>
          </div>
        </section>

        {/* Idea to Execution Section */}
        <section style={{ 
          minHeight: '100vh', 
          backgroundColor: '#F5F5F5', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#2B2B2B' }}>Idea to Execution</h2>
            <p style={{ color: '#2B2B2B' }}>Your process content goes here</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ 
          minHeight: '100vh', 
          backgroundColor: '#FABA2C', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#2B2B2B' }}>Testimonials</h2>
            <p style={{ color: '#2B2B2B' }}>Your testimonials content goes here</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ 
          minHeight: '100vh', 
          backgroundColor: '#2B2B2B', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          padding: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>FAQ</h2>
            <p>Your FAQ content goes here</p>
          </div>
        </section>

      </main>

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
