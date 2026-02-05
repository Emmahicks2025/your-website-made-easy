import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Thermometer, Wind, Snowflake } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const highlights = [
    "EPA Certified Technicians",
    "24/7 Emergency HVAC Service",
    "Free In-Home Estimates",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full font-body text-sm font-medium mb-8 border border-white/10">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Virginia's Premier HVAC Specialists
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Heating & Cooling{" "}
            <span className="text-gradient">Done Right</span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            SHS Services LLC delivers expert HVAC installation, repair, and maintenance 
            throughout Virginia. Keep your home comfortable year-round with our certified technicians.
          </p>

          <div
            className="flex flex-wrap gap-6 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 text-primary-foreground/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-accent fill-accent/20" />
                <span className="font-body font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-5 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl" className="group">
              Schedule Service
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Call (213) 268-9542
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-16 pt-10 border-t border-white/10 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <div className="text-center">
                <Thermometer className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">20+</div>
                <div className="font-body text-sm text-primary-foreground/60 mt-1">Years HVAC Experience</div>
              </div>
              <div className="h-12 w-px bg-white/10 hidden md:block"></div>
              <div className="text-center">
                <Wind className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">5,000+</div>
                <div className="font-body text-sm text-primary-foreground/60 mt-1">Systems Installed</div>
              </div>
              <div className="h-12 w-px bg-white/10 hidden md:block"></div>
              <div className="text-center">
                <Snowflake className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">99%</div>
                <div className="font-body text-sm text-primary-foreground/60 mt-1">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;