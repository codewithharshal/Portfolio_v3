import React from "react";
import { Separator } from "./ui/separator.jsx";

// Tech stack icons using shields.io
const techBadges = [
  {
    name: "React",
    url: "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB",
  },
  {
    name: "JavaScript",
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000",
  },
  {
    name: "TypeScript",
    url: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff",
  },
  {
    name: "Vite",
    url: "https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=FFD62E",
  },
  {
    name: "TailwindCSS",
    url: "https://img.shields.io/badge/TailwindCSS-0F172A?logo=tailwindcss&logoColor=38BDF8",
  },
  {
    name: "Node.js",
    url: "https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=fff",
  },
  {
    name: "Express",
    url: "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff",
  },
  {
    name: "MongoDB",
    url: "https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=fff",
  },
  {
    name: "Git",
    url: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff",
  },
  {
    name: "GitHub",
    url: "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff",
  },
  {
    name: "C++",
    url: "https://img.shields.io/badge/C++-00599C?logo=c%2B%2B&logoColor=white",
  },
  {
    name: "Python",
    url: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white",
  },
  {
    name: "HTML",
    url: "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white",
  },
  {
    name: "CSS",
    url: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white",
  },
  {
    name: "MySQL",
    url: "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white",
  },
  {
    name: "Postman",
    url: "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white",
  },
  {
    name: "NPM",
    url: "https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=white",
  },
  {
    name: "Figma",
    url: "https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white",
  },
  {
    name: "Redux",
    url: "https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white",
  },
];

export default function TechStackSection() {
  return (
    <div
      id="tech-stack"
      className="max-w-[90vw] sm:max-w-3xl mx-auto py-12 px-6 flex flex-col gap-8"
    >
      {/* Heading */}
      <h2 className="text-2xl font-ins text-left">Tech Stack</h2>

      {/* Description */}
      <p className="text-lg text-left text-gray-800">
        A collection of tools and technologies I use to build fast, scalable,
        and modern full-stack web applications.
      </p>

      {/* Badge List (Flex Box Layout) */}
      <div className="flex flex-wrap items-center gap-2">
        {techBadges.map((badge) => (
          <img
            key={badge.name}
            src={badge.url}
            alt={badge.name}
            className="h-7 scale-90"
          />
        ))}
      </div>
      <Separator className="mt-11" />
    </div>
  );
}
