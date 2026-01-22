import React from "react";
import AnimatedText from "./AnimatedText";

export default function Header({ isDark, setIsDark }) {
  const lightImage = "/header_light.png";
  const darkImage = "/header_night.png";

  return (
    <header
      className={`flex flex-col md:flex-row font-montserrat transition-colors duration-500 ${
        isDark ? "bg-black text-white mb-5" : "bg-white text-black"
      }`}
    >
      {/* Contenido a la izquierda */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:pl-16 pt-20 md:pt-0 text-left transition-colors duration-500">
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Hey <span role="img" aria-label="waving hand">👋</span> I'm Gabriel Vergely Fernández
        </h1>

        <p
          className={`text-lg md:text-xl font-semibold mb-5 transition-colors duration-500 ${
            isDark ? "text-red-500" : "text-sky-600"
          }`}
        >
          AI & Big Data | Full-stack | Cybersecurity
        </p>

        <p
          className={`text-base md:text-lg font-medium min-h-[1.5rem] transition-colors duration-500 ${
            isDark ? "text-gray-300" : "text-gray-900"
          }`}
        >
          <AnimatedText />
        </p>

        {/* Botón */}
        <a
          href="/CV.pdf"
          download
          className={`inline-block px-6 py-3 mt-10 rounded-xl font-semibold shadow-md transition-colors duration-300 ${
            isDark
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-sky-600 text-white hover:bg-blue-800"
          }`}
        >
          Get CV →
        </a>
      </div>


      {/* Imagen a la derecha */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-3">
        <img
          src={isDark ? darkImage : lightImage}
          alt="Gabriel Vergel Fernández"
          className="w-full md:w-auto max-h-[400px] md:max-h-screen object-contain"
        />
      </div>

    </header>
  );
}
