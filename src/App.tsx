import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <div>
      {Navbar}
      <Router></Router>
    </div>
  );
};

const toggleDarkMode = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  document.documentElement.classList.toggle("dark");
};

export const Navbar = ( 
  <nav className="flex justify-center">
    <button
      onClick={toggleDarkMode}
      className="dark:text-light-100 text-dark-800"
    >
      Dark
    </button>
  </nav>
);

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
