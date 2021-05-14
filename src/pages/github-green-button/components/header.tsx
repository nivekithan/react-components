import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";

export const header = (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-5">
      <AiOutlineCode
        size="1rem"
        className="dark:fill-light-100 fill-dark-800"
      />
      <h5 className="font-semi-bold text-sm dark:text-light-100 ">Clone</h5>
    </div>
    <a
      className="cursor-pointer relative top-0.5"
      href="https://docs.github.com/en/github/getting-started-with-github/about-remote-repositories"
      target="_blank"
    >
      <FiHelpCircle className="hover:stroke-blue-github-500 hover:stroke-2" />
    </a>
  </div>
);
