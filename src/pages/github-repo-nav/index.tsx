import React, { useState } from "react";
import { IconType } from "react-icons";
import { BsCode, BsGraphUp } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { BiBookOpen, BiGitPullRequest } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

document.querySelector("body")!.className =
  "dark:bg-background-github-main bg-light-100";

export const GithubRepoNav = () => {
  const [active, setActive] = useState(3);

  const onClick = (e: React.MouseEvent<HTMLLIElement>, item: number) => {
    e.preventDefault();
    setActive(item);
  };

  return (
    <div className="mt-30 dark:(text-light-100 border-gray-700) text-dark-900 border-b-1">
      <ul className="flex items-end">
        <NavItem
          name="Code"
          Icon={BsCode}
          onClick={(e) => onClick(e, 1)}
          active={active === 1}
        />
        <NavItem
          active={active === 2}
          name="Issues"
          Icon={VscIssues}
          onClick={(e) => onClick(e, 2)}
        />
        <NavItem
          active={active === 3}
          name="Pull Requests"
          Icon={BiGitPullRequest}
          onClick={(e) => onClick(e, 3)}
        />
        <NavItem
          active={active === 4}
          name="Actions"
          Icon={AiFillPlayCircle}
          onClick={(e) => onClick(e, 4)}
        />
        <NavItem
          active={active === 5}
          name="Wiki"
          Icon={BiBookOpen}
          onClick={(e) => onClick(e, 5)}
        />
        <NavItem
          active={active === 6}
          name="Security"
          Icon={HiOutlineShieldExclamation}
          onClick={(e) => onClick(e, 6)}
        />
        <NavItem
          active={active === 7}
          name="Insights"
          Icon={BsGraphUp}
          onClick={(e) => onClick(e, 7)}
        />
        <NavItem
          active={active === 8}
          name="Settings"
          Icon={FiSettings}
          onClick={(e) => onClick(e, 8)}
        />
      </ul>
    </div>
  );
};

type NavItemProps = {
  name: string;
  Icon: IconType;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  active: boolean;
};

const NavItem = ({ Icon, name, onClick, active }: NavItemProps) => {
  return (
    <li
      className={`p-5 cursor-pointer ${
        active
          ? "border-orange-300"
          : "border-transparent dark:hover:(border-light-200) hover:border-dark-900"
      } group border-b-2  rounded-xs`}
      onClick={onClick}
    >
      <a
        className={`flex items-center justify-center gap-2 text-sm 
        ${
          active
            ? " text-dark-900 dark:(text-light-200) "
            : "text-gray-600 group-hover:text-gray-900 dark:(text-gray-500 group-hover:text-light-200)"
        } 
         `}
      >
        <Icon size="1.25rem" />
        {name}
      </a>
    </li>
  );
};
