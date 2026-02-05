import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-hvac.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-primary/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="SHS Services Logo" 
              className="h-12 w-auto transition-all"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body font-medium transition-all hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all ${
                isScrolled ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+12132689542">
            <Button variant={isScrolled ? "default" : "hero"} size="lg" className="group">
              <Phone className="w-4 h-4" />
              (213) 268-9542
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl animate-fade-in border-t">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body font-medium text-foreground py-3 px-4 hover:text-accent hover:bg-primary/5 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+12132689542" className="mt-2">
              <Button variant="default" size="lg" className="w-full">
                <Phone className="w-4 h-4" />
                (213) 268-9542
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;