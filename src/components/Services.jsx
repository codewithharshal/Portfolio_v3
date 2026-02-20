import React from "react";
import { Separator } from "./ui/separator.jsx";

const Services = () => {
  return (
    // 'items-stretch' will help the vertical separator match the height
    <div className="px-11 pt-5 md:flex md:items-center md:justify-start md:gap-10 xl:m-auto">
      {/* --- Block 1 (Backend Dev) --- */}
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">
          Backend Development
        </h4>
        <p className="text-muted-foreground text-sm">
          Building robust, scalable server-side logic.
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
          Full Stack Web Development
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
