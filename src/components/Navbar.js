import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-items-container">
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>All Countries 🌎</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
