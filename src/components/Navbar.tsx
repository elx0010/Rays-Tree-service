import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trees, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? "bg-forest/90 backdrop-blur-xl py-4 shadow-xl border-glass-border" : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group italic">
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider text-gold">
              RAYS TREE <span className="text-white opacity-50">SERVICES.INC</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium tracking-wider text-muted hover:text-white transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:1234567890"
            className="text-[13px] font-bold text-gold tracking-wider uppercase hover:text-white transition-colors"
          >
            CALL (555) 000-0000
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-forest/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:1234567890"
                className="flex items-center justify-center gap-2 bg-gold text-forest p-4 rounded-xl font-bold"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
