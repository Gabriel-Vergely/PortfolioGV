import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects({ isDark }) {
  const projects = [
    {
      id: "QuantumDrive",
      title: "QuantumDrive",
      description:
        "QuantumDrive cloud storage platform everything is managed from a web app where users are notified of file changes secured by client-side quantum encryption...",
      timeframe: "2026",
      icon: (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="32" rx="20" ry="10" stroke="currentColor" strokeWidth="3"/>
          <ellipse cx="32" cy="32" rx="10" ry="20" stroke="currentColor" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      id: "Fourpwn",
      title: "4Pwn",
      description:
        "Pentest as a service platform everything is managed from a web application where the customer is notified of vulnerabilities found by their assigned technician in real time...",
      timeframe: "2025",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: "threatlog",
      title: "ThreatLog",
      description:
        "Real-time log analyzer (network, system) to detect threats. Different models (RandomForest, DecisionTree) have been trained to detect malicious logs...",
      timeframe: "2025",
      icon: (
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
          <circle cx="26" cy="26" r="12" stroke="currentColor" strokeWidth="3"/>
          <line x1="36" y1="36" x2="50" y2="50" stroke="currentColor" strokeWidth="3"/>
        </svg>
      ),
    },
  ];

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="projects"
      className={`w-full py-20 font-roboto transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Título */}
        <div className="flex items-center">
          <h2
            className={`text-5xl font-extrabold tracking-tight transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
          >
            Projects
          </h2>
        </div>

        {/* Lista de Proyectos */}
        <ul
          className={`relative mt-15 ml-6 space-y-16 border-l-2 ${
            isDark ? "border-gray-700" : "border-gray-300"
          }`}
        >
          {projects.map(({ id, title, description, timeframe, icon }, idx) => {
            return (
              <li key={idx} className="relative">
                {/* Marker */}
                <span
                  className={`absolute -left-5 top-2 flex items-center justify-center w-10 h-10 rounded-full shadow-md ${
                    isDark ? "bg-gray-200 text-red-500" : "bg-black text-white"
                  }`}
                >
                  {icon}
                </span>

                {/* Contenido */}
                <div className="pl-8 max-w-xl">
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      isDark ? "text-red-500" : "text-sky-600"
                    }`}
                  >
                    {timeframe}
                  </p>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`leading-relaxed mb-2 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {description.length > 100
                      ? description.slice(0, 100) + "..."
                      : description}
                  </p>
                  <Link
                    to={`/projects/${id}`} // Redirige a la página de detalle del proyecto
                    className={`font-semibold underline focus:outline-none transition-colors duration-300 ${
                      isDark
                        ? "text-red-500 hover:text-red-600"
                        : "text-sky-600 hover:text-blue-900"
                    }`}
                  >
                    Show more...
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
