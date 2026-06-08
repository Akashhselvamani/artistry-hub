import { MapPin, Calendar, Check, Gift, Phone, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "HD Makeup",
    popular: false,
    details: [
      "Premium High-Definition Makeup finish",
      "Hair extension styling included",
      "Premium cosmetic lenses included",
      "Faux eyelashes setting included",
      "Saree draping & safety pins included",
      "On-site makeup setup"
    ]
  },
  {
    name: "HD Pro Makeup",
    popular: true,
    details: [
      "Fully customized premium HD Makeup finish",
      "Premium custom-tailored hair extension",
      "Premium cosmetic lenses included",
      "Double-layered luxury eyelashes",
      "Saree draping, jewelry setting & safety pins",
      "On-site bridal styling setup",
      "Pre-bridal consultation"
    ]
  },
  {
    name: "Airbrush Bridal Makeup",
    popular: false,
    details: [
      "Flawless silicone-based Airbrush technique",
      "Extreme long-lasting, water-resistant wear",
      "Full hair extensions & custom styling",
      "Premium lenses & lashes",
      "Perfect matte/dewy photo-ready finish",
      "Saree draping & jewelry setting assistance",
      "Pre-bridal skin preparation advice"
    ]
  },
  {
    name: "Bridesmaid / Party Makeup",
    popular: false,
    details: [
      "HD Party Makeover for family/bridesmaids",
      "Standard hairstyling included",
      "Eyelashes included",
      "Saree draping or outfit styling assistance",
      "Flawless look matching the wedding aesthetic"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = (isPopular: boolean) => ({
  hidden: { opacity: 0, y: 30, scale: isPopular ? 1.05 : 1 },
  show: {
    opacity: 1,
    y: 0,
    scale: isPopular ? 1.05 : 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
});

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-narrow relative z-10">
        
        {/* Top bar details (Location & Status) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-accent/20 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Location</p>
              <a
                href="https://share.google/CNKuMIxPvuZi7eEqi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg font-bold text-foreground hover:text-primary hover:underline transition-colors"
              >
                Chengalpattu, TN
              </a>
            </div>
          </div>

          <div className="flex-1 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground font-bold leading-tight">
              Makeup Packages
            </h2>
            <div className="h-[1px] w-16 bg-accent mx-auto mt-2" />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500/5 border border-green-500/10 flex items-center justify-center text-green-600 relative">
              <Calendar className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-green-600 bg-green-500/10 px-3 py-0.5 rounded-full border border-green-500/20 inline-block">
                📅 Bookings Open
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 py-4"
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants(pkg.popular)}
              whileHover={{
                y: -12,
                scale: pkg.popular ? 1.08 : 1.04,
                borderColor: "rgba(203, 178, 106, 0.4)",
                boxShadow: pkg.popular
                  ? "0 25px 50px -12px rgba(76, 8, 30, 0.25)"
                  : "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className={`flex flex-col rounded-3xl p-6 md:p-8 transition-colors duration-300 relative border ${
                pkg.popular
                  ? "bg-[#1C060D] text-white border-accent/30 z-10"
                  : "bg-card text-foreground border-border/60 shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-accent text-foreground font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl font-bold mb-4">{pkg.name}</h3>
              </div>

              {/* Package Detail list */}
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                    <span className={`text-xs font-sans leading-relaxed ${pkg.popular ? "text-white/90" : "text-muted-foreground"}`}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book Button inside card */}
              <a
                href="#contact"
                className={`w-full py-3 text-center font-sans text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 ${
                  pkg.popular
                    ? "bg-accent text-foreground hover:bg-white hover:text-primary shadow-md"
                    : "bg-primary text-white hover:bg-accent hover:text-foreground shadow-sm hover:shadow-md"
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offer Luxury Invitation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
          whileHover={{
            y: -6,
            boxShadow: "0 25px 50px -12px rgba(76, 8, 30, 0.2)",
            borderColor: "rgba(203, 178, 106, 0.5)"
          }}
          className="mt-16 bg-[#1C060D] text-white rounded-3xl p-8 border border-accent/30 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300"
        >
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center text-accent flex-shrink-0 border border-accent/20">
              <Gift className="w-8 h-8 animate-bounce" />
            </div>
            <div className="space-y-1.5 text-left">
              <span className="inline-block bg-accent/20 border border-accent/30 text-accent font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-0.5 rounded-full">
                🎁 Special Offer
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">
                Book 2 Sessions &amp; Save
              </h3>
              <p className="text-white/80 font-sans text-sm font-light">
                Get <span className="text-accent font-semibold">Bridesmaid Makeup</span> or <span className="text-accent font-semibold">Groom Makeup</span> absolutely <span className="text-green-400 font-bold">FREE</span>.
              </p>
            </div>
          </div>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-foreground font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-md flex-shrink-0 relative z-10 border border-accent/20"
          >
            Claim This Offer
          </a>
        </motion.div>

        {/* Direct Contact / Support Info */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground font-sans">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            <span>Call directly: </span>
            <a href="tel:+919944530508" className="text-primary font-semibold hover:underline">
              +91 99445 30508
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span>Best time to talk: <strong>9 AM – 6 PM IST</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagesSection;
