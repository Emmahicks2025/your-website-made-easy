const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Repairs", href: "#services" },
      { label: "Maintenance", href: "#services" },
      { label: "Emergency", href: "#services" },
      { label: "Consulting", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-hero py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold text-primary-foreground mb-4 block">
            SHS Services LLC
            </span>
            <p className="font-body text-primary-foreground/70 max-w-sm leading-relaxed">
              Your trusted local professionals providing quality service and
              exceptional customer care for over 20 years.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="font-body text-center text-primary-foreground/50 text-sm">
          © {currentYear} SHS Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;