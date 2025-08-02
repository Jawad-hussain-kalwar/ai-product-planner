import { cn } from "@/lib/utils";
import * as React from "react";
import { HTMLAttributes } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Predefined gradient variant from our design system
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "accent" | "multi" | "custom";
  /**
   * Array of colors for the gradient (only used when variant="custom")
   * @default ["#ffaa40", "#9c40ff", "#ffaa40"]
   */
  colors?: string[];
  /**
   * Animation duration in seconds
   * @default 8
   */
  animationSpeed?: number;
  /**
   * Show animated border
   * @default false
   */
  showBorder?: boolean;
}

export function GradientText({
  children,
  className,
  variant = "primary",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
  ...props
}: GradientTextProps) {
  // Define gradient variants using our design system
  const gradientVariants = {
    primary:
      "var(--gradient-primary-start), var(--gradient-primary-end), var(--gradient-primary-start)",
    secondary:
      "var(--gradient-secondary-start), var(--gradient-secondary-end), var(--gradient-secondary-start)",
    accent:
      "var(--gradient-accent-start), var(--gradient-accent-end), var(--gradient-accent-start)",
    multi:
      "var(--gradient-multi-stop-1), var(--gradient-multi-stop-2), var(--gradient-multi-stop-3), var(--gradient-multi-stop-4)",
    custom: colors.join(", "),
  };

  const gradientColors = gradientVariants[variant];

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-fit flex-row items-center justify-center",
        "rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500",
        "overflow-hidden cursor-pointer",
        className
      )}
      {...props}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-background rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
