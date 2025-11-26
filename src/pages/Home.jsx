import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative w-full">
      
      {/* 1. FIXED BACKGROUND */}
      {/* FIX: Removed 'ml-72' on mobile. Now it is full width on mobile, and offset only on desktop. */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 md:ml-72">
        <img 
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop" 
          alt="UkemeLenz Hero" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. THE VIEWFINDER HERO */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center text-white px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative p-6 md:p-10 text-center max-w-[90%]"
        >
          {/* BRACKETS: Smaller on mobile (w-8), larger on desktop (w-16) */}
          <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-[3px] border-l-[3px] border-brand-gold drop-shadow-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-[3px] border-r-[3px] border-brand-gold drop-shadow-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-[3px] border-l-[3px] border-brand-gold drop-shadow-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-[3px] border-r-[3px] border-brand-gold drop-shadow-lg"></div>

          {/* TEXT: Responsive sizing */}
          <h1 className="text-4xl md:text-8xl font-heading font-bold uppercase tracking-tight mb-2 md:mb-4 text-white drop-shadow-2xl">
            Ukeme Gideon
          </h1>
          <p className="text-[10px] md:text-sm font-sans tracking-[0.3em] uppercase text-brand-gold font-bold">
            Visual Artist / Creative Director
          </p>
        </motion.div>

        {/* Scroll Hint */}
        <div className="absolute bottom-20 md:bottom-12 animate-pulse text-white/50 text-[10px] tracking-[0.3em] uppercase">
          Scroll to Discover
        </div>
      </div>

      {/* 3. THE WRITE-UP */}
      <div className="relative z-20 bg-brand-black w-full text-white border-t border-white/5 shadow-2xl">
        
        {/* Responsive Padding: px-6 on mobile, px-8 on desktop */}
        <div className="max-w-4xl mx-auto px-6 py-20 md:px-8 md:py-32">
          
          <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6 md:mb-8 border-l-2 border-brand-gold pl-4">
            The Philosophy
          </h4>
          
          {/* Responsive Heading Size */}
          <h2 className="text-2xl md:text-5xl font-heading font-bold mb-8 md:mb-12 leading-tight text-white">
            Elevating Visual Narratives <br/>
            <span className="text-gray-500">Beyond the Ordinary.</span>
          </h2>

          <div className="space-y-6 md:space-y-8 text-gray-300 font-sans text-base md:text-lg leading-relaxed text-justify md:text-left">
            <p>
              <strong className="text-white">UkemeLenz</strong> stands at the intersection of technical precision and artistic intuition. We do not simply document events; we curate visual legacies.
            </p>
            <p>
              Led by Ukeme Gideon, a creative director with a distinct eye for editorial elegance, our work transcends traditional photography. We specialize in crafting high-impact imagery for weddings, lifestyle campaigns, and corporate brands that demand a sophisticated visual identity.
            </p>
            <p>
              In a digital landscape saturated with noise, clarity is power. Whether directing a high-fashion editorial or capturing the raw emotion of nuptials, our approach remains singular: to produce timeless visuals that resonate with authenticity and authority.
            </p>
          </div>

          <div className="mt-12 md:mt-16 pt-8 border-t border-white/10">
            <p className="font-heading text-xl md:text-2xl text-white uppercase tracking-widest">
              Ukeme Gideon
            </p>
            <p className="text-brand-gold text-[10px] md:text-xs tracking-widest uppercase mt-1">
              Principal Photographer
            </p>
          </div>

        </div>

        <Footer />
        
      </div>

    </div>
  );
};

export default Home;