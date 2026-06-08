import { Instagram, Heart, MessageCircle, Sparkles } from "lucide-react";

// Import images for simulated Instagram grid
import img1 from "../assets/portfolio/traditional_maroon_bride.jpg";
import img2 from "../assets/portfolio/reception_saree_bride.jpg";
import img3 from "../assets/portfolio/haldi_yellow_bride.jpg";
import img4 from "../assets/portfolio/christian_wedding_gown.jpg";
import img5 from "../assets/portfolio/engagement_makeup.jpg";
import img6 from "../assets/portfolio/reception_lehenga_bride.jpg";

const instagramItems = [
  { image: img1, likes: "184", comments: "12" },
  { image: img2, likes: "235", comments: "18" },
  { image: img3, likes: "312", comments: "27" },
  { image: img4, likes: "159", comments: "9" },
  { image: img5, likes: "287", comments: "15" },
  { image: img6, likes: "402", comments: "32" }
];

const InstagramSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-accent/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold border border-primary/10">
              <Instagram className="w-3.5 h-3.5 text-accent" />
              Follow Our Journey
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground font-bold">
              Behind The Scenes on Instagram
            </h2>
            <p className="text-muted-foreground text-sm font-sans font-light">
              Follow <a href="https://www.instagram.com/saranyavikart_mua" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">@saranyavikart_mua</a> for daily bridal inspiration, tutorials, and makeovers.
            </p>
          </div>

          <a
            href="https://www.instagram.com/saranyavikart_mua"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            Follow Instagram
          </a>
        </div>

        {/* 6-Column Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramItems.map((item, index) => (
            <a
              key={index}
              href="https://www.instagram.com/saranyavikart_mua"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md border border-accent/10 block"
            >
              <img
                src={item.image}
                alt="Instagram bridal look detail"
                className="w-full h-full object-cover scale-100 group-hover:scale-108 transition-all duration-500"
              />

              {/* Hover overlay stats */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="font-sans text-xs font-semibold">{item.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="font-sans text-xs font-semibold">{item.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
