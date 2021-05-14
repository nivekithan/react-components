import React, { useState } from "react";
import { ProtocolLink } from "./protocolLink";
import { FiClipboard } from "react-icons/fi";

const repoName = "nivekithan/react-components";

export const ProtocolGroup = () => {
  const [active, setActive] = useState<"HTTPS" | "SSH" | "GH">("GH");
  const inputValue = (() => {
    if (active === "GH") {
      return `gh repo clone ${repoName}`;
    } else if (active === "HTTPS") {
      return `https://github.com/${repoName}.git`;
    } else if (active === "SSH") {
      return `git@github.com:${repoName}.git`;
    } else {
      return "";
    }
  })();

  const onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    name: "HTTPS" | "SSH" | "GH"
  ) => {
    e.preventDefault();
    setActive(name);
  };

  const copyToClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(inputValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <ProtocolLink
          name="HTTPS"
          active={active === "HTTPS"}
          onClick={(e) => onClick(e, "HTTPS")}
        />
        <ProtocolLink
          name="SSH"
          active={active === "SSH"}
          onClick={(e) => onClick(e, "SSH")}
        />
        <ProtocolLink
          name="Github Cli"
          active={active === "GH"}
          onClick={(e) => onClick(e, "GH")}
        />
      </div>
      <div className="flex">
        <input
          className="dark:bg-dark-900 border-gray-700 border-t-1 border-b-1 border-l-1 w-full text-xs py-2 px-2 rounded-l-md dark:text-light-100 "
          value={inputValue}
        />
        <button
          className="group bg-background-overlay px-5 rounded-r-md border-gray-700 dark:hover:border-gray-500 hover:border-gray-900 border-1"
          onClick={copyToClipboard}
        >
          <FiClipboard className="stroke-gray-500 dark:group-hover:stroke-gray-300 group-hover:stroke-gray-700" />
        </button>
      </div>
      <DescriptionText active={active} />
    </div>
  );
};

type DescriptionTextProps = {
  active: "HTTPS" | "GH" | "SSH";
};

const DescriptionText = ({ active }: DescriptionTextProps) => {
  const description = (() => {
    if (active === "HTTPS") {
      return "Use Git or checkout with SVN using the web URL.";
    } else if (active === "SSH") {
      return "Use a password-protected SSH key.";
    } else if (active === "GH") {
      return "Work fast with our official CLI.";
    } else {
      throw new Error(
        `The value of active should only be HTTPS | SSH | GH, but the value of given active is ${active}`
      );
    }
  })();

  return (
    <p className="text-xs text-gray-500">
      {description}{" "}
      {active === "GH" ? (
        <a
          href="https://cli.github.com/"
          target="_blank"
          className="text-blue-github-500"
        >
          Learn more
        </a>
      ) : null}
    </p>
  );
};
