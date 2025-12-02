import { FaInstagram, FaTwitter, FaTiktok, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-white pt-24 pb-12 px-8 flex flex-col items-center justify-center">
      
      {/* 1. Name & Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-wide text-white mb-2">
          Ukeme Gideon
        </h2>
        <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.25em] font-sans">
          Photographer / Creative Director
        </p>
      </div>

      {/* 2. Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-gray-400 text-lg">
        <a href="tel:+2348000000000" className="hover:text-brand-gold transition-colors"><FaPhoneAlt /></a>
        <span className="hover:text-brand-gold cursor-default"><FaMapMarkerAlt /></span>
        <a href="#" className="hover:text-brand-gold transition-colors"><FaYoutube /></a>
        <a href="#" className="hover:text-brand-gold transition-colors"><FaTwitter /></a>
        <a href="#" className="hover:text-brand-gold transition-colors"><FaLinkedin /></a>
        <a href="#" className="hover:text-brand-gold transition-colors"><FaInstagram /></a>
      </div>

    </footer>
  );
};

export default Footer;