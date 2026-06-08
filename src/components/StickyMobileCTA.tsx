import { Phone } from "lucide-react";

const StickyMobileCTA = () => {
  const callLink = "tel:+919944530508";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 dark:bg-charcoal/90 backdrop-blur-md border-t border-accent/20 px-4 py-3 shadow-lg flex animate-fade-up">
      {/* Full Width Primary Call CTA */}
      <a
        href={callLink}
        className="flex-1 h-12 bg-primary text-white hover:bg-accent hover:text-foreground font-sans text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2.5 shadow-md shadow-primary/15 transition-all duration-300"
      >
        <Phone className="w-4 h-4 text-accent fill-accent animate-bounce" />
        Call +91 99445 30508
      </a>
    </div>
  );
};

export default StickyMobileCTA;
