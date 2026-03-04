import heroVideo from "@/assets/Banner.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6">
          Certified Beauty Artist Saranya
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
          Makeup Elegance for Every Special Moment
        </h1>

        <p className="text-lg md:text-xl text-white/80 font-sans font-light max-w-2xl mx-auto mb-12">
          Dedicated to making you feel confident and beautiful on your big day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-4 bg-accent text-black font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore Our Artists →
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-white/40 text-white rounded-full hover:bg-white/10 transition"
          >
            Work With Us →
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;