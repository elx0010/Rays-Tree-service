import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    text: "The crew was incredibly professional and worked like a perfectly coordinated team. They removed a massive oak near my house without a hitch.",
    author: "Jessica M.",
    role: "Local Homeowner",
  },
  {
    text: "They left everything spotless—better than they found it. I've never seen a contractor clean up so thoroughly. Highly recommend!",
    author: "Robert T.",
    role: "Property Manager",
  },
  {
    text: "Fast, efficient, and very reasonably priced. They were in and out in half the time I expected and did a perfect job.",
    author: "Michael P.",
    role: "Homeowner",
  },
  {
    text: "Best tree service I’ve ever used. The attention to detail and respect for my property was refreshing. Truly high-end service.",
    author: "Sarah L.",
    role: "Garden Enthusiast",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-12">
        <SectionHeader
          title="Field Reports"
          subtitle="CLIENT REVIEWS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="testimonial-box"
            >
              <p className="text-lg text-white leading-relaxed mb-6 italic font-medium">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-gold uppercase tracking-widest text-xs">
                    — {testimonial.author.toUpperCase()}, {testimonial.role.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
