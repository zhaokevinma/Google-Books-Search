import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
