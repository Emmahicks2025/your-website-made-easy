import { Wrench, Shield, Clock, Award } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Expert Repairs",
    description:
      "From minor fixes to major overhauls, our skilled technicians handle it all with precision and care.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description:
      "Keep your systems running smoothly with our comprehensive maintenance programs.",
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description:
      "Available 24/7 for urgent situations. We're just a call away when you need us most.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description:
      "All our work is backed by a satisfaction guarantee. Your peace of mind is our priority.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-body text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            We provide a comprehensive range of services to meet all your needs with
            the highest standards of quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/30"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;