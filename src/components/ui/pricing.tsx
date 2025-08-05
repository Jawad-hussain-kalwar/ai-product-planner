"use client";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Switch,
  Divider,
} from "@/components/ui";
import { Label } from "@/components/ui/label";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--secondary))",
          "hsl(var(--success))",
          "hsl(var(--warning))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-default-600 text-lg whitespace-pre-line max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-10">
        <span className="font-semibold">Monthly</span>
        <Label className="relative inline-flex items-center cursor-pointer">
          <Switch
            ref={switchRef as React.RefObject<HTMLButtonElement>}
            isSelected={!isMonthly}
            onValueChange={handleToggle}
            size="lg"
            color="primary"
            classNames={{
              wrapper: "group-data-[selected=true]:bg-primary",
            }}
          />
        </Label>
        <span className="font-semibold">
          Annual <span className="text-primary font-bold">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              "relative",
              index === 0 || index === 2 ? "z-0" : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                  <Star className="h-3 w-3 fill-current" />
                  Popular
                </div>
              </div>
            )}

            <Card
              className={cn(
                "h-full bg-content1/50 backdrop-blur-sm border-2 transition-all duration-300 p-6",
                plan.isPopular
                  ? "border-primary shadow-lg shadow-primary/25"
                  : "border-divider hover:border-primary/50"
              )}
            >
              <CardHeader className="text-center pb-4 pt-0 flex flex-col">
                {/* 1. Plan name on separate line at top */}
                <h3 className="text-sm font-semibold text-default-600 uppercase tracking-wide mb-3 block">
                  {plan.name}
                </h3>

                {/* 2. Price and period on second line */}
                <div className="flex items-baseline justify-center gap-x-1 mb-2">
                  <span className="text-5xl font-bold tracking-tight">
                    <NumberFlow
                      value={
                        isMonthly
                          ? Number(plan.price)
                          : Number(plan.yearlyPrice)
                      }
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                      className="font-variant-numeric: tabular-nums"
                    />
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-default-600">
                    / {plan.period}
                  </span>
                </div>

                {/* 3. Billing period on third line */}
                <p className="text-xs leading-5 text-default-500 block">
                  {isMonthly ? "billed monthly" : "billed annually"}
                </p>
              </CardHeader>

              <CardBody className="pt-0 px-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-default-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 4. Add divider above button */}
                <Divider className="mb-6" />

                <div className="mt-auto">
                  <Button
                    as={Link}
                    href={plan.href}
                    color={plan.isPopular ? "primary" : "default"}
                    variant={plan.isPopular ? "solid" : "bordered"}
                    className="w-full font-semibold"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                  {/* 7. Add extra padding on bottom */}
                  <p className="mt-4 text-xs leading-5 text-default-500 text-center pb-4">
                    {plan.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
