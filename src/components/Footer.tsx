const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl mb-4">Saranya Vikart Makeover</h3>
            <p className="text-background/70 font-sans leading-relaxed max-w-md">
              Enhancing Every Face Beautifully Styled With Precision, Designed With Heart.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium mb-4 text-background/90">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/60 font-sans hover:text-background transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#artists" className="text-background/60 font-sans hover:text-background transition-colors duration-300">
                  Our Artists
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/60 font-sans hover:text-background transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/60 font-sans hover:text-background transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
         <div>
  <h4 className="font-sans font-medium mb-4 text-background/90">
    Follow Us
  </h4>

  <div className="flex gap-4">
    <a
      href="https://www.instagram.com/saranyavikart_mua"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center
                 hover:bg-background/20 transition-colors duration-300"
      aria-label="Instagram"
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>
  </div>
</div>

        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex items-center justify-between">
 {/* Left */}
  <p className="text-background/50 font-sans text-sm">
    © 2026 Saranya Vikart Makeover. All rights reserved.
  </p>

  {/* Right */}
  <p className="text-background/50 font-sans text-sm">
    Site is developed and maintained by{" "}
    <a
      href="https://reromspaces.com/"
      className="text-background/70 hover:text-background transition-colors"
    >
      Reromespace
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
