import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator.jsx";

const Projects = ({ img, title, description, link }) => {
  return (
    <div className="w-full max-w-[90vw] sm:max-w-sm mx-auto px-4">
      <div className="">
        <Card className="w-full p-5">
          <img className="h-80 object-contain  rounded-sm" src={img} alt="" />
          <div>
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button variant="outline">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live Link
            </a>
          </Button>
        </Card>
      </div>
      <Separator className="mt-8" />
    </div>
  );
};

export default Projects;
