import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0 animation-delay-100">
          Creative Artist Agency
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-tight mb-8 animate-fade-up opacity-0 animation-delay-200">
          Where Creativity Blooms & Talent Finds Its Voice
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 font-sans font-light max-w-2xl mx-auto mb-12 animate-fade-up opacity-0 animation-delay-300">
          Representing artists who inspire, move, and redefine beauty and art.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-400">
          <a
            href="#artists"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-sans font-medium rounded-full transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-lg"
          >
            <span>Explore Our Artists</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-sans font-medium rounded-full transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
          >
            <span>Collaborate With Us</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
