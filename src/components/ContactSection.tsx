import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "(213) 268-9542", href: "tel:+12132689542" },
  { icon: Mail, label: "Email Us", value: "info@shsofficial.com", href: "mailto:info@shsofficial.com" },
  { icon: MapPin, label: "Visit Us", value: "14970 Potomac Heights Pl, Unit 113, Woodbridge, VA 22191", href: "#" },
  { icon: Clock, label: "Business Hours", value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM", href: "#" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-section-light via-background to-section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-body text-sm font-semibold mb-6 border border-primary/10">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready to Start Your <span className="text-primary">Project?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Get in touch with our team for a free consultation and detailed quote. 
              We respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="font-body text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-foreground font-semibold">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Send Us a Message
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you promptly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-14 rounded-xl border-border/50 focus:border-primary"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-14 rounded-xl border-border/50 focus:border-primary"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="h-14 rounded-xl border-border/50 focus:border-primary"
                />
              </div>
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="resize-none rounded-xl border-border/50 focus:border-primary"
              />
              <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base font-semibold group">
                Send Message
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;