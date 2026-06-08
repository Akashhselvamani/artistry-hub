import { Sparkles, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#150209] text-white/90 pt-20 pb-24 md:pb-16 px-6 md:px-12 lg:px-20 border-t border-accent/20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top CTA */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-3 text-left">
            <span className="inline-flex items-center gap-1.5 text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Bookings & Consultations
            </span>

            <p className="font-serif text-2xl md:text-4xl font-bold text-white tracking-wide">
              Ready to look like your most beautiful self?
            </p>

            <p className="text-white/60 font-sans text-sm font-light">
              Call to secure your wedding or reception date. We travel on-location.
            </p>
          </div>

          <a
            href="tel:+919944530508"
            className="flex items-center gap-2.5 px-8 py-4 bg-primary text-white hover:bg-accent hover:text-foreground font-sans text-xs uppercase tracking-[0.15em] font-bold rounded-full transition-all duration-300 shadow-md shadow-primary/10 border border-accent/25 whitespace-nowrap"
          >
            {/* <Phone className="w-4 h-4 text-accent animate-pulse" /> */}
            Call +91 99445 30508
          </a>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Saranyavikat Makeover
              </span>
            </div>

            <p className="text-white/70 font-sans text-sm font-light leading-relaxed max-w-md">
              Professional makeup services specializing in premium bridal,
              reception, and engagement makeovers. Bringing your dream wedding
              look to life in Chengalpattu.
            </p>

            <p className="font-serif italic text-accent text-base tracking-wide pt-1">
              "Every bride deserves to look like the most beautiful version of herself."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Navigation
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#packages"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300"
                >
                  Pricing & Packages
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300"
                >
                  Book A Date
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Contact Details
            </h4>

            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="https://share.google/CNKuMIxPvuZi7eEqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300"
                >
                  Chengalpattu, Tamil Nadu
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+919944530508"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300"
                >
                  +91 99445 30508
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:saranya@saranyamakeover.in"
                  className="text-white/70 hover:text-accent font-light transition-colors duration-300 break-all"
                >
                  saranya@saranyamakeover.in
                </a>
              </li>

              <li className="pt-2">
                <a
                  href="https://www.instagram.com/saranyavikart_mua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300 bg-white/5"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/50 text-xs font-light">
            © Copyright  {currentYear} . All rights reserved.
          </p>

          <p className="text-white/50 text-xs font-light">
            Site developed and maintained by{" "}
            <a
              href="https://reromspaces.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-300 font-medium"
            >
              Reromspaces
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;