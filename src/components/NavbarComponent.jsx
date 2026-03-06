import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
      : "text-gray-600 hover:text-indigo-500 transition-colors";

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-black text-indigo-600 tracking-tighter">
        TestingReact
      </div>
      <ul className="flex flex-row gap-8 items-center list-none m-0">
        <li>
          <NavLink to="/home-page" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
