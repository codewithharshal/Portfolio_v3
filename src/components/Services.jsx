import React from "react";
import { Separator } from "./ui/separator.jsx";

const Services = () => {
  return (
    // 'items-stretch' will help the vertical separator match the height
    <div className="max-w-[90vw] sm:max-w-3xl m-auto flex gap-5 mt-10 items-stretch p-6">
      {/* --- Block 1 (Backend Dev) --- */}
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">
          Backend Development (Nodejs)
        </h4>
        <p className="text-muted-foreground text-sm">
          Building robust, scalable server-side logic and APIs.
        </p>
        {/* Added the horizontal separator back */}
        <Separator className="my-4" />
      </div>

      {/* --- Vertical Separator --- */}
      <div className="h-14">
        <Separator orientation="vertical" />
      </div>

      {/* --- Block 2 (Data Engineer) --- */}
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">
          Full Stack Web Development (Reactjs & Nodejs)
        </h4>
        <p className="text-muted-foreground text-sm">
          Designing and building Web App.
        </p>
        {/* Added the horizontal separator back */}
        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default Services;
