import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-2xl text-primary-foreground">
          <span className={scrolled ? "text-foreground" : ""}>Saranya Vikart Makeover</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Testimonials", "Feedback", "Contact",].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* <a
          href="#contact"
          className={`hidden md:inline-flex px-5 py-2.5 font-sans text-sm font-medium rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20"
          }`}
        >
          Get in Touch
        </a> */}
        
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
