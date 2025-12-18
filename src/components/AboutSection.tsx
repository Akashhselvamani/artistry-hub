import aboutImage from "@/assets/about-artist.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Nurturing Artistry, Celebrating Vision
            </h2>
            
            <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
              <p>
                We are a creative agency built on passion, artistry, and meaningful relationships. 
                Our foundation lies in the belief that every artist carries a unique voice—one that 
                deserves to be heard, celebrated, and shared with the world.
              </p>
              
              <p>
                Every artist we represent is guided, supported, and celebrated for their unique voice. 
                We don't just manage talent; we nurture dreams, foster growth, and create pathways 
                for artists to reach their fullest potential.
              </p>
              
              <p className="text-foreground font-medium italic border-l-4 border-accent pl-5">
                "Art is not what you see, but what you make others see."
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <span className="block text-4xl font-serif text-primary">150+</span>
                <span className="text-sm text-muted-foreground font-sans">Artists Represented</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-primary">12</span>
                <span className="text-sm text-muted-foreground font-sans">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-primary">300+</span>
                <span className="text-sm text-muted-foreground font-sans">Successful Projects</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Creative artist in studio"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-card"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
