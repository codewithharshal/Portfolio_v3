import { Separator } from "./ui/separator";

export default function Exprience({ experiences = [] }) {
  return (
    <section id="Experience" className="w-full max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-ins mb-8">Experience</h2>

      {/* Left vertical line */}
      <div className="relative">
        <div className="absolute left-2 top-0 w-[5px] h-full bg-gray-300 rounded-2xl "></div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline dot */}
              <div className="w-4 h-4 bg-gray-800 rounded-full absolute left-0.5 top-1.5"></div>

              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>

              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.responsibilities?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Separator className="mt-6" />
      </div>
    </section>
  );
}
