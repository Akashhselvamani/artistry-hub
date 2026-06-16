import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Calendar, Clock, Send, Sparkles } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "HD Bridal Makeup",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        title: "Booking Enquiry Sent! ✨",
        description: "Thank you, Saranya will reach out to you shortly.",
      });

      // Reset state
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "HD Bridal Makeup",
        message: "",
      });

      // Reset form
      form.reset();
    } catch {
      toast({
        title: "Enquiry Failed",
        description: "Submission failed. Please call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold border border-primary/10">
                <Sparkles className="w-3 h-3 text-accent" />
                Book Consultation
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground font-bold leading-tight">
                Secure Your Special Date
              </h2>
              <p className="text-muted-foreground font-sans font-light leading-relaxed">
                Whether it's your wedding day, reception, engagement, or bridesmaid styling, Saranya will craft a bespoke look tailored to you. Let's make you look unforgettable.
              </p>
              <div className="h-[2px] w-20 bg-accent" />
            </div>

            {/* Direct Instant Booking Button (WhatsApp removed, call aligned) */}
            <div className="pt-2">
              <a
                href="tel:+919944530508"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white rounded-full shadow-lg shadow-primary/15 hover:bg-accent hover:text-foreground transition-all duration-300 font-sans text-sm uppercase tracking-widest font-bold w-full text-center border border-accent/20"
              >
                {/* <Phone className="w-5 h-5 text-accent fill-accent animate-bounce" /> */}
                Call +91 99445 30508
              </a>
            </div>

            {/* Structured Info Cards */}
            <div className="space-y-4 pt-6 border-t border-accent/15">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-sm">Studio Location</p>
                 <a
  href="https://share.google/CNKuMIxPvuZi7eEqi"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xs text-muted-foreground font-sans hover:text-accent transition-colors"
>
  Chengalpattu
</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-sm">Calling Hours</p>
                  <p className="text-xs text-muted-foreground font-sans">9:00 AM – 6:00 PM IST (Every day)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 border border-accent/20 shadow-xl relative overflow-hidden bg-white/95 dark:bg-charcoal/95">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Booking Enquiry Form</h3>
              
              <form
                name="contact"
                method="post"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5 text-left"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-widest font-semibold text-muted-foreground">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal/50 border border-accent/20 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-widest font-semibold text-muted-foreground">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          setFormData((prev) => ({ ...prev, phone: value }));
                        }
                      }}
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal/50 border border-accent/20 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-widest font-semibold text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal/50 border border-accent/20 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Event Date */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-widest font-semibold text-muted-foreground">Wedding / Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal/50 border border-accent/20 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm transition-all text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Makeup Service Type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-sans uppercase tracking-widest font-semibold text-muted-foreground">Required Makeup Service</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-charcoal/50 border border-accent/20 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm transition-all text-muted-foreground"
                  >
                    <option value="HD Bridal Makeup">HD Bridal Makeup </option>
                    <option value="HD Pro Bridal Makeup">HD Pro Bridal Makeup </option>
                    <option value="Airbrush Bridal Makeup">Airbrush Bridal Makeup </option>
                    <option value="Bridesmaid / Party Makeup">Bridesmaid / Party Makeup </option>
                    <option value="Combo Package (2+ Sessions)">Combo Package (2+ Sessions - Special Offer)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-sans uppercase tracking-widest font-semibold text-muted-foreground">Event details / Special Requests</label>
                  <textarea
                    name="message"
                    placeholder="Provide information about the location, venue, timing, and other styling requests..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-charcoal/50 border border-accent/20 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white rounded-xl hover:bg-accent hover:text-foreground font-sans text-xs uppercase tracking-widest font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  {isSubmitting ? "Submitting..." : "Send Booking Request"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;