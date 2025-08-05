"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@/components/ui";
import { Avatar } from "@/components/ui";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <Card
                  key={`${index}-${i}`}
                  className="p-6 max-w-xs w-full bg-content1/50 backdrop-blur-sm border-divider/50"
                >
                  <CardBody className="p-0">
                    <p className="text-sm leading-relaxed text-default-700 mb-4">
                      &ldquo;{text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={image}
                        alt={name}
                        size="sm"
                        className="flex-shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <div className="font-medium text-sm text-default-900 truncate">
                          {name}
                        </div>
                        <div className="text-xs text-default-600 truncate">
                          {role}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
