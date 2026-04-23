import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <span className="tagline">
            {subtitle}
          </span>
        )}
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${light ? "text-white" : "text-white"}`}>
          {title}
        </h2>
        <div className={`h-1 w-20 ${centered ? "mx-auto" : ""} bg-gold/40`} />
      </motion.div>
    </div>
  );
}
