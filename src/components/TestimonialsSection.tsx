const testimonials = [
  {
    id: 1,
    quote: "Working with this agency elevated my career and confidence. They truly understand the art of representation.",
    name: "Ananya R.",
    role: "Creative Artist",
    initials: "AR"
  },
  {
    id: 2,
    quote: "The team's dedication to nurturing talent is unparalleled. They helped me find my authentic voice.",
    name: "Marcus Chen",
    role: "Visual Artist",
    initials: "MC"
  },
  {
    id: 3,
    quote: "More than an agency, they became family. Their guidance transformed how I approach my craft.",
    name: "Sofia Laurent",
    role: "Sculptor",
    initials: "SL"
  },
  {
    id: 4,
    quote: "They don't just manage careers; they cultivate dreams. I'm grateful for their unwavering support.",
    name: "David Okonkwo",
    role: "Mixed Media Artist",
    initials: "DO"
  },
  {
    id: 5,
    quote: "Professional, passionate, and genuinely invested in every artist's success. A true partner in creativity.",
    name: "Elena Vasquez",
    role: "Painter",
    initials: "EV"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container-narrow mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            Voices of Our Artists
          </h2>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 lg:px-20 pb-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[320px] md:w-[400px] snap-center"
            >
              <div className="card-elevated p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-accent/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                
                <p className="text-foreground font-sans leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-sans font-medium text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-sans">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      </div>
      
      {/* Scroll Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.slice(0, 3).map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === 0 ? 'bg-primary w-6' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
