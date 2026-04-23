import { motion } from "motion/react";
import { CheckCircle2, Shield, Sparkles, Clock, CircleDollarSign, Users, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reasons = [
  {
    icon: Award,
    title: "Skilled Professionals",
    description: "Our crew is extremely professional and works like a perfectly coordinated team.",
  },
  {
    icon: Sparkles,
    title: "Thorough Cleanup",
    description: '"You wouldn’t even know we were there." We leave everything spotless.',
  },
  {
    icon: Shield,
    title: "Zero Damage Guarantee",
    description: "Unmatched attention to detail to ensure no damage to your property.",
  },
  {
    icon: CircleDollarSign,
    title: "Fair & Competitive",
    description: "Premium high-end service at very reasonable and competitive pricing.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "We value your time with reliable scheduling and prompt emergency response.",
  },
  {
    icon: Users,
    title: "Respectful Team",
    description: "A friendly, family-run business culture where we treat your yard as our own.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <SectionHeader
          title="The Premier Choice"
          subtitle="ELITE REPUTATION"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-gold transition-colors">{reason.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Review Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 glass rounded-[3rem] text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-6 w-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-display italic text-white leading-relaxed mb-8">
            "They worked like a perfectly coordinated team. If I could give 10 stars, I would. Ray's is the only tree service I'll ever call."
          </p>
          <div className="text-gold font-bold tracking-widest uppercase text-xs">
            — Trusted Local Homeowner
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Star({ className }: { className?: string; key?: number }) {
  return (
    <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
