import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, Link } from "@/components/ui";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  href: string;
  cta: string;
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 md:col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transition-all duration-300",
      // Glass morphic styling
      "bg-content1/50 backdrop-blur-sm border border-divider/50",
      // Hover effects
      "hover:bg-content1/70 hover:border-divider/70 hover:shadow-lg",
      // Transform for smooth animations
      "transform-gpu",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-8">
      <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
      <p className="max-w-lg text-foreground-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-12 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button
        as={Link}
        href={href}
        variant="flat"
        color="primary"
        size="sm"
        className="pointer-events-auto bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
        endContent={<ArrowRight className="h-4 w-4" />}
      >
        {cta}
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[.02] group-hover:dark:bg-primary/[.05]" />
  </div>
);

export { BentoCard, BentoGrid };
