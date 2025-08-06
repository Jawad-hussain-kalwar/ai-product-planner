import React from "react";

import Usecases from "./ui/usecases";

// Data for the first section (default layout)
const exampleData1 = {
  title: (
    <>
      Intelligence,
      <br />
      delivered to you.
    </>
  ),
  description: (
    <>
      Get a tailored Monday morning brief directly in
      <br />
      your inbox, crafted by your virtual personal
      <br />
      analyst, spotlighting essential watchlist stories
      <br />
      and earnings for the week ahead.
    </>
  ),
  primaryImageSrc:
    "https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png",
  secondaryImageSrc:
    "https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png",
};

export function UseCasesSection() {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Usecases
        title={exampleData1.title}
        description={exampleData1.description}
        primaryImageSrc={exampleData1.primaryImageSrc}
        secondaryImageSrc={exampleData1.secondaryImageSrc}
      />
    </div>
  );
}
