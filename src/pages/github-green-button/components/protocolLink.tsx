import React, { useState } from "react";

type ProtocolLinkProps = {
  name: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ProtocolLink = ({ name, active, onClick }: ProtocolLinkProps) => {
  return (
    <button
      className={`text-xs ${
        active ? "dark:text-light-100 text-dark-800" : "dark:text-gray-300 text-gray-500"
      } dark:hover:text-light-100 hover:text-dark-800 ${
        active ? "border-orange-300 border-b-width-2" : ""
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
