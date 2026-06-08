import brideImg1 from "../assets/portfolio/look_1_1.jpg";
import brideImg2 from "../assets/portfolio/look_4_1.jpg";
import { Sparkles, Heart, Award, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Gold Leaf or Glow */}
      <div className="absolute top-1/2 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Asymmetrical Image Collage */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              {/* Primary Image */}
              <div className="col-span-8 relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-accent/20">
                  <img
                    src={brideImg1}
                    alt="Traditional Indian Bride Makeup"
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Secondary Overlapping Image */}
              <div className="col-span-6 absolute bottom-[-30px] right-[-10px] w-[60%] z-20">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-background shadow-primary/10">
                  <img
                    src={brideImg2}
                    alt="Bridal Hair and Styling details"
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-accent/10 rounded-3xl -z-10 animate-pulse" />
          </div>
          
          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="inline-block text-accent font-sans text-xs uppercase tracking-widest font-bold">
                Meet the Artist
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight font-bold">
                Saranya Vikat
              </h2>
              <div className="h-[2px] w-20 bg-accent" />
            </div>
            
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-base">
             <p>
  As a premier certified bridal makeup artist based in{" "}
  <a
    href="https://share.google/CNKuMIxPvuZi7eEqi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-medium hover:underline"
  >
    Chengalpattu
  </a>
  , Saranya specializes in natural beauty enhancement. She believes that every bride deserves to look like the most beautiful version of herself on her wedding day.
</p>
              <p>
                Known for her meticulous attention to detail and expertise in high-definition (HD) and airbrush makeup technologies, Saranya crafts customized bridal looks that are flawless in person and stunning in high-resolution photography. From elegant Tamil wedding styling to contemporary reception glam, her artistry ensures comfort, longevity, and radiance.
              </p>
            </div>
            
            {/* Core Values / Specialty Bullet Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">Natural Beauty</p>
                  <p className="text-xs text-muted-foreground">Flawless skin-like finishes without feeling heavy.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">HD & Airbrush</p>
                  <p className="text-xs text-muted-foreground">Certified expert in long-wear makeup styling.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">Custom Styling</p>
                  <p className="text-xs text-muted-foreground">Tailored hair extensions, draping, and jewelry setting.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">On-Location Service</p>
                  <p className="text-xs text-muted-foreground">Premium styling services delivered at your wedding venue.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-primary font-serif font-medium italic border-l-4 border-accent pl-5 text-lg">
                "Every bride deserves to look like the most beautiful version of herself."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;