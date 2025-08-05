"use client";

import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonial-columns";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "Transformed my scattered app ideas into a complete development roadmap in just 90 minutes. The AI guidance helped me discover requirements I never would have thought of.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Chen",
    role: "Indie Developer",
  },
  {
    text: "As a solo founder, I was drowning in feature ideas. This tool helped me prioritize ruthlessly and ship my MVP 3 weeks faster than planned.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcus Rodriguez",
    role: "Startup Founder",
  },
  {
    text: "The visual canvas made it so easy to organize my thoughts. I went from vague concept to detailed PRD in one focused session.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Watson",
    role: "Product Designer",
  },
  {
    text: "Finally, a planning tool that doesn't require a PhD in project management. The AI asks the right questions and generates specs that actually make sense.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Kim",
    role: "Full-Stack Developer",
  },
  {
    text: "Used this for my hackathon project and we had the clearest roadmap of any team. Won first place and the judges loved our technical specification.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Priya Patel",
    role: "Software Engineer",
  },
  {
    text: "The RICE scoring feature is a game-changer. No more guessing which features to build first - everything is prioritized based on actual impact.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Jessica Thompson",
    role: "Product Manager",
  },
  {
    text: "Went from idea to investor-ready product spec in under 2 hours. The export quality is professional enough for board presentations.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Alex Johnson",
    role: "Tech Entrepreneur",
  },
  {
    text: "As a freelance developer, this helps me create detailed project scopes for clients. No more scope creep or unclear requirements.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Lisa Chang",
    role: "Freelance Developer",
  },
  {
    text: "The AI discovered edge cases and user scenarios I completely missed. My app launched with 90% fewer bugs because of the thorough planning.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ryan Mitchell",
    role: "Mobile Developer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Loved by developers{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-lg text-default-600 max-w-3xl mx-auto">
            See how indie developers, startup founders, and solo builders are
            transforming their ideas into structured development plans.
          </p>
        </motion.div>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
