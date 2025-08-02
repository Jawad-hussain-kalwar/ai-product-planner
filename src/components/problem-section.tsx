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
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "Problems -2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "Problems -3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "Problems -4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
  {
    id: "Problems -5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Problems  isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
];

const ProblemSection = () => {
  return (
    <div className="container min-h-svh place-content-center bg-background px-6 text-foreground xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className=" text-xs uppercase tracking-wide">our Problems </h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            Planning your{" "}
            <span className="text-primary">project development</span> journey
          </h2>
          <p className="max-w-prose text-sm">
            Our journey begins with a deep dive into your vision. In the
            Discovery phase, we engage in meaningful conversations to grasp your
            brand identity, goals, and the essence you want to convey. This
            phase sets the stage for all that follows.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
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
  );
};

export { ProblemSection };
