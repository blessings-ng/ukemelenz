import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';

const Services = () => {
  const services = [
    { 
      id: 1, 
      title: "Portraits", 
      link: "/gallery/portraits",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
      style: "md:col-span-2 md:row-span-2" 
    },
    { 
      id: 2, 
      title: "Weddings", 
      link: "/gallery/weddings",
      image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1964&auto=format&fit=crop",
      style: "md:col-span-1 md:row-span-2" 
    },
    { 
      id: 3, 
      title: "Lifestyle", 
      link: "/gallery/lifestyle",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1964&auto=format&fit=crop",
      style: "md:col-span-1 md:row-span-1" 
    },
    { 
      id: 4, 
      title: "Commercial", 
      link: "/gallery/brand",
      image: "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=1964&auto=format&fit=crop",
      style: "md:col-span-1 md:row-span-1" 
    },
    { 
      id: 5, 
      title: "Graduation", 
      link: "/gallery/graduation",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1964&auto=format&fit=crop",
      style: "md:col-span-1 md:row-span-1" 
    },
  ];

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto px-8 md:px-16 py-20 md:py-24">
        
        {/* HEADER */}
        <div className="mb-16 text-left">
          <h1 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest text-white mb-3">
            Our Services
          </h1>
          <div className="h-1 w-24 bg-brand-gold mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Curated visual experiences tailored to your unique story. Select a category below to explore our portfolio.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group overflow-hidden rounded-md shadow-lg bg-brand-surface ${item.style}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.link} className="block w-full h-full relative">
                
                {/* IMAGE: THE SMOOTH SLIDE FIX 
                   - will-change-transform: Optimizes browser rendering to prevent popping.
                   - duration-1000: 1 second slide (Smooth, not too slow).
                   - ease-in-out: Starts and stops gently.
                   - scale-110 + translate-x-4: Creates the "Pan" effect (Zoom + Move Right).
                */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover will-change-transform transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:translate-x-4"
                  />
                </div>

                {/* OVERLAY: Static (No fading to avoid popping feeling) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* CONTENT: Bottom-Left Alignment */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start gap-4">
                  
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider drop-shadow-md relative z-10">
                    {item.title}
                  </h2>
                  
                  {/* UNIFIED BUTTON: Always Visible */}
                  <div className="pointer-events-none relative z-10">
                    <Button variant="outline">
                      Show More
                    </Button>
                  </div>

                </div>

                {/* BORDER: Subtle Gold Fade */}
                <div className="absolute inset-0 border-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-md z-20"></div>

              </Link>
              </motion.div>
            
          ))}

        </div>
      </div>
    </PageTransition>
  );
};

export default Services;