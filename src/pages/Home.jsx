import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

// --- 1. IMPORT YOUR IMAGES HERE ---
// Change the paths to match exactly where your photos are
import slide1 from '../assets/images/hero-slider1.jpg';
import slide2 from '../assets/images/hero-slider2.jpg';
// import slide3 from '../assets/images/hero-slider3.jpg';
// import slide4 from '../assets/images/hero-slider4.jpg';
// import slide5 from '../assets/images/hero-slider5.jpg';

const Home = () => {
  const text = "UKEME LENZ";

  // --- 2. USE THE IMPORTED VARIABLES IN THE ARRAY ---
  const slides = [slide1, slide2, ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-Rotate Logic (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animation Configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <PageTransition>
      <div className="w-full relative bg-brand-black">
        
        {/* STICKY HERO SECTION */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          
          {/* BACKGROUND SLIDER */}
          <div className="absolute inset-0 w-full h-full bg-black">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={currentSlide}
                src={slides[currentSlide]} // Uses the local image variable
                alt="UkemeLenz Slider"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>
          </div>

          {/* HERO CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-20">
             <div className="relative p-8 md:p-14 text-center max-w-[95%]">
                
                {/* Gold Brackets */}
                <div className="absolute top-0 left-0 w-4 h-8 md:w-6 md:h-6 border-t-[3px] border-l-[3px] border-brand-gold drop-shadow-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-8 md:w-6 md:h-6 border-t-[3px] border-r-[3px] border-brand-gold drop-shadow-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-8 md:w-6 md:h-6 border-b-[3px] border-l-[3px] border-brand-gold drop-shadow-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-8 md:w-6 md:h-6 border-b-[3px] border-r-[3px] border-brand-gold drop-shadow-lg"></div>

                {/* Text Animation */}
                <motion.h1 
                  className="text-4xl md:text-8xl font-heading font-bold uppercase tracking-tight mb-4 text-white drop-shadow-2xl flex flex-wrap justify-center gap-x-2 md:gap-x-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {text.split(" ").map((word, wordIndex) => (
                    <div key={wordIndex} className="flex">
                      {word.split("").map((char, charIndex) => (
                        <motion.span key={charIndex} variants={letterVariants}>
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="text-[10px] md:text-sm font-sans tracking-[0.3em] uppercase text-brand-gold font-bold"
                >
                  Visual Artist / Creative Director
                </motion.p>
             </div>
             
            
          </div>
        </div>

        {/* SCROLLING CONTENT (The Curtain) */}
        <div className="relative z-30 bg-brand-black border-t border-white/5 shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
          
          <div className="max-w-4xl mx-auto px-6 py-24 md:px-8 md:py-32">
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6 md:mb-8 border-l-2 border-brand-gold pl-4">
              The Philosophy
            </h4>
            
            <h2 className="text-2xl md:text-5xl font-heading font-bold mb-8 md:mb-12 leading-tight text-white">
              Elevating Visual Narratives <br/>
              <span className="text-gray-500">Beyond the Ordinary.</span>
            </h2>

            <div className="space-y-6 md:space-y-8 text-gray-300 font-sans text-base md:text-lg leading-relaxed text-justify md:text-left">
              <p>
                <strong className="text-white">UkemeLenz</strong> stands at the intersection of technical precision and artistic intuition. We do not simply document events; we curate visual legacies.
              </p>
              <p>
                Led by UKEME LENZ, a creative director with a distinct eye for editorial elegance, our work transcends traditional photography. We specialize in crafting high-impact imagery for weddings, lifestyle campaigns, and corporate brands.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-heading text-xl md:text-2xl text-white uppercase tracking-widest">
                Ukeme Gideon
              </p>
              <p className="text-brand-gold text-[10px] tracking-widest uppercase mt-1">
                Principal Photographer
              </p>
            </div>
          </div>

          <Footer />
        </div>

      </div>
    </PageTransition>
  );
};

export default Home;