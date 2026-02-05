import { Users, Calendar, ThumbsUp, Award, CheckCircle } from "lucide-react";
import { Thermometer, ShieldCheck, Clock, Leaf } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const AboutSection = () => {
  const values = [
    "EPA & NATE Certified Technicians",
    "Upfront Pricing, No Surprises",
    "100% Satisfaction Guarantee",
    "Same-Day Service Available",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-section-alt to-section-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-body text-sm font-semibold mb-6 border border-primary/10">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              Why Choose SHS
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Virginia's Most Trusted{" "}
              <span className="text-primary">HVAC Experts</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              For over 20 years, SHS Services LLC has been keeping Virginia homes and 
              businesses comfortable. Our NATE-certified technicians specialize in all 
              major HVAC brands, delivering reliable heating and cooling solutions you can count on.
            </p>
            
            {/* Values list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-body text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20"
            >
              <span>Schedule Free Estimate</span>
              <Thermometer className="w-5 h-5" />
            </a>
          </div>

          <div className="relative lg:pl-8">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={teamImage} 
                alt="SHS Services professional team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-border/50">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">20+</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Years</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">5K+</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Clients</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-accent">A+</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Rated</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;