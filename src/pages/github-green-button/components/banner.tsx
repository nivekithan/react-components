import React from "react";
import { IconType } from "react-icons";

type BannerListProps = {
  Icon: IconType;
  text: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const BannerList = ({ Icon, text, onClick }: BannerListProps) => {
  return (
    <li className="dark:border-gray-700 border-gray-300 border-t-1 dark:hover:bg-background-github-hover hover:bg-light-500 px-3 cursor-pointer" tabIndex={0}>
      <div className="py-4">
        <a className="flex gap-4 items-center " onClick={onClick}>
          <Icon size="1.25rem" />
          <p className="text">{text}</p>
        </a>
      </div>
    </li>
  );
};
