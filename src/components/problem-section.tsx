"use client";

// export function ProblemSection() {
//   return (
//     <section className="py-20 px-4">
//       <div className="container mx-auto max-w-7xl text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-8">Problem Section Goes Here</h2>
//         <p className="text-lg text-default-600 max-w-3xl mx-auto">
//           lorem lorem, ipsum ipsum
//         </p>
//       </div>
//     </section>
//   );
// }

import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const ALL_PROBLEMS = [
  {
    id: "Problems -1",
    title: "Scattered Ideas Without Structure",
    description:
      "You have brilliant product ideas floating around in your head, scattered across notes, sketches, and conversations. Without a structured framework, these ideas remain fragmented and impossible to turn into actionable development plans.",
  },
  {
    id: "Problems -2",
    title: "Time-Consuming Planning Process",
    description:
      "Traditional product planning takes weeks or months of back-and-forth meetings, documentation, and revisions. As a solo developer or small team, you can't afford to spend months planning when you could be building.",
  },
  {
    id: "Problems -3",
    title: "Lack of Technical Specification Skills",
    description:
      "You know what you want to build, but translating that vision into proper PRDs, technical specifications, and architecture documents feels overwhelming. The gap between idea and implementation seems impossible to bridge.",
  },
  {
    id: "Problems -4",
    title: "Feature Prioritization Paralysis",
    description:
      "With limited time and resources, every feature decision matters. Without proven frameworks like RICE or MoSCoW, you're left guessing which features to build first, often leading to scope creep and missed deadlines.",
  },
  {
    id: "Problems -5",
    title: "Inconsistent Documentation Standards",
    description:
      "Your project documentation is all over the place - some features are well-documented, others barely have notes. This inconsistency makes it impossible to maintain momentum or onboard collaborators effectively.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 pt-20 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl">
        <div className="min-h-[500vh]">
          <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
            <div className="md:sticky md:top-1/2 md:-translate-y-1/2 md:h-fit md:py-12">
              <h5 className=" text-xs uppercase tracking-wide">
                the challenges
              </h5>
              <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
                Why product planning{" "}
                <span className="text-primary">feels impossible</span>
              </h2>
              <p className="max-w-prose text-sm">
                Solo developers and indie hackers face unique challenges when
                turning ideas into structured development plans. Traditional
                planning methods are too slow, complex, and resource-intensive
                for fast-moving teams who need to ship quickly.
              </p>
            </div>
            <ContainerScroll className="space-y-8 py-12">
              {ALL_PROBLEMS.map((phase, index) => (
                <CardSticky
                  key={phase.id}
                  index={index + 2}
                  className="rounded-2xl border p-8 shadow-md backdrop-blur-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="my-6 text-2xl font-bold tracking-tighter">
                      {phase.title}
                    </h2>
                    <h3 className="text-2xl font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </h3>
                  </div>

                  <p className="text-foreground">{phase.description}</p>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProblemSection };
