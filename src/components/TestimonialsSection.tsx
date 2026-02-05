import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner, Woodbridge",
    initials: "SJ",
    content:
      "SHS installed our new AC system and it's been running perfectly! The team was professional, on-time, and cleaned up everything. Highly recommend for any HVAC needs!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner, Manassas",
    initials: "MC",
    content:
      "They handle all the HVAC for our restaurant. When our AC went out during a heat wave, they had someone there within 2 hours. That's the kind of service you can't find anywhere else.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager, Fairfax",
    initials: "ER",
    content:
      "I manage 50+ rental units and SHS is my go-to for all heating and cooling. Fair prices, quick response, and they always get it right the first time.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white/90 rounded-full font-body text-sm font-semibold mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Trusted by Thousands of Virginia Families
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg md:text-xl">
            See why homeowners and businesses across Virginia choose SHS 
            for their heating and cooling needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl relative group hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent drop-shadow-sm"
                  />
                ))}
              </div>
              
              <p className="font-body text-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-display font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent">4.9</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-1">Google Rating</div>
            </div>
            <div className="h-10 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent">A+</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-1">BBB Rating</div>
            </div>
            <div className="h-10 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent">500+</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-1">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;