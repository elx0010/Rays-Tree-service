import { motion } from "motion/react";
import { Scissors, Trash2, Zap, Scaling, Eraser } from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Tree Trimming & Pruning",
    description: "Enhance growth and improve the aesthetic appeal of your trees with expert pruning techniques.",
    icon: Scissors,
  },
  {
    title: "Tree Removal",
    description: "Safe and efficient removal of hazardous or unwanted trees using specialized equipment.",
    icon: Trash2,
  },
  {
    title: "Emergency Services",
    description: "24/7 rapid response for storm-damaged trees and urgent hazardous situations.",
    icon: Zap,
  },
  {
    title: "Stump Grinding",
    description: "Complete removal of unsightly stumps to clear space for new landscaping or construction.",
    icon: Eraser,
  },
  {
    title: "Brush Clearing",
    description: "Comprehensive site cleanup and clearing of overgrown vegetation and debris.",
    icon: Scaling,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-12">
        <SectionHeader
          title="Field Operations"
          subtitle="PREMIUM ARBORICULTURE"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 glass rounded-xl glass-blur cursor-default"
            >
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="h-1 w-12 bg-gold/30 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
