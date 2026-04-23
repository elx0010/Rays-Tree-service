import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      {/* Bold CTA Section - Transformed to matching Sidebar style */}
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="tagline">
            ELITE CONSULTATION
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Want a free estimate?
          </h2>
          <p className="text-muted text-lg mb-12 leading-relaxed max-w-lg">
            Our specialized arborists respond within 2 hours during active field operations. Get your professional assessment today.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="h-12 w-12 glass rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <Phone className="h-5 w-5" />
              </div>
              <a href="tel:5550000000" className="text-xl font-bold text-white hover:text-gold transition-colors">
                (555) 000-0000
              </a>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="h-12 w-12 glass rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <Mail className="h-5 w-5" />
              </div>
              <a href="mailto:office@raystrees.com" className="text-xl font-bold text-white hover:text-gold transition-colors">
                office@raystrees.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-card"
        >
          <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
          <p className="text-sm text-gray-500 mb-8 font-medium">Our experts reach out same-day.</p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
            />
            <input
              type="text"
              placeholder="Property Address"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
            />
            <input
              type="text"
              placeholder="Service Needed"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
            />
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
            >
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
