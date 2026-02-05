import { Users, Calendar, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: "20+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-body text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Trust & Excellence
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              For over two decades, we've been the trusted choice for homeowners
              and businesses in our community. Our commitment to quality
              workmanship and customer satisfaction has earned us a reputation we're
              proud of.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Every member of our team is fully licensed, insured, and dedicated to
              delivering exceptional results. We treat your property as if it were
              our own, ensuring every job is completed to the highest standards.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-display text-xl text-foreground">Our Expert Team</p>
                  <p className="font-body text-muted-foreground mt-2">Ready to serve you</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;