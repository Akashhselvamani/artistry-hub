import { useState, useRef, useEffect } from "react";
import { Sparkles, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Import real bride photos for testimonial avatars
import bride1 from "../assets/portfolio/pink_gold_saree_bride.jpg";
import bride2 from "../assets/portfolio/reception_lehenga_bride.jpg";
import bride3 from "../assets/portfolio/christian_bride_gown_closeup.jpg";

const testimonials = [
  {
    id: 1,
    quote: "Absolutely loved my bridal look. Saranya made me feel confident and beautiful on my special day. The HD makeup stayed fresh and flawless from morning Muhurtham to reception!",
    name: "Ananya R.",
    role: "Tamil Bride",
    image: bride1
  },
  {
    id: 2,
    quote: "Saranya is an absolute magician! My reception glam lehenga look was glowing, lightweight, and photographed beautifully. She knew exactly what would suit my features.",
    name: "Priya S.",
    role: "Reception Glam Bride",
    image: bride2
  },
  {
    id: 3,
    quote: "I was extremely worried about makeup feeling heavy, but Saranya gave me a perfect, naturally enhanced, radiant finish. My hair and draping were completely customized and comfortable.",
    name: "Meera K.",
    role: "Christian Bride",
    image: bride3
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync activeIndex on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const htmlChild = child as HTMLElement;
        const childCenter = htmlChild.offsetLeft + htmlChild.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const container = scrollRef.current;
    if (container) {
      const child = container.children[index] as HTMLElement;
      child?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    handleDotClick(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    handleDotClick(nextIdx);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-[#121212] via-[#25040F] to-[#121212] text-white relative overflow-hidden border-y border-white/5">
      {/* Decorative details */}
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />

      <div className="container-narrow relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-accent text-xs uppercase tracking-widest font-semibold border border-white/10">
            <Sparkles className="w-3 h-3 text-accent" />
            Bride Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight">
            Loved By Premium Brides
          </h2>
          <p className="text-white/70 font-sans font-light text-sm md:text-base">
            Read the experiences of our beautiful brides styled in Chengalpattu and beyond.
          </p>
          <div className="h-[2px] w-24 bg-accent mx-auto mt-2" />
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4"
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center relative">
                  
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-8 right-8 text-accent/10 hidden md:block">
                    <Quote className="w-24 h-24" />
                  </div>

                  {/* Bride Photo */}
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent/30 flex-shrink-0 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Testimonial details */}
                  <div className="space-y-4 text-left flex-grow">
                    
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="font-serif text-lg md:text-xl text-white/90 italic leading-relaxed">
                      "{item.quote}"
                    </p>

                    <div className="pt-2">
                      <p className="font-serif text-base font-bold text-accent">{item.name}</p>
                      <p className="text-xs text-white/60 uppercase tracking-widest font-semibold">{item.role}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left/Right Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#121212]/80 border border-white/10 flex items-center justify-center text-accent shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hidden md:flex"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#121212]/80 border border-white/10 flex items-center justify-center text-accent shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hidden md:flex"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2.5 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
