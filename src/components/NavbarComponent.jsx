import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div>
      <nav className="navbar flex flex-row gap-6 space-between justify-center items-center list-none ">
        <li>
          <Link to="/home-page">Home Page </Link>
        </li>
        <li>
          <Link to="/about-as">About Page</Link>
        </li>

        <li>
          <Link to="/contact-us">Contact Page</Link>
        </li>
      </nav>
    </div>
  );
}
