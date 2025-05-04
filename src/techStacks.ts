import { Docker } from "./components/icons/Docker";
import { Typescript } from "./components/icons/Typescript";
import { React } from "./components/icons/React";
import { Tailwind } from "./components/icons/Tailwind";
import { Aws } from "./components/icons/Aws";
import { Express } from "./components/icons/Express";
import { Cpp } from "./components/icons/Cpp";
import { Prisma } from "./components/icons/Prisma";
import type { JSX, SVGProps } from "react";

type TechStack = {
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  description: string;
};

const techStacks: TechStack[] = [
  {
    name: "TypeScript",
    icon: Typescript,
    description:
      "TypeScript is a statically typed superset of JavaScript that adds type safety and modern tooling.",
  },
  {
    name: "Docker",
    icon: Docker,
    description:
      "Docker is a platform that enables developers to build, ship, and run applications in containers.",
  },
  {
    name: "React",
    icon: React,
    description:
      "React is a JavaScript library for building user interfaces using a component-based architecture.",
  },
  {
    name: "Tailwind",
    icon: Tailwind,
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom, responsive UIs.",
  },
  {
    name: "Aws",
    icon: Aws,
    description:
      "Amazon Web Services (AWS) offers cloud computing services including storage, compute, and databases.",
  },
  {
    name: "Express",
    icon: Express,
    description:
      "Express is a fast, minimalistic web framework for Node.js used to build APIs and web applications.",
  },
  {
    name: "Cpp",
    icon: Cpp,
    description:
      "C++ is a high-performance, general-purpose programming language widely used in systems and application development.",
  },

  {
    name: "Prisma",
    icon: Prisma,
    description:
      "Prisma is a modern TypeScript ORM that simplifies database access and boosts productivity with type-safe queries.",
  },
];

export default techStacks;
