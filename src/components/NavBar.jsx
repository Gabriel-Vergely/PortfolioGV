import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "WhoAmI", href: "/#whoami" },
  { label: "MyTimeline", href: "/#experience" },
  { label: "Pwn", href: "/#pwn" },
  { label: "Projects", href: "/#projects" },
  { label: "Ls", href: "/#ctf-preview" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const logoLight = "/gvlogo.png"; // logo día

  const handleScroll = (hash) => {
    setIsOpen(false);
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md font-montserrat transition-colors duration-300 h-12 md:h-14 flex items-center bg-blue-950"
    >
      <div className="w-full px-6 md:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/#top"
          onClick={() => handleScroll("#top")}
          className="flex items-center" // alineado con el texto del hero
        >
          <img
            src={logoLight}
            alt="Logo"
            className="h-10 md:h-14 w-auto"
          />
        </Link>


        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-8 font-semibold items-center">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                to={href}
                className="text-white transition-colors duration-300 hover:text-sky-600"
                onClick={() =>
                  handleScroll(href.includes("#") ? "#" + href.split("#")[1] : null)
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white focus:outline-none ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div
          className="md:hidden fixed top-12 left-0 w-full h-[calc(100%-3rem)] backdrop-blur-sm z-40 flex flex-col items-center justify-start py-6 space-y-6 transition-all duration-300 bg-white text-blue-950"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="text-2xl hover:text-sky-500 transition-colors duration-300"
              onClick={() =>
                handleScroll(href.includes("#") ? "#" + href.split("#")[1] : null)
              }
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
