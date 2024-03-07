import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Pricing", to: "/pricing" },
    { name: "Services", to: "/services" },
    { name: "Project", to: "/project" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav>
      <div className="flex items-center justify-between h-16 lg:h-24">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center gap-1 text-3xl font-dm-serif">
            <img className="w-auto text-yellow-300 h-9" src={logo} alt="logo" />
            SELHONO
          </Link>
        </div>

        {/* this is the hamburger button */}
        {isOpen ? (
          // this svg is hamburger icon
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg
              className="w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        ) : (
          // this svg is cross icon
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* visible menu for large devices */}
        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 ">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={`text-xl font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? styles.active : "")}`}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* for mobile devices this will work*/}
        <div
          className={`lg:hidden z-30 absolute ml-auto flex flex-col gap-3 items-center  justify-center transition-all duration-500 ease-in-out bg-gradient-to-b from-gray-500 to-gray-600 w-5/6 md:w-2/3 p-10 md:p-14 rounded-xl  ${
            isOpen
              ? `top-1/4 md:top-1/3 left-1/2 -translate-x-1/2  `
              : `-top-2/3 left-1/2 -translate-x-1/2 `
          }`}>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={`text-base font-semibold text-white/90 transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? styles.active : "")}`}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
