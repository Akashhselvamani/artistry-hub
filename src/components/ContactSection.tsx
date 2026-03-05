import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    const data = Object.fromEntries(formDataObj.entries());

    try {
      await fetch("/.netlify/functions/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out.",
      });

      // Reset state
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset form
      form.reset();
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
              Your Beauty Journey Starts Here
            </h2>

            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Great ideas deserve the right partnership. Let’s connect and build
              something impactful together.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  📧
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Us</p>
                  <a
                    href="mailto:saranyavikat@saranyavikartmakeover.art"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    saranyavikat@saranyavikartmakeover.art
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-medium text-foreground">Visit Us</p>
                  <a
                    href="https://maps.app.goo.gl/EY4hfyYoYYBhV1fBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Chengalpattu
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-medium text-foreground">Call Us</p>
                  <a
                    href="tel:9944530508"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    9944530508
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="space-y-6">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl"
                />

                <input
  type="tel"
  name="phone"
  placeholder="Phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // allow only numbers
    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    }
  }}
  required
  maxLength={10}
  pattern="[0-9]{10}"
  className="w-full px-4 py-3 border rounded-xl"
/>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border rounded-xl resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition"
                >
                  Send Message
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