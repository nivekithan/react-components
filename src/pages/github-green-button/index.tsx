import React from "react";
import { GreenButton } from "./components";

document.querySelector("body")!.className =
  "dark:bg-background-github-main bg-light-100";

export const GithubGreenButton = () => {
  return <GreenButton />;
};
