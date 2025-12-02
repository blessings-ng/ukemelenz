// src/data/galleryData.js

// Import your local images here if you have them, or use URLs
// import wedding1 from '../assets/images/wedding1.jpg';

export const galleryData = {
  portraits: {
    title: "Editorial Portraits",
    description: "Capturing the raw essence of personality through light and shadow.",
    images: [
      // Replace these URLs with your actual image imports or paths
      { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000", alt: "Portrait 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000", alt: "Portrait 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000", alt: "Portrait 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000", alt: "Portrait 4" },
      // Add as many as you want...
    ]
  },
  weddings: {
    title: "Weddings & Love",
    description: "Documenting your forever moments with cinematic elegance.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000", alt: "Wedding 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000", alt: "Wedding 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000", alt: "Wedding 3" },
    ]
  },
  lifestyle: {
    title: "Lifestyle",
    description: "Authentic moments, candidly captured.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000", alt: "Lifestyle 1" },
      // ...
    ]
  },
  brand: {
    title: "Brand Campaigns",
    description: "Visual identity for brands that demand attention.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?q=80&w=1000", alt: "Brand 1" },
      // ...
    ]
  },
  graduation: {
    title: "Graduation",
    description: "Celebrating milestones in style.",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000", alt: "Grad 1" },
      // ...
    ]
  }
};