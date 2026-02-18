import React from "react";
import { Separator } from "./ui/separator.jsx";
import techBadges from "../assets/tech-stack.js";
// Tech stack icons using shields.io

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
