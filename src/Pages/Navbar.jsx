import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <center>
        <h1>ADMIN DASHBOARD</h1>
      </center>
      <Link to={"/"}>
        <button>DASHBOARD</button>{" "}
      </Link>
      <Link to={"/stats"}>
        <button>STATS</button>
      </Link>
    </div>
  );
};
