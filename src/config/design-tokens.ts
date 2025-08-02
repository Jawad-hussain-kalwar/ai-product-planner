// Design tokens for consistent spacing, typography, and other design properties
export const designTokens = {
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
  },

  typography: {
    fontFamilies: {
      sans: "var(--font-ubuntu), 'Ubuntu', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      mono: "var(--font-ubuntu-mono), 'Ubuntu Mono', ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      display:
        "var(--font-ubuntu), 'Ubuntu', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    },
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
      "8xl": "6rem", // 96px
    },
    fontWeights: {
      light: "300", // Ubuntu Light
      normal: "400", // Ubuntu Regular
      medium: "500", // Ubuntu Medium
      bold: "700", // Ubuntu Bold
      // Note: Ubuntu only has 300, 400, 500, 700 weights available
      // Fallback mappings for compatibility:
      thin: "300", // Maps to light
      extralight: "300", // Maps to light
      semibold: "700", // Maps to bold
      extrabold: "700", // Maps to bold
      black: "700", // Maps to bold
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  },

  gradients: {
    // Core gradient variables (reference CSS custom properties)
    colors: {
      primaryStart: "var(--gradient-primary-start)", // Blue
      primaryEnd: "var(--gradient-primary-end)", // Subtle Teal (updated)
      secondaryStart: "var(--gradient-secondary-start)", // Subtle Teal (updated)
      secondaryEnd: "var(--gradient-secondary-end)", // Blue
      accentStart: "var(--gradient-accent-start)", // Light Purple
      accentEnd: "var(--gradient-accent-end)", // Teal
      multiStop1: "var(--gradient-multi-stop-1)", // Cyan
      multiStop2: "var(--gradient-multi-stop-2)", // Blue
      multiStop3: "var(--gradient-multi-stop-3)", // Indigo
      multiStop4: "var(--gradient-multi-stop-4)", // Pink
    },
    // Gradient definitions
    definitions: {
      primary: "var(--gradient-primary)",
      primaryToRight: "var(--gradient-primary-to-right)",
      primaryToBottom: "var(--gradient-primary-to-bottom)",
      secondary: "var(--gradient-secondary)",
      secondaryToRight: "var(--gradient-secondary-to-right)",
      multi: "var(--gradient-multi)",
      multiToRight: "var(--gradient-multi-to-right)",
      accent: "var(--gradient-accent)",
      accentToRight: "var(--gradient-accent-to-right)",
      glass: "var(--gradient-glass)",
      radialPrimary: "var(--gradient-radial-primary)",
      radialAccent: "var(--gradient-radial-accent)",
    },
    // Animation configurations
    animations: {
      shift: {
        name: "gradient-shift",
        duration: "3s",
        timing: "ease",
        iteration: "infinite",
      },
      rotate: {
        name: "gradient-rotate",
        duration: "4s",
        timing: "ease-in-out",
        iteration: "infinite",
      },
      pulse: {
        name: "gradient-pulse",
        duration: "2s",
        timing: "ease-in-out",
        iteration: "infinite",
      },
      // External component animation (for animated-gradient-text)
      gradient: {
        name: "gradient",
        duration: "var(--animation-duration, 8s)",
        timing: "linear",
        iteration: "infinite",
      },
    },
  },

  animations: {
    durations: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      gradientFast: "1.5s",
      gradientNormal: "3s",
      gradientSlow: "6s",
    },
    easings: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      gradientSmooth: "ease",
      gradientBounce: "ease-in-out",
    },
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

// Component-specific design tokens
export const componentTokens = {
  button: {
    heights: {
      sm: "2rem", // 32px
      md: "2.5rem", // 40px
      lg: "3rem", // 48px
    },
    padding: {
      sm: "0.5rem 1rem",
      md: "0.75rem 1.5rem",
      lg: "1rem 2rem",
    },
  },

  card: {
    padding: {
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
    },
    borderRadius: designTokens.borderRadius.lg,
  },

  input: {
    heights: {
      sm: "2rem",
      md: "2.5rem",
      lg: "3rem",
    },
    borderRadius: designTokens.borderRadius.md,
  },
} as const;
