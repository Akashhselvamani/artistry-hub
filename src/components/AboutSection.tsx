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
              Where Beauty Meets Expertise
            </h2>
            
            <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
              <p>
                Saranya Vikart Makeover Artist in Chengalpattu is a trusted and leading makeover specialist with nearly a decade of experience, specializing in bridal makeovers and a wide range of beauty services for all occasions. Known for delivering high-quality, personalized results.
              </p>
              
              <p>
                Our commitment to excellence, use of professional techniques, and affordable pricing have earned us the appreciation of many happy customers, making us a reliable choice for flawless, elegant, and stunning makeovers.
              </p>
              
              <p className="text-foreground font-medium italic border-l-4 border-accent pl-5">
                "Art is not what you see, but what you make others see."
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <span className="block text-4xl font-serif text-primary">150+</span>
                <span className="text-sm text-muted-foreground font-sans">Valued Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-primary">6+</span>
                <span className="text-sm text-muted-foreground font-sans">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-primary">300+</span>
                <span className="text-sm text-muted-foreground font-sans">Successful Makeovers</span>
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
