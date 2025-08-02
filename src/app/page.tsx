import { HeroSection } from "@/components/hero-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DemoSection } from "@/components/demo-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SecuritySection } from "@/components/security-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main>
      {/* Hero / value proposition */}
      <HeroSection />

      {/* "As seen on" / social-proof logo bar */}
      <SocialProofSection />

      {/* The pain / problem statement */}
      <ProblemSection />

      {/* Solution overview ("How we fix it in one minute") */}
      <SolutionSection />

      {/* Key features / benefits */}
      <FeaturesSection />

      {/* "How it works" (step-by-step) */}
      <HowItWorksSection />

      {/* Live product demo or explainer video */}
      <DemoSection />

      {/* Use-case / persona spotlight */}
      <UseCasesSection />

      {/* Integrations / ecosystem */}
      <IntegrationsSection />

      {/* Pricing plans */}
      <PricingSection />

      {/* Testimonials / success stories */}
      <TestimonialsSection />

      {/* Security / trust & compliance */}
      <SecuritySection />

      {/* FAQ */}
      <FAQSection />

      {/* Final call-to-action */}
      <CTASection />
    </main>
  );
}
