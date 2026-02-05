import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "Licensed & Insured",
    "24/7 Emergency Service",
    "Free Estimates",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-overlay/90 via-hero/80 to-hero-overlay/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full font-body text-sm font-semibold mb-6">
              Trusted Local Professionals
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Quality Service You Can{" "}
            <span className="text-accent">Rely On</span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            We've been serving our community with excellence for over 20 years.
            Professional, reliable, and always on time – that's our promise to you.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-body">{item}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl">
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;