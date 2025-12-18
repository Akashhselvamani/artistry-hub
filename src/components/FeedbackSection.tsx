const feedbacks = [
  {
    id: 1,
    message: "The professionalism and creativity exceeded our expectations. Every detail felt personal and thoughtfully crafted.",
    name: "Priya S.",
    project: "Brand Collaboration",
    initials: "PS"
  },
  {
    id: 2,
    message: "An exceptional experience from start to finish. They brought our vision to life with stunning artistry.",
    name: "James Mitchell",
    project: "Gallery Exhibition",
    initials: "JM"
  },
  {
    id: 3,
    message: "Working with their artists was transformative for our campaign. The results spoke volumes.",
    name: "Lisa Wong",
    project: "Corporate Partnership",
    initials: "LW"
  },
  {
    id: 4,
    message: "Their attention to detail and commitment to excellence made our project truly memorable.",
    name: "Robert Klein",
    project: "Private Commission",
    initials: "RK"
  },
  {
    id: 5,
    message: "A seamless collaboration that resulted in artwork beyond our imagination. Highly recommended.",
    name: "Aisha Patel",
    project: "Interior Design Project",
    initials: "AP"
  }
];

const FeedbackSection = () => {
  return (
    <section id="feedback" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-narrow mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            What Our Clients Say
          </h2>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 lg:px-20 pb-4">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="flex-shrink-0 w-[300px] md:w-[360px] snap-center"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:shadow-card hover:-translate-y-1">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
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
                    <p className="font-sans font-medium text-foreground">{feedback.name}</p>
                    <p className="text-xs text-muted-foreground font-sans">{feedback.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {feedbacks.slice(0, 3).map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === 0 ? 'bg-accent w-6' : 'bg-accent/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
