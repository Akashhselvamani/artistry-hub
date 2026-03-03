import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this agency elevated my career and confidence. They truly understand the art of .",
    name: "Ananya R.",
    role: "Creative Artist",
    initials: "AR",
  },
  {
    id: 2,
    quote:
      "The team's dedication to nurturing talent is unparalleled. They helped me find my authentic voice.",
    name: "Marcus Chen",
    role: "Visual Artist",
    initials: "MC",
  },
  {
    id: 3,
    quote:
      "More than an agency, they became family. Their guidance transformed how I approach my craft.",
    name: "Sofia Laurent",
    role: "Sculptor",
    initials: "SL",
  },
  {
    id: 4,
    quote:
      "They don't just manage careers; they cultivate dreams. I'm grateful for their unwavering support.",
    name: "David Okonkwo",
    role: "Mixed Media Artist",
    initials: "DO",
  },
  {
    id: 5,
    quote:
      "Professional, passionate, and genuinely invested in every artist's success. A true partner in creativity.",
    name: "Elena Vasquez",
    role: "Painter",
    initials: "EV",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // ✅ Sync activeIndex on manual scroll (IDENTICAL LOGIC)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const containerCenter =
        container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2;
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

  const handleDotClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    setActiveIndex(index);

    scrollRef.current.children[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-secondary/50"
    >
      {/* Heading */}
      <div className="container-narrow mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            Voices of Our Artists
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 lg:px-20 pb-4"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-[320px] md:w-[400px] snap-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  scale: activeIndex === idx ? 1 : 0.95,
                  opacity: activeIndex === idx ? 1 : 0.7,
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full flex flex-col"
              >
                <svg
                  className="w-10 h-10 text-accent/40 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-foreground font-sans leading-relaxed mb-8 flex-grow">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-sans font-medium text-sm">
                      {item.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-medium text-foreground">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-sans">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <motion.div
            key={idx}
            onClick={(e) => handleDotClick(idx, e)}
            animate={{
              width: activeIndex === idx ? 24 : 8,
              opacity: activeIndex === idx ? 1 : 0.4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-2 rounded-full cursor-pointer bg-primary"
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
