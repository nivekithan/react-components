import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GreenButton } from "./pages/github-green-button";

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.add("light");
}
export const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/github-green-button">
            <GreenButton />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
};

export const Home = () => {
  return (
    <section className="h-screen grid place-items-center">
      <p className="text-2xl dark:text-light-50 text-dark-400">
        In address bar after the domain name type the name of the component you
        want to see
      </p>
    </section>
  );
};
