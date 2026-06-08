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
      className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 ${
        scrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full bg-white/80 dark:bg-black/85 backdrop-blur-md border border-border/50 py-3 px-6 md:px-10 shadow-lg shadow-primary/5"
          : "top-0 w-full max-w-none rounded-none bg-transparent py-6 px-6 md:px-12 lg:px-20 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Brand Name Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span className="font-serif text-lg md:text-xl tracking-[0.1em] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold">
            Saranyavikat Makeover
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-sans text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:w-3/4 ${
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
            className={`px-5 py-2 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full border transition-all duration-300 ${
              scrolled
                ? "bg-primary text-white border-primary hover:bg-transparent hover:text-primary shadow-sm"
                : "bg-white/10 text-white border-white/35 hover:bg-white hover:text-primary"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-accent focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white/98 dark:bg-black/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 animation-fade-in p-6">
          <button
            className="absolute top-6 right-6 p-2 text-accent focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-serif text-xl tracking-[0.08em] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold">
              Saranyavikat
            </span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-widest text-foreground hover:text-primary transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-10 py-4 bg-primary text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-accent hover:text-foreground transition-all duration-300 shadow-md shadow-primary/10 border border-accent/25"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
