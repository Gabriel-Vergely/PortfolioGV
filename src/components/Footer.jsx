export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-8 relative transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-blue-950 text-white"
      }`}
    >
      {/* Barra superior */}
      <div
        className={`absolute top-0 left-0 w-full h-1 ${
          isDark ? "bg-red-500" : "bg-sky-600"
        }`}
      ></div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        <p className="mb-4 md:mb-0 text-sm flex items-center gap-2">
          Made with{" "}
          <span
            role="img"
            aria-label="heart"
            className={`text-lg ${
              isDark ? "text-red-500" : "text-sky-600"
            }`}
          >
            ❤️
          </span>{" "}
          by Gabriel Vergely Fernández
        </p>
        <div className="flex space-x-6">
          {/* Gmail */}
          <a
            href="mailto:gabriel.vergely@gmail.com"
            className={`transition ${
              isDark ? "hover:text-red-500" : "hover:text-blue-300"
            }`}
            aria-label="Email"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 27.8L6.1 16.5v14.8l17.9 11 17.9-11V16.5z"
              />
              <path fill="#4285F4" d="M24 27.8L41.9 16.5v-6.6H24z" />
              <path fill="#34A853" d="M6.1 16.5l10.7 8.2L6.1 34.5z" />
              <path fill="#FBBC05" d="M41.9 9.9H24l10.7 8.2z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gabriel-vergely"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark ? "hover:text-red-500" : "hover:text-blue-300"
            }`}
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isDark ? "white" : "#0284C7"}
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.23-3.19-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.86.12 3.16.77.83 1.23 1.9 1.23 3.19 0 4.58-2.8 5.6-5.48 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/gabriel-vergely"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark ? "hover:text-red-500" : "hover:text-blue-300"
            }`}
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001 2.5 2.5 0 01-.02-5.001zM3 9h4v12H3V9zm7.5 0h3.5v1.7h.05a3.84 3.84 0 013.5-1.9c3.74 0 4.44 2.46 4.44 5.65V21h-4v-6.2c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.64-2.42 3.33V21h-4V9z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
