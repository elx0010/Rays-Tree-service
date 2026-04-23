import { Trees, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-12">
        <div className="h-px w-full bg-glass-border mb-12" />
        
        <div className="flex flex-wrap items-center justify-between gap-8 mb-12 opacity-60">
          {[
            "Fully Licensed & Insured",
            "ISA Certified Arborists",
            "5-Star Rated Service",
            "Fast & Reliable Crew"
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-3">
              <div className="h-2 w-2 bg-emerald-accent rounded-full shadow-[0_0_8px_#10B981]" />
              <span className="text-[11px] font-bold uppercase tracking-widest leading-none">
                {badge}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-glass-border">
          <div className="flex items-center gap-2 group italic opacity-80">
            <span className="font-display font-bold text-lg tracking-wider text-gold">
              RAYS TREE <span className="text-white opacity-50">SERVICES.INC</span>
            </span>
          </div>
          
          <div className="text-muted text-[11px] font-bold uppercase tracking-widest">
            © {currentYear} ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
