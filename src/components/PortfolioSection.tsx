import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from "lucide-react";

// Import cropped bride images
import traditionalTamil from "../assets/portfolio/traditional_tamil_bride.jpg";
import receptionGlam from "../assets/portfolio/reception_glam_bride.jpg";
import engagementMakeup from "../assets/portfolio/engagement_makeup.jpg";
import airbrushBridal from "../assets/portfolio/airbrush_bridal_makeup.jpg";
import modernBridal from "../assets/portfolio/modern_bridal_look.jpg";
import bridesmaidMakeup from "../assets/portfolio/bridesmaid_makeup.jpg";
import traditionalMaroon from "../assets/portfolio/traditional_maroon_bride.jpg";
import modernEngagement from "../assets/portfolio/modern_engagement_glam.jpg";

const portfolioItems = [
  {
    src: traditionalTamil,
    title: "Traditional Tamil Bride",
    category: "Traditional Tamil Bride",
    description: "Classic Kanchipuram silk draping, premium temple jewelry setting, and glowing HD bridal finish."
  },
  {
    src: receptionGlam,
    title: "Reception Glam Bride",
    category: "Reception Glam Bride",
    description: "Modern glittery eye makeup, soft contoured cheeks, and an elegant champagne lehenga styling."
  },
  {
    src: engagementMakeup,
    title: "Engagement Makeup",
    category: "Engagement Makeup",
    description: "Flawless soft dewy makeup paired with modern braided hairdo and fresh floral accents."
  },
  {
    src: airbrushBridal,
    title: "Airbrush Bridal Makeup",
    category: "Airbrush Bridal Makeup",
    description: "High-definition matte airbrush makeup for bulletproof longevity and a flawless skin finish."
  },
  {
    src: modernBridal,
    title: "Modern Bridal Look",
    category: "Modern Bridal Look",
    description: "Contemporary Christian bridal makeup, radiant glass skin, and an elegant veil hair setting."
  },
  {
    src: bridesmaidMakeup,
    title: "Bridesmaid Makeup",
    category: "Bridesmaid Makeup",
    description: "Fresh, youthful, and naturally enhanced makeup, matching the bridal party theme perfectly."
  },
  {
    src: traditionalMaroon,
    title: "Heritage South Indian Bride",
    category: "Traditional Tamil Bride",
    description: "Vibrant maroon silk saree look, heavy statement gold jewelry makeup matching."
  },
  {
    src: modernEngagement,
    title: "Couture Reception Glam",
    category: "Reception Glam Bride",
    description: "Bold lips and sleek hair design, matching couture evening gown attire."
  }
];

const PortfolioSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev! - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/30 relative">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold border border-primary/10">
            <Sparkles className="w-3 h-3 text-accent" />
            Portfolio Gallery
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground font-bold leading-tight">
            Exquisite Bridal Masterpieces
          </h2>
          <p className="text-muted-foreground font-sans font-light tracking-wide text-sm md:text-base">
            Explore our curated portfolio of completed bridal looks. Every makeover is displayed in a compact, elegant grid. Click to view full details.
          </p>
          <div className="h-[2px] w-24 bg-accent mx-auto mt-2" />
        </div>

        {/* Smaller, Uniform Aspect-Ratio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group shadow-md border border-border/40 hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-black/25 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4 md:p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1">
                  <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-1.5">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-accent uppercase tracking-widest text-[9px] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-sans text-[10px] font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animation-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Controls */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={showPrev}
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={showNext}
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Featured Image and Details Card */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-charcoal">
              <img
                src={portfolioItems[lightboxIndex].src}
                alt={portfolioItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Info details */}
            <div className="text-center text-white max-w-2xl px-4 space-y-1">
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                {portfolioItems[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-2xl font-bold">
                {portfolioItems[lightboxIndex].title}
              </h3>
              <p className="text-white/60 font-sans text-sm font-light">
                {portfolioItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
