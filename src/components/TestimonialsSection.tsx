import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "We've been using their services for our office building for years. Reliable, trustworthy, and always delivers quality work. They're our go-to choice.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    content:
      "Managing multiple properties means I need reliable contractors. They've never let me down – responsive, fair pricing, and excellent craftsmanship.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-body text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Don't just take our word for it – hear from the people we've had the
            pleasure of serving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm border border-border/50 relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;