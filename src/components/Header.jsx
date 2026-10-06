import React from "react";
import AnimatedText from "./AnimatedText";

export default function Header() {
  const lightImage = "/header_light.png";

  const socials = [
    {
      label: "Email",
      href: "mailto:gabriel.vergely@gmail.com",
      path:
        "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
    },
    {
      label: "GitHub",
      href: "https://github.com/gabriel-vergely",
      path:
        "M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/gabriel-vergely",
      path:
        "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.63-1.2 2.17-2.46 4.46-2.46C21.4 7.74 24 10 24 14.6V24h-5v-8.3c0-2-.04-4.56-2.78-4.56-2.78 0-3.2 2.17-3.2 4.42V24h-5V8z",
    },
  ];

  return (
    <header
      className="flex flex-col md:flex-row font-montserrat transition-colors duration-500 bg-white text-black"
    >
        {/* Contenido a la izquierda */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:pl-24 pt-20 md:pt-0 text-left">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight transition-colors duration-500 text-black"
          >
            Hey <span role="img" aria-label="waving hand">👋</span> I'm Gabriel Vergely Fernández
          </h1>

          <p
            className="text-lg md:text-xl font-semibold mb-4 transition-colors duration-500 text-sky-600"
          >
            AI & Big Data | Full-stack | Cybersecurity
          </p>

          <p className="text-base md:text-lg mb-5 max-w-prose transition-colors duration-500 text-gray-600">
            Turning complex problems into scalable, reliable software — and
            breaking things on purpose in CTF competitions.
          </p>

          <p
            className="text-base md:text-lg font-medium min-h-[1.5rem] transition-colors duration-500 text-gray-900"
          >
            <AnimatedText />
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="/CV.pdf"
              download
              className="inline-block px-6 py-3 rounded-xl font-semibold shadow-md transition-colors duration-300 bg-sky-600 text-white hover:bg-blue-800"
            >
              Get CV →
            </a>
            <a
              href="/#projects"
              className="inline-block px-6 py-3 rounded-xl font-semibold transition-colors duration-300 border-2 border-sky-600 text-sky-700 hover:bg-sky-50"
            >
              View Projects
            </a>
          </div>

          {/* Redes */}
          <div className="flex items-center gap-5 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-sky-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      {/* Imagen a la derecha */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-3 md:pr-24">
        <img
          src={lightImage}
          alt="Gabriel Vergel Fernández"
          className="w-full md:w-auto max-h-[400px] md:max-h-screen object-contain"
        />
      </div>
    </header>
  );
}
