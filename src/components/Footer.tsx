 import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
 import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "AC Installation", href: "#services" },
      { label: "Heating Systems", href: "#services" },
      { label: "Ventilation", href: "#services" },
      { label: "Emergency HVAC", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
     legal: [
       { label: "Privacy Policy", href: "/privacy-policy" },
       { label: "Terms & Conditions", href: "/terms-conditions" },
       { label: "Refund Policy", href: "/refund-policy" },
       { label: "Cookie Policy", href: "/cookie-policy" },
     ],
  };

  return (
    <footer className="bg-primary pt-20 pb-8">
      {/* CTA Banner */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-accent to-sky-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
              Need HVAC Service?
            </h3>
            <p className="font-body text-primary/80">
              Get a free estimate for your heating & cooling needs today.
            </p>
          </div>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all whitespace-nowrap group"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="lg" variant="light" className="mb-6" />
            <p className="font-body text-primary-foreground/60 leading-relaxed mb-6 max-w-xs">
              Your trusted HVAC experts. Keeping Virginia comfortable 
              with premium heating, cooling & ventilation solutions for over 20 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

           {/* Legal */}
           <div>
             <h4 className="font-display font-bold text-primary-foreground mb-6">
               Legal
             </h4>
             <ul className="space-y-3">
               {links.legal.map((link, index) => (
                 <li key={index}>
                   <Link
                     to={link.href}
                     className="font-body text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                   >
                     <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+12132689542" className="font-body text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  (213) 268-9542
                </a>
              </li>
              <li>
                <a href="mailto:info@shsofficial.com" className="font-body text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  info@shsofficial.com
                </a>
              </li>
              <li>
                <span className="font-body text-primary-foreground/60 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  14970 Potomac Heights Pl, Unit 113, Woodbridge, VA 22191
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-primary-foreground/50 text-sm">
             © {currentYear} SHS Services Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
             <Link to="/privacy-policy" className="font-body text-primary-foreground/50 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
             <Link to="/terms-conditions" className="font-body text-primary-foreground/50 hover:text-accent text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;