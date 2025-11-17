import React from "react";
import { Separator } from "./ui/separator.jsx";
const Social = () => {
  return (
    <div id="social" className="w-full max-w-[90vw] sm:max-w-3xl mx-auto p-6">
      <h2 className="text-2xl mb-4 font-ins">Social Profiles</h2>

      <div className="flex flex-wrap justify-start items-center gap-5 sm:gap-10">
        {/* GitHub */}
        <a
          href="https://github.com/codewithharshal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
            className="h-[32px]"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/harshalsewatkar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn"
            className="h-[32px]"
          />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Travler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/LeetCode-F89F1B?style=for-the-badge&logo=leetcode&logoColor=white"
            alt="LeetCode"
            className="h-[32px]"
          />
        </a>
        {/* Mail */}
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=harshalsewatkar971@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Gmail-c71610?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Mail"
            className="h-[32px]"
          />
        </a>
      </div>
      <Separator className="mt-11" />
    </div>
  );
};

export default Social;
