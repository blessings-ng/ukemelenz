import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', // Options: 'primary' | 'outline' | 'minimal'
  className = '', 
  type = 'button' 
}) => {
  
  // 1. BASE STYLES (Typography & Shape)
  // CHANGED: 'rounded-sm' -> 'rounded-full' (Creates the Pill/Oval shape)
  const baseStyles = "inline-flex items-center justify-center font-heading font-bold uppercase transition-all duration-500 ease-out rounded-full";

  // 2. VARIANTS
  const variants = {
    
    // PRIMARY: Solid Gold (Book Now)
    primary: "bg-[#C5A059] text-white px-8 py-4 text-xs tracking-[0.2em] hover:bg-[#B08D45] hover:shadow-lg hover:scale-105",
    
    // OUTLINE: Ghost Button (Services "Show More")
    // This will now look exactly like the oval ring in your screenshot
    outline: "bg-transparent border border-white/80 text-white px-8 py-3 text-[10px] tracking-[0.25em] hover:bg-white hover:text-black hover:border-white",
    
    // MINIMAL: Text Only (Read More)
    // Removed rounded-full here since it has no background/border, but keeps the padding logic
    minimal: "bg-transparent text-white text-xs tracking-[0.2em] relative group px-0 py-2 rounded-none",
  };

  // Underline effect for minimal button
  const minimalEffect = variant === 'minimal' ? (
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
  ) : null;

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        {minimalEffect}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
      {minimalEffect}
    </button>
  );
};

export default Button;