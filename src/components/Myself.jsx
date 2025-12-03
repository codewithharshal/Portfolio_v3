import React from "react";
import { Separator } from "./ui/separator.jsx";

const Myself = () => {
  return (
    <section id="about-me" className="max-w-[90vw] sm:max-w-3xl mx-auto p-6">
      <h2 className="text-2xl mb-4 font-ins ">About Me</h2>

      <p className=" leading-relaxed mb-4">
        🚀 Hi, I’m Harshal — a backend developer passionate about building fast,
        scalable, and reliable server-side applications using Node.js and modern
        backend technologies.
      </p>

      <p className=" leading-relaxed mb-4">
        💻 I specialize in designing clean, maintainable, and high-performance
        APIs. My experience spans across Node.js, Express.js, RESTful API
        architecture, and working with both SQL and NoSQL databases like MongoDB
        and MySQL. I focus heavily on writing production-ready backend systems
        that are secure, efficient, and scalable.
      </p>

      <p className=" leading-relaxed mb-4 font-ins text-xl">
        I have hands-on experience in:
      </p>

      <ul className="list-disc list-inside  space-y-2 mb-4">
        <li>Building and optimizing REST APIs</li>
        <li>Authentication & Authorization</li>
        <li>Database design and query optimization</li>
        <li>Backend performance tuning and debugging</li>
        <li>Writing modular, maintainable server-side code</li>
      </ul>

      <p className=" leading-relaxed mb-4">
        I constantly improve my backend engineering skills through real-world
        projects, academic work, and continuous learning.
      </p>

      <p className=" leading-relaxed">
        🎯 I’m actively seeking backend development opportunities where I can
        contribute to impactful projects, learn from experienced teams, and
        deliver meaningful solutions. If you're looking for a dedicated,
        growth-oriented backend developer — let’s connect! 🤝
      </p>
      <Separator className="mt-11" />
    </section>
  );
};

export default Myself;
