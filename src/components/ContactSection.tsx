import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      try {
        await fetch("/.netlify/functions/send-mail", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out.",
        });

        // setFormData({
        //   fullName: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        // });
      } catch {
        toast({
          title: "Error",
          description: "Submission failed.",
          variant: "destructive",
        });
      }
    };





  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Let's Create Something Beautiful Together
            </h2>
            
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Whether you're an artist seeking representation or a brand looking to collaborate, 
              we'd love to hear from you. Every great partnership begins with a conversation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">Email Us</p>
                  <a href= "mailto:saranyavikat@saranyavikartmakeover.art" className="text-muted-foreground font-sans">saranyavikat@saranyavikartmakeover.art</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
  <p className="font-sans font-medium text-foreground">Visit Us</p>
  <a
    href="https://maps.app.goo.gl/EY4hfyYoYYBhV1fBA"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground font-sans hover:text-foreground transition-colors duration-200"
  >
    Chengalpattu
  </a>
</div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div>
           <form
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
              <div className="space-y-6">
                <div>
  <label
    htmlFor="fullName"
    className="block text-sm font-sans font-medium text-foreground mb-2"
  >
    Full Name
  </label>

  <input
    type="text"
    id="fullName"
    name="fullName"
    value={formData.fullName}
    onChange={(e) => {
      const value = e.target.value;
      if (value.length <= 35) {
        handleChange(e);
      }
    }}
    maxLength={35}
    required
    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
    placeholder="Enter your full name"
  />
</div>
                
                <div>
  <label
    htmlFor="email"
    className="block text-sm font-sans font-medium text-foreground mb-2"
  >
    Email Address
  </label>

  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={(e) => {
      const value = e.target.value;
      if (value.length <= 70) {
        handleChange(e);
      }
    }}
    maxLength={70}
    required
    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
    placeholder="Enter your email"
  />
</div>
               <div className="flex items-center">
  {/* Country Code */}
  <span className="px-4 py-3 bg-muted border border-border border-r-0 rounded-l-xl text-sm font-sans text-foreground">
    +91
  </span>

  {/* Phone Input */}
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 10) {
        handleChange({
          target: { name: "phone", value },
        });
      }
    }}
    maxLength={10}
    pattern="[0-9]{10}"
    inputMode="numeric"
    className="w-full px-4 py-3 bg-background border border-border border-l-0 rounded-r-xl font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
    placeholder="XXXXXXXXXX"
  />
</div>

                
                <div>
                  <label htmlFor="message" className="block text-sm font-sans font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell us about your big day"
                  />
                </div>
                
                <button
  type="submit"
  className="group relative w-full py-4 bg-primary text-primary-foreground font-sans font-medium rounded-xl overflow-hidden
             transition-all duration-300
             hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1
             active:translate-y-0 active:shadow-md"
>
  {/* Shine animation */}
  <span
    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full
               bg-gradient-to-r from-transparent via-white/30 to-transparent
               transition-transform duration-700"
  />

  {/* Button text */}
  <span className="relative z-10">Send Message</span>
</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
