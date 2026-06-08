import { ArrowRight, Sparkles } from "lucide-react";
import brideImg from "../assets/portfolio/traditional_tamil_bride.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#120207] via-[#121212] to-[#120207] pt-28 pb-16 overflow-hidden">
      
      {/* Decorative Gold Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-widest font-semibold">
                Chengalpattu's Premier Bridal Artist
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.15] font-bold">
              Transforming Brides Into Their{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent italic font-medium">
                  Most Beautiful
                </span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-accent/20 -z-10" />
              </span>{" "}
              Selves
            </h1>

            <p className="text-lg md:text-xl font-sans text-white/80 font-light tracking-wide max-w-xl">
              Professional HD Makeup • Airbrush Makeup • Bridal &amp; Reception Styling
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-sans text-sm uppercase tracking-widest font-semibold rounded-full shadow-lg shadow-primary/20 hover:bg-accent hover:text-foreground transition-all duration-300 border border-accent/20 group"
              >
                Book Your Date
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-foreground/10 shadow-primary/30">

              <img
                src={brideImg}
                alt="Saranyavikat Makeover South Indian Bride"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-black/30 rounded-2xl text-center border border-accent/35">
                <p className="font-serif text-lg text-accent font-semibold">
                  9944530508
                </p>
                <p className="text-[10px] text-white/60 uppercase tracking-widest">
                  Exquisite Bridal Elegance
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">
          Scroll to discover
        </span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent/60 rounded-full" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;