// ------ Dependencies ------

import React from "react";
import "./style.css";

// ------ Nav ------

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


// ------ Export ------
export default Nav;
