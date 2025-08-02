"use client";

import { Card, CardBody, CardHeader, Button } from "@/components/ui";
import { GradientText } from "@/components/ui/animated-gradient-text";

// Icon components
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const CanvasIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
  </svg>
);

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
    <path d="M15 5.764v15" />
    <path d="M9 3.236v15" />
  </svg>
);

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const features = [
  {
    icon: SparklesIcon,
    title: "AI-Led Discovery Workshop",
    description:
      "Interactive sessions that guide you through structured problem framing and solution discovery with contextual AI prompts.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: CanvasIcon,
    title: "Dynamic Idea Canvas",
    description:
      "Infinite visual workspace for brainstorming with AI-powered clustering and semantic organization of concepts.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: TargetIcon,
    title: "Smart Prioritization",
    description:
      "Multiple frameworks (RICE, MoSCoW, Kano) with AI-generated scoring and detailed explanations for each criterion.",
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    icon: MapIcon,
    title: "Visual Flow Mapping",
    description:
      "Design user journeys and page structures with drag-and-drop tools and wireframe sketching capabilities.",
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
  {
    icon: DatabaseIcon,
    title: "Architecture Planning",
    description:
      "Plan backend services, APIs, and data models with visual diagramming and automatic ADR generation.",
    iconBg: "bg-danger/10",
    iconColor: "text-danger",
  },
  {
    icon: DownloadIcon,
    title: "Export & Integration",
    description:
      "Generate complete specifications in multiple formats with direct GitHub and Notion integration.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything you need to plan
            <br />
            <GradientText
              variant="primary"
              animationSpeed={5}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              like a pro
            </GradientText>
          </h2>
          <p className="text-lg text-default-600 max-w-3xl mx-auto">
            From rough ideas to production-ready specifications. Our AI-powered
            platform guides you through every step of the product planning
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass hover:glass-strong transition-all duration-300 hover:scale-105"
              isPressable
            >
              <CardHeader className="pb-3">
                <div
                  className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-3`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-default-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
          <CardBody className="text-center p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your ideas?
            </h3>
            <p className="text-default-600 mb-6 max-w-md mx-auto">
              Join developers and product teams who are building better products
              with structured planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="primary"
                size="lg"
                endContent={<ArrowRightIcon />}
                className="font-semibold"
              >
                Start Your First Project
              </Button>
              <Button variant="bordered" size="lg" className="font-semibold">
                View Demo
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
