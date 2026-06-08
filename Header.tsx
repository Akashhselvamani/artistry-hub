import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-charcoal/85 backdrop-blur-md border-b border-accent/20 py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Brand Name Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          <span className="font-serif text-xl md:text-2xl tracking-wide bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold">
            Saranyavikat Makeover
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-sans text-sm tracking-widest uppercase font-medium transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`px-6 py-2.5 font-sans text-xs uppercase tracking-widest font-semibold rounded-full border transition-all duration-300 ${
              scrolled
                ? "bg-primary text-white border-primary hover:bg-transparent hover:text-primary"
                : "bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#D4AF37] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-white/95 dark:bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 animation-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-foreground hover:text-primary transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-white font-sans text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
