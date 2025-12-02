import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

// --- 1. IMPORT YOUR IMAGE HERE ---
// Make sure this path points to where your actual file is
import aboutImage from '../assets/images/ukeme_hero_image.JPG'; 

// --- COUNTER COMPONENT ---
const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, '').replace(/\+/g, '')); 
      const duration = 2000;
      
      const timer = setInterval(() => {
        start += end / (duration / 16);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-500">
        {count.toLocaleString()}{value.includes('+') ? '+' : ''}
      </h2>
      <p className="text-brand-gold text-xs md:text-sm uppercase tracking-[0.3em] font-medium drop-shadow-[0_0_10px_rgba(197,160,89,0.6)]">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <PageTransition>
      <div className="w-full flex flex-col">
        
        {/* --- SECTION 1: BIO (Compact Layout) --- */}
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row gap-12 items-center justify-center min-h-[70vh]">
          
          {/* IMAGE (Using the imported variable) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-[450px] md:h-[550px] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src={aboutImage} // <--- USING IMPORTED VARIABLE HERE
                alt="Ukeme Gideon" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4" data-aos="fade-up">
              Hey There! Ukeme Here.
            </h4>
            
            <h1 
              className="text-3xl md:text-5xl font-serif italic leading-tight mb-8 text-white" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              I’m the <span className="not-italic text-brand-gold">Lagos-based</span> creative director behind UkemeLenz.
            </h1>

            <div className="space-y-6 text-gray-400 font-sans text-sm md:text-base leading-relaxed font-light text-justify md:text-left" data-aos="fade-up" data-aos-delay="200">
              <p>
                From a well-curated editorial shoot to a high-quality wedding album, I draw on my industry experience to deliver sophisticated work that resonates deeply.
              </p>
              <p>
                My approach is simple: I don't just take photos; I build visual legacies. Whether it's the quiet intimacy of a portrait or the chaotic joy of a celebration, I focus on the "why" behind the image.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10" data-aos="fade-up" data-aos-delay="300">
              <p className="font-heading text-lg uppercase tracking-widest text-white">
                Ukeme Gideon
              </p>
              <p className="text-[10px] text-brand-gold tracking-widest uppercase mt-1">
                Founder, UkemeLenz
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: STATS COUNTER --- */}
        <div className="w-full py-24 border-t border-white/5 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            <Counter value="5+" label="Years of Experience" />
            <Counter value="1,000+" label="People Photographed" />
            <Counter value="250+" label="Projects Delivered" />
          </div>
        </div>


      </div>
    </PageTransition>
  );
};

export default About;