import DotGrid from "./components/DotGrid";
import CardNav from "./components/CardNav";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Hero from "./components/Hero";
import Myself from "./components/Myself";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Achivements from "./components/Achivements";
import { Separator } from "./components/ui/separator";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import logo from "./assets/logo.svg";
import img1 from "../src/assets/img1.png";
import img2 from "../src/assets/img2.png";
const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Me", href: "#about-me" },
        { label: "Social links", ariaLabel: "Social Links", href: "#social" },
        // { label: "Experience", ariaLabel: "Experience" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Personal Projects",
          ariaLabel: "Personal Projects",
          href: "#projects",
        },
        // {
        //   label: "Open Source Contribution",
        //   ariaLabel: "Open Source Contribution",
        // },
      ],
    },
    {
      label: "Skills",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Tech stack", ariaLabel: "Tech stack", href: "#tech-stack" },
        {
          label: "Achivements",
          ariaLabel: "Achivements",
          href: "#achievements-certifications",
        },
        {
          label: "Certifications",
          ariaLabel: "Certifications",
          href: "#achievements-certifications",
        },
      ],
    },
  ];

  const ProjectsDetail = [
    {
      img: img1,
      title: "RealEstate Landing Page",
      description:
        "Real-estate landing page built with React, Tailwind CSS, reusable components, responsive UI, smooth animations, and optimized performance.",
      link: "https://github.com/codewithharshal/RealEstate-Landing-Page",
    },
    {
      img: img2,
      title: "Ecommerce Web Application",
      description:
        "E-commerce web app using Node.js/Express backend, React, MongoDB, authentication, CRUD operations, image uploads, and payment integration.",
      link: "https://github.com/codewithharshal/Ecommerce-Fullstack-Web-application",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <DotGrid
        dotSize={2}
        gap={18}
        baseColor="#bababa"
        activeColor="#242424"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div className="relative z-10 flex flex-col">
        <CardNav
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#FFFFFF70"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        <Hero />
        <Services />
        <Myself />
        <Social />
        <div id="projects" className="w-full sm:w-3xl m-auto px-6">
          <h1 className="font-ins text-2xl mb-8">Projects</h1>
          <div className="flex sm:justify-between justify-start gap-4 overflow-x-auto sm:overflow-visible">
            {ProjectsDetail.map((project, index) => (
              <div key={index} className="flex-shrink-0">
                <Projects {...project} />
              </div>
            ))}
          </div>
        </div>
        <TechStack />
        <div id="achievements-certifications" className=" md:w-3xl m-auto px-6">
          <div className="flex flex-col sm:flex-row">
            <div>
              <h1 className="font-ins text-2xl mb-8">Certifications</h1>
              <Certifications />
            </div>
            <div className="sm:hidden w-72">
              <Separator className="my-10" orientation="horizontal" />
            </div>
            <div className="h-80 sm:block hidden">
              <Separator className="mx-10" orientation="vertical" />
            </div>
            <div>
              <h1 className="font-ins text-2xl mb-8">Achivments</h1>
              <Achivements />
            </div>
          </div>
          <div className="w-72 md:hidden">
            <Separator className="my-10" />
          </div>
        </div>
        <div className="hidden sm:block w-3xl m-auto px-6">
          <Separator className="my-10" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
