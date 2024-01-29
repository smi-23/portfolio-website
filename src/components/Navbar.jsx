import React from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";

const navLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">LOGO</Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            {navLink.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title}/>
            </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;