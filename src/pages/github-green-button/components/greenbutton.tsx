import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { usePopper } from "react-popper";
import { DropDown } from "./dropDown";

export const GreenButton = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [greenButtonRef, setGreenButtonRef] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] =
    useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(greenButtonRef, popperElement, {placement : "bottom-end"});

  const onCodeButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDropDown((s) => !s);
  };

  return (
    <div className="h-screen grid place-items-center">
      <button
        ref={setGreenButtonRef}
        onClick={onCodeButtonClick}
        className="bg-green-github-500 hover:bg-green-github-400 text-light-300 py-2 px-5 text-base rounded-lg font-semi-bold"
      >
        <span className="flex items-center gap-1.5">
          <HiDownload size="1.25rem" />
          <span>Code</span>
          <FaCaretDown className="self-end mb-0.75" size="1rem" />
        </span>
      </button>
      {showDropDown ? (
        <DropDown
          ref={setPopperElement}
          styles={styles}
          attributes={attributes}
        />
      ) : null}
    </div>
  );
};
