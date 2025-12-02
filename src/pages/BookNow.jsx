import { motion } from 'framer-motion';

const BookNow = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-6 md:px-16 dark:bg-brand-white text-brand-white dark:text-white transition-colors duration-300">
      
      {/* 1. Page Header */}
      <div className="text-center mb-16 md:mb-24">
        <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Book
        </h4>
        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight">
          Book Us
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* 2. Left Column: Text & Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-heading font-bold mb-6">
            Your Story, Our Vision.
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-sm md:text-base font-light">
            UkemeLenz is committed to transforming each experience into a visual narrative. 
            Our approach is to reveal the true essence of every moment, capturing authentic 
            emotions and personalities. Let us tell your story through powerful, unforgettable images.
          </p>

          <div className="space-y-4 text-sm font-sans">
            <p>
              <strong className="block text-brand-white dark:text-white mb-1 uppercase tracking-wider text-xs">Phone:</strong>
              <span className="text-gray-600 dark:text-gray-400 hover:text-brand-gold transition-colors cursor-pointer">
                +234 813-941-2469
              </span>
            </p>
            <p>
              <strong className="block text-brand-white dark:text-white mb-1 uppercase tracking-wider text-xs">Email:</strong>
              <span className="text-gray-600 dark:text-gray-400 hover:text-brand-gold transition-colors cursor-pointer">
                ukemelenz@gmail.com
              </span>
            </p>
            <p>
              <strong className="block text-brand-white dark:text-white mb-1 uppercase tracking-wider text-xs">Address:</strong>
              <span className="text-gray-600 dark:text-gray-400">
                Lagos, Nigeria.
              </span>
            </p>
          </div>
        </motion.div>

        {/* 3. Right Column: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-heading font-bold mb-2">Book Now</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-8 italic">
            Interested to work with us?
          </p>

          <form className="space-y-6">
            {/* Input Field Style: Light Grey in Light Mode, Dark Grey in Dark Mode */}
            
            {/* Name */}
            <div>
              <input 
                type="text" 
                placeholder="Your Name *" 
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-brand-black dark:text-white text-sm px-5 py-4 focus:outline-none focus:ring-1 focus:ring-brand-gold placeholder-gray-500"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="email" 
                placeholder="Your Email *" 
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-brand-black dark:text-white text-sm px-5 py-4 focus:outline-none focus:ring-1 focus:ring-brand-gold placeholder-gray-500"
              />
              <input 
                type="tel" 
                placeholder="Your Number *" 
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-brand-black dark:text-white text-sm px-5 py-4 focus:outline-none focus:ring-1 focus:ring-brand-gold placeholder-gray-500"
              />
            </div>

            {/* Date Picker */}
            <div>
              <input 
                type="date" 
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-brand-black dark:text-white text-sm px-5 py-4 focus:outline-none focus:ring-1 focus:ring-brand-gold text-gray-500 dark:text-gray-400"
              />
            </div>

            {/* Enquiries */}
            <div>
              <textarea 
                rows="5" 
                placeholder="Enquiries *" 
                className="w-full bg-gray-100 dark:bg-[#1A1A1A] text-brand-black dark:text-white text-sm px-5 py-4 focus:outline-none focus:ring-1 focus:ring-brand-gold placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="px-8 py-3 bg-[#1A1A1A] dark:bg-[#2C2C2C] text-white font-heading uppercase tracking-widest text-xs hover:bg-brand-gold transition-colors duration-300"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default BookNow;