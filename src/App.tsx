import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <div className="h-screen grid place-items-center">
      <form>
        <label className="flex flex-col gap-y-2">
          <span className="medium-text">Password</span>
          <input
            type="password"
            className="border-1 border-blue-400 outline-none h-[51px] w-[250px] p-2 medium-text rounded"
            placeholder="password"
          />
        </label>
      </form>
    </div>
  );
};
