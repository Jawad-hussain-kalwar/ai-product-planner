import type { Metadata } from "next";
import { Signika, Ubuntu_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Navigation } from "@/components/navigation";
import { AnimatedBubbleBackground } from "@/components/ui/animated-bubble-background";
import "./globals.css";

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
  weight: ["300", "400", "500", "600", "700"], // Signika available weights
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Ubuntu Mono available weights
});

export const metadata: Metadata = {
  title: "AI Product Planner",
  description: "Transform ideas into comprehensive development specifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${signika.variable} ${ubuntuMono.variable} antialiased`}
      >
        <Providers>
          {/* Animated Bubble Background for entire page */}
          <AnimatedBubbleBackground
            intensity={1.0}
            respectReducedMotion={true}
          />
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
