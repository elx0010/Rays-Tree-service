import { motion } from "motion/react";
import { ChevronRight, Phone, ShieldCheck, Star, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-height-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
          alt="Majestic redwood forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 max-w-4xl">
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="tagline"
            >
              PREMIUM ARBORICULTURE SERVICES
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-[80px] font-bold text-white mb-8 leading-[1]"
            >
              Precision Tree Care.<br/>
              Done Right the First Time.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-muted mb-12 max-w-xl leading-relaxed"
            >
              Professional, safe, and reliable tree services with unmatched attention to detail and property-first cleanup.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn btn-primary inline-flex items-center justify-center">
                Get a Free Estimate
              </a>
              <a href="#services" className="btn btn-secondary inline-flex items-center justify-center">
                Our Process
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Gradient Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-forest/50 to-transparent pointer-events-none" />
    </section>
  );
}
