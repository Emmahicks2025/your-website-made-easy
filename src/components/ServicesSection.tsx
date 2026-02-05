import { Wrench, Shield, Clock, Award, ArrowRight } from "lucide-react";
import { Snowflake, Flame, Wind, Wrench as WrenchIcon } from "lucide-react";
import serviceAC from "@/assets/service-ac.jpg";
import serviceHeating from "@/assets/service-heating.jpg";
import serviceVentilation from "@/assets/service-ventilation.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";

const services = [
  {
    icon: Snowflake,
    title: "Air Conditioning",
    description:
      "Expert AC installation, repair, and maintenance. Stay cool all summer with energy-efficient cooling solutions.",
    image: serviceAC,
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description:
      "Furnace installation, heat pump services, and heating repairs. Keep your home warm and cozy all winter.",
    image: serviceHeating,
  },
  {
    icon: Wind,
    title: "Ventilation & Air Quality",
    description:
      "Improve indoor air quality with duct cleaning, ventilation systems, and air purification solutions.",
    image: serviceVentilation,
  },
  {
    icon: WrenchIcon,
    title: "24/7 Emergency Repair",
    description:
      "HVAC emergency? We're available around the clock. Fast response times and reliable repairs when you need them most.",
    image: serviceEmergency,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-section-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-body text-sm font-semibold mb-6 border border-primary/10">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            Our HVAC Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Complete Heating & Cooling Solutions
          </h2>
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed">
            From AC installation to furnace repair, we provide comprehensive HVAC services 
            to keep your home comfortable in every season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;