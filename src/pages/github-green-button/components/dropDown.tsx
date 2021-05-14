import React from "react";
import { BannerList } from "./banner";
import { header } from "./header";
import { ProtocolGroup } from "./protocolGroup";
import { RiComputerLine, RiFileZipLine } from "react-icons/ri";

type DropDownProps = {
  styles: {
    [key: string]: React.CSSProperties;
  };
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
};

export const DropDown = React.forwardRef<HTMLDivElement, DropDownProps>(
  ({ styles, attributes }, ref) => {
    return (
      <div
        className={`w-100 dark:(text-light-100 bg-background-github-overlay border-gray-700) 
        text-bg-dark-800 bg-light-100 rounded-md 
        absolute shadow-xl border-1 border-gray-300 mt-2`
      }
        ref={ref}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className="p-3 flex flex-col gap-y-2">
          {header}
          <ProtocolGroup />
        </div>
        <ul>
          <BannerList
            text="Open with Github Desktop"
            Icon={RiComputerLine}
            onClick={(e) => {
              e.preventDefault();
            }}
          />
          <BannerList
            text="Download ZIP"
            Icon={RiFileZipLine}
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </ul>
      </div>
    );
  }
);

DropDown.displayName = "DropDown";
