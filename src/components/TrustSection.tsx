import { Sparkles, Heart, ShieldCheck, MapPin } from "lucide-react";

const TrustSection = () => {
  const trustItems = [
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "500+ Happy Brides",
      description: "Over a hundred brides transformed and beautifully styled for their big day."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Premium Makeup Products",
      description: "Using only top-tier international luxury brands for long-lasting flawless finishes."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Customized Bridal Styling",
      description: "Tailoring draping, extensions, hair styling, and lenses to match your vision."
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "On-Location Services",
      description: "Professional makeup artists traveling to your venue in Chengalpattu & beyond."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-y border-accent/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card/45 backdrop-blur-md rounded-2xl border border-border/40 transition-all duration-300 hover:scale-102 hover:border-accent/30 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-md border border-accent/15 mb-4 hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
