import { Brain, Lightbulb, FileText, Target, Zap } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui";

const features = [
  {
    Icon: Brain,
    name: "AI-Powered Discovery",
    description:
      "Transform raw ideas into structured product requirements with intelligent AI guidance and suggestions.",
    href: "/",
    cta: "Explore AI Features",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20 bg-gradient-to-br from-primary/30 to-secondary/30 w-40 h-40 rounded-full blur-3xl" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Lightbulb,
    name: "Visual Idea Canvas",
    description:
      "Organize and connect your ideas on an interactive canvas with drag-and-drop simplicity.",
    href: "/",
    cta: "Try Canvas",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20 bg-gradient-to-br from-warning/30 to-primary/30 w-40 h-40 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Target,
    name: "Smart Prioritization",
    description:
      "Use proven frameworks like RICE and MoSCoW to prioritize features with data-driven insights.",
    href: "/",
    cta: "Learn Prioritization",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20 bg-gradient-to-br from-success/30 to-primary/30 w-40 h-40 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Zap,
    name: "Lightning Fast",
    description:
      "Complete product planning in hours, not weeks. From idea to spec in a single session.",
    href: "/",
    cta: "See Speed Demo",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20 bg-gradient-to-br from-secondary/30 to-warning/30 w-40 h-40 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: FileText,
    name: "Export Ready Specs",
    description:
      "Generate comprehensive PRDs, ADRs, and technical specifications in multiple formats instantly.",
    href: "/",
    cta: "View Examples",
    background: (
      <div className="absolute -right-20 -top-20 opacity-20 bg-gradient-to-br from-primary/30 to-success/30 w-40 h-40 rounded-full blur-3xl" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything you need to plan like a pro
          </h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            From raw ideas to complete specifications in hours, not weeks. Our
            AI-powered platform streamlines every step of product planning.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <BentoGrid className="lg:grid-rows-3 md:auto-rows-[26rem] lg:auto-rows-[24rem]">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

export { FeaturesSection };
