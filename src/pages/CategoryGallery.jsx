import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiX } from 'react-icons/hi';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { galleryData } from '../data/galleryData';

const CategoryGallery = () => {
  const { category } = useParams();
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (galleryData[category]) {
      setData(galleryData[category]);
    }
  }, [category]);

  if (!data) return <div className="h-screen bg-brand-black text-white flex items-center justify-center">Loading...</div>;

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-brand-black text-white">
        
        {/* HEADER */}
        <div className="pt-24 pb-12 px-6 md:px-16">
          <Link to="/services" className="inline-flex items-center text-brand-gold text-sm tracking-widest uppercase mb-8 hover:text-white transition-colors">
            <HiArrowLeft className="mr-2" /> Back to Services
          </Link>

          <h1 
            className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-4"
            data-aos="fade-down"
          >
            {data.title}
          </h1>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            {data.description}
          </p>
        </div>

        {/* MASONRY GRID */}
        {/* CHANGED: 'columns-2' for Mobile, 'md:columns-3' for Desktop */}
        <div className="px-4 md:px-16 pb-24 mx-auto max-w-7xl">
          <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            
            {data.images.map((img, index) => (
              <motion.div
                key={img.id}
                layoutId={`img-${img.id}`} // Smooth layout transition
                // SCROLL ANIMATION (Pop & Slide)
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }} // Triggers when image enters screen
                transition={{ duration: 0.6, ease: "easeOut", delay: index % 3 * 0.1 }} // Staggered delay
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="w-full bg-[#1E1E1E] py-20 text-center px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-6 text-white">
            Like what you see?
          </h2>
          <Button to="/book" variant="primary">
            Book This Service
          </Button>
        </div>

        <Footer />

        {/* LIGHTBOX (Full Screen Zoom) */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-6 right-6 text-white text-4xl hover:text-brand-gold z-50">
                <HiX />
              </button>
              
              <motion.img 
                layoutId={`img-${selectedImage.id}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage.src} 
                alt="Full Screen" 
                className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl border border-white/10 rounded-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default CategoryGallery;