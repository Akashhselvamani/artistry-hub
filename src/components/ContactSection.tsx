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

    e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const data = Object.fromEntries(formData.entries());

      try {
        await fetch("/.netlify/functions/send-mail", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
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
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">
                    Email Us
                  </p>
                  <a
                    href="mailto:saranyavikat@saranyavikartmakeover.art"
                    className="text-muted-foreground font-sans hover:text-foreground transition-colors duration-200"
                  >
                    saranyavikat@saranyavikartmakeover.art
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">
                    Visit Us
                  </p>
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

              {/* Call Us (MATCHED ICON SIZE) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 5.25c0-.828.672-1.5 1.5-1.5h3
                         c.69 0 1.287.468 1.447 1.14l.72 2.88
                         a1.5 1.5 0 01-.43 1.466l-1.14 1.14
                         a15.75 15.75 0 007.034 7.034l1.14-1.14
                         a1.5 1.5 0 011.466-.43l2.88.72
                         c.672.16 1.14.757 1.14 1.447v3
                         c0 .828-.672 1.5-1.5 1.5h-1.5
                         C9.3 22.5 2.25 15.45 2.25 6.75v-1.5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">
                    Call Us
                  </p>
                  <a
                    href="tel:9944530508"
                    className="text-muted-foreground font-sans hover:text-foreground transition-colors duration-200"
                  >
                    9944530508
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