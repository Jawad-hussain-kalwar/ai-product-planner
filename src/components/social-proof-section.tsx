"use client";

// export function SocialProofSection() {
//   return (
//     <section className="py-12 px-4">
//       <div className="container mx-auto max-w-7xl text-center">
//         <h2 className="text-2xl font-bold mb-8">Social Proof Section Goes Here</h2>
//         <p className="text-default-600">
//           4-8 recognizable brand logos or press badges builds trust immediately after the hero.
//         </p>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlurInGroup } from "@/components/ui/blur-in-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export interface CustomerLogo {
  src: string;
  alt: string;
  height: number;
}

interface CustomersSectionProps {
  customers: CustomerLogo[];
  className?: string;
}

export function CustomersSection({
  customers = [],
  className,
}: CustomersSectionProps) {
  return (
    <section
      className={`bg-background pt-6 pb-12 md:pt-8 md:pb-16 ${className ?? ""}`}
    >
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Link
            href="/"
            className="block text-sm duration-150 hover:opacity-75"
          >
            <span>Meet Our Customers</span>
            <ChevronRight className="ml-1 inline-block size-3" />
          </Link>
        </div>
        <BlurInGroup
          triggerOnView={true}
          viewportOptions={{ once: true, margin: "-50px", amount: 0.3 }}
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="group-hover:blur-xs mx-auto mt-8 grid max-w-4xl grid-cols-4 gap-x-8 gap-y-12 transition-all duration-500 group-hover:opacity-50 sm:gap-x-12 sm:gap-y-16"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                className="mx-auto h-auto w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                src={logo.src}
                alt={logo.alt}
                height={logo.height * 1.8}
                width="auto"
                style={{ minHeight: "32px", maxHeight: "48px" }}
              />
            </div>
          ))}
        </BlurInGroup>
      </div>
    </section>
  );
}

const customers = [
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Nvidia Logo",
    height: 24,
  },
  {
    src: "https://html.tailus.io/blocks/customers/column.svg",
    alt: "Column Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/github.svg",
    alt: "GitHub Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nike.svg",
    alt: "Nike Logo",
    height: 24,
  },
  {
    src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    alt: "Lemon Squeezy Logo",
    height: 24,
  },
  {
    src: "https://html.tailus.io/blocks/customers/laravel.svg",
    alt: "Laravel Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/lilly.svg",
    alt: "Lilly Logo",
    height: 32,
  },
  {
    src: "https://html.tailus.io/blocks/customers/openai.svg",
    alt: "OpenAI Logo",
    height: 28,
  },
];

export function SocialProofSection() {
  return <CustomersSection customers={customers} />;
}
