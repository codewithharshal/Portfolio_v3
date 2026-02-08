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
            className="h-8"
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
            className="h-8"
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
            className="h-8"
          />
        </a>

        {/* Codechef */}
        <a
          href="https://www.codechef.com/users/glad_mirth_17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/CodeChef-5C2D91?style=for-the-badge&logo=codechef&logoColor=white"
            alt="codechef"
            className="h-8"
          />
        </a>

        {/* Hackerrank */}
        <a
          href="https://www.hackerrank.com/profile/Travler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white"
            alt="Hackerrank"
            className="h-8"
          />
        </a>
      </div>
      <Separator className="mt-11" />
    </div>
  );
};

export default Social;
