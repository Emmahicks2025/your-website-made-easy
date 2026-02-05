import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    initials: "SJ",
    content:
      "Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    initials: "MC",
    content:
      "We've been using their services for our office building for years. Reliable, trustworthy, and always delivers quality work. They're our go-to choice.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    initials: "ER",
    content:
      "Managing multiple properties means I need reliable contractors. They've never let me down – responsive, fair pricing, and excellent craftsmanship.",
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg md:text-xl">
            Join thousands of satisfied customers who trust SHS Services LLC 
            for their most important projects.
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