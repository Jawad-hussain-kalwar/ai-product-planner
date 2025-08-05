"use client";

import { Pricing } from "@/components/ui/pricing";

const pricingPlans = [
  {
    name: "STARTER",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      "Up to 3 projects",
      "Basic AI assistance",
      "Standard templates",
      "Community support",
      "Export to PDF",
    ],
    description: "Perfect for trying out the platform",
    buttonText: "Start Free",
    href: "/signup",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "29",
    yearlyPrice: "24",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced AI guidance",
      "Premium templates",
      "Priority support",
      "Export to multiple formats",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for serious product builders",
    buttonText: "Get Started",
    href: "/signup",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom AI training",
      "Dedicated account manager",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
      "White-label options",
    ],
    description: "For teams and organizations",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 px-4">
      <Pricing
        plans={pricingPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you. All plans include access to our AI-powered planning tools and comprehensive export capabilities."
      />
    </section>
  );
}
