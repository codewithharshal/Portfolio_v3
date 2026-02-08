import React from "react";
import { Separator } from "./ui/separator.jsx";

const Myself = () => {
  return (
    <section id="about-me" className="max-w-[90vw] sm:max-w-3xl mx-auto p-6">
      <h2 className="text-2xl mb-4 font-ins">About Me</h2>

      <p className="leading-relaxed mb-4">
        Hi, I’m Harshal — an aspiring backend developer focused on building
        strong fundamentals in server-side engineering.
      </p>

      <p className="leading-relaxed mb-4">
        I enjoy working with backend technologies because they require
        structured thinking—handling data, designing APIs, and ensuring systems
        behave correctly under different conditions.
      </p>

      <p className="leading-relaxed mb-4">
        I primarily work with Node.js and have built multiple backend projects
        where I practiced clean architecture, proper error handling, and
        database-driven design. I pay close attention to how backend components
        interact rather than treating them as isolated features.
      </p>

      <p className="leading-relaxed mb-4 font-ins text-xl">What I focus on:</p>

      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Designing and building RESTful APIs</li>
        <li>Authentication and authorization flows</li>
        <li>Database schema design and query optimization</li>
        <li>Debugging backend logic and handling edge cases</li>
        <li>Writing clean, modular, and maintainable server-side code</li>
      </ul>

      <p className="leading-relaxed mb-4">
        As a fresher, I invest heavily in learning by reading documentation,
        analyzing real-world codebases, and improving my projects iteratively. I
        believe consistency and strong fundamentals matter more than buzzwords.
      </p>

      <p className="leading-relaxed">
        I’m actively looking for an entry-level backend role where I can learn
        from real production systems, contribute to meaningful projects, and
        gradually take on larger responsibilities.
      </p>

      <Separator className="mt-11" />
    </section>
  );
};

export default Myself;
