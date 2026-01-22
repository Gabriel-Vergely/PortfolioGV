import { Link } from "react-router-dom";

export default function NotFoundPage({ isDark = false }) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Icono o ilustración */}
      <div className="mb-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 text-red-500 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      </div>

      {/* Mensaje principal */}
      <h1
        className={`text-6xl font-extrabold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        404
      </h1>
      <p className="text-xl sm:text-2xl mb-6 opacity-90">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        It might have been removed, renamed, or never existed.
      </p>

      {/* Botón de regreso */}
      <Link
        to="/"
        className={`px-4 py-2 rounded font-semibold underline ${
          isDark ? "text-red-400 hover:text-red-600" : "text-blue-600 hover:text-blue-900"
        }`}
      >
        ← Go back home
      </Link>
      
      {/* Fondo decorativo opcional */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div
          className={`w-full h-full bg-gradient-to-tr ${
            isDark
              ? "from-black/70 via-gray-900/50 to-black/70"
              : "from-blue-50 via-white to-blue-50"
          }`}
        />
      </div>
    </div>
  );
}
