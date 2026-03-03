import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const feedbacks = [
  {
    id: 1,
    message:
      "The professionalism and creativity exceeded our expectations. Every detail felt personal and thoughtfully crafted.",
    name: "Priya S.",
    project: "Brand Collaboration",
    initials: "PS",
  },
  {
    id: 2,
    message:
      "An exceptional experience from start to finish. They brought our vision to life with stunning artistry.",
    name: "James Mitchell",
    project: "Gallery Exhibition",
    initials: "JM",
  },
  {
    id: 3,
    message:
      "Working with their artists was transformative for our campaign. The results spoke volumes.",
    name: "Lisa Wong",
    project: "Corporate Partnership",
    initials: "LW",
  },
  {
    id: 4,
    message:
      "Their attention to detail and commitment to excellence made our project truly memorable.",
    name: "Robert Klein",
    project: "Private Commission",
    initials: "RK",
  },
  {
    id: 5,
    message:
      "A seamless collaboration that resulted in artwork beyond our imagination. Highly recommended.",
    name: "Aisha Patel",
    project: "Interior Design Project",
    initials: "AP",
  },
];

const FeedbackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // ✅ Sync activeIndex on manual scroll
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
      id="feedback"
      className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5"
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
          <span className="inline-block text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            What Our Clients Say
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 lg:px-20 pb-4"
        >
          {feedbacks.map((feedback, idx) => (
            <motion.div
              key={feedback.id}
              className="flex-shrink-0 w-[300px] md:w-[360px] snap-center"
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
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-foreground/90 font-sans leading-relaxed mb-8 flex-grow">
                  "{feedback.message}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-primary-foreground font-sans font-medium text-sm">
                      {feedback.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">
                      {feedback.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-sans">
                      {feedback.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {feedbacks.map((_, idx) => (
          <motion.div
            key={idx}
            onClick={(e) => handleDotClick(idx, e)}
            animate={{
              width: activeIndex === idx ? 24 : 8,
              opacity: activeIndex === idx ? 1 : 0.4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-2 rounded-full cursor-pointer bg-accent"
          />
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
