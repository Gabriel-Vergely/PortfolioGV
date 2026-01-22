import { useState, useRef, useEffect } from "react";

export default function ExperienceEstudies({ isDark }) {
  const initialExperiences = [
    {
      year: "Studying",
      title: "Computer engineering",
      company: "UOC",
      details: [
        "Fundamentals of computing",
        "Mathematics",
        "ICT skills",
        "Circuit laboratory",
      ],
    },
    {
      year: "2025",
      title: "Specialization in AI & big data",
      company: "IOC",
      details: [
        "Binary and multi-class classification",
        "Neural networks and deep learning",
        "Density-based algorithms",
        "Cloud computing with AWS",
        "Data governance and ETL",
        "Big data and ML with Databricks",
        "Real-time analysis with Spark",
      ],
    },
    {
      year: "2025",
      title: "Bootcamp cybersecurity",
      company: "Fundasplai",
      details: [
        "Network security and intrusion detection",
        "Ethical hacking and penetration testing",
        "Threat analysis and risk management",
        "Cryptography and secure communications",
        "Incident response and digital forensics",
      ],
    },
    {
      year: "2024",
      title: "Full-stack Developer",
      company: "Institut Provençana",
      details: [
        "User interface and front-end development",
        "API and backend integration",
        "Database design and management",
        "Full web development",
        "Containerization with Docker",
        "Agile methodologies and version control",
      ],
    },
    {
      year: "2024",
      title: "Intern",
      company: "BSC",
      details: [
        "Develop data visualizations",
        "Standardize data sets",
        "Ensure code compliance",
      ],
    },
  ];

  const certificationsBetween = [
    { name: "CPTS", year: "Studying" },
    { name: "eJPT", year: "2025" },
    { name: "AZ-900", year: "2025" },
  ];

  const [showMore, setShowMore] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const visibleExperiences = showMore
    ? initialExperiences
    : initialExperiences.slice(0, 2);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, [showMore, visibleExperiences]);

  const handleToggle = () => {
    if (!showMore) {
      // Show More: animado
      setIsExpanding(true);
      setShowMore(true);
    } else {
      // Show Less: sin animación
      setIsExpanding(false);
      setShowMore(false);
      if (lineRef.current && containerRef.current) {
        // Quitar transición temporalmente para reducción instantánea
        lineRef.current.style.transition = "none";
        lineRef.current.style.height = containerRef.current.scrollHeight + "px";
        // Forzar reflow para aplicar cambios
        void lineRef.current.offsetHeight;
        // Restaurar transición para la próxima expansión
        lineRef.current.style.transition = "";
      }
    }
  };

  const timelineMobile = [
    ...initialExperiences.map((exp) => ({ type: "exp", ...exp })),
    ...certificationsBetween.map((cert) => ({ type: "cert", ...cert })),
  ].sort((a, b) => b.year - a.year);

  return (
    <section
      id="experience"
      className={`w-full py-20 font-roboto transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8">
        <h2
          className={`text-6xl font-extrabold tracking-tight leading-tight mb-12 ml-15 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
        >
          My Timeline
        </h2>

        {/* Timeline Escritorio */}
        <div className="hidden md:block relative mt-20">
          {/* Línea troncal */}
          <div
            ref={lineRef}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 border-l-4 ${
              isExpanding ? "transition-all duration-1000 ease-in-out" : ""
            } ${isDark ? "border-white" : "border-black"}`}
            style={{ height: containerHeight }}
          ></div>

          {/* Contenedor timeline */}
          <div
            ref={containerRef}
            className={`relative overflow-hidden ${
              isExpanding ? "transition-all duration-1000 ease-in-out" : ""
            }`}
            style={{ maxHeight: containerHeight }}
          >
            {visibleExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const delay = index * 150;
              return (
                <div
                  key={index}
                  style={{
                    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                    opacity: 1,
                    transform: "translateY(0)",
                  }}
                >
                  <div
                    className={`relative w-full md:w-1/2 px-6 ${
                      isLeft
                        ? "md:left-0 md:pr-14 text-right md:text-right"
                        : "md:ml-auto md:pl-14 text-left"
                    }`}
                  >
                    <div
                      className={`absolute top-6 ${
                        isLeft ? "right-[-16px]" : "left-[-16px]"
                      } w-8 h-8 ${
                        isDark
                          ? "bg-red-500 border-gray-900"
                          : "bg-black border-white"
                      } border-4 rounded-full shadow-md z-10`}
                    ></div>

                    <p
                      className={`font-semibold mb-1 ${
                        isDark ? "text-red-400" : "text-sky-600"
                      } ${isLeft ? "text-right" : "text-left"}`}
                    >
                      {exp.year}
                    </p>
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? "text-red-500" : "text-black"
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className={`font-semibold mb-2 ${
                        isDark ? "text-red-400" : "text-sky-600"
                      }`}
                    >
                      {exp.company}
                    </p>
                    <ul
                      className={`list-disc list-inside mb-6 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  {index < visibleExperiences.length - 1 &&
                    certificationsBetween[index] && (
                      <div className="relative my-12 mb-40">
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div
                            className={`w-6 h-6 border-4 rounded-full shadow-sm ${
                              isDark
                                ? "bg-black border-red-500"
                                : "bg-white border-blue-900"
                            }`}
                          ></div>
                        </div>
                        {/* Certificaciones */}
                        {isLeft ? (
                          <div className="relative mt-[-10px]">
                            <div
                              className={`absolute left-1/2 top-3 h-0.5 ${
                                isDark ? "bg-red-500" : "bg-blue-900"
                              }`}
                              style={{ width: "calc(50% - 150px)" }}
                            ></div>
                            <div
                              className={`absolute top-[-10px] left-[600px] transform translate-x-[calc(50%-150px)] px-3 py-1 rounded shadow-md ${
                                isDark
                                  ? "bg-black text-red-400"
                                  : "bg-white text-gray-800"
                              }`}
                              style={{ marginLeft: "calc(50% - 150px)" }}
                            >
                              <p className="text-sm font-semibold">
                                {certificationsBetween[index].name}
                              </p>
                              <p
                                className={`text-xs ${
                                  isDark ? "text-red-300" : "text-gray-500"
                                }`}
                              >
                                {certificationsBetween[index].year}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="relative mt-[-10px]">
                            <div
                              className={`absolute right-1/2 top-3 h-0.5 ${
                                isDark ? "bg-red-500" : "bg-blue-900"
                              }`}
                              style={{ width: "calc(50% - 150px)" }}
                            ></div>
                            <div
                              className={`absolute top-[-10px] right-[600px] transform -translate-x-[calc(50%-150px)] px-3 py-1 rounded shadow-md text-right ${
                                isDark
                                  ? "bg-black text-red-400"
                                  : "bg-white text-gray-800"
                              }`}
                              style={{ marginRight: "calc(50% - 150px)" }}
                            >
                              <p className="text-sm font-semibold">
                                {certificationsBetween[index].name}
                              </p>
                              <p
                                className={`text-xs ${
                                  isDark ? "text-red-300" : "text-gray-500"
                                }`}
                              >
                                {certificationsBetween[index].year}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12 relative z-20">
            <button
              onClick={handleToggle}
              className={`font-semibold underline focus:outline-none ${
                isDark
                  ? "text-red-400 hover:text-red-600"
                  : "text-sky-600 hover:text-blue-900"
              }`}
            >
              {showMore ? "Show less..." : "Show more..."}
            </button>
          </div>
        </div>

        {/* Timeline Móvil */}
        <div className="md:hidden mt-10 space-y-10">
          {timelineMobile.map((item, i) =>
            item.type === "exp" ? (
              <div key={i} className="relative pl-4">
                <p
                  className={`font-semibold mb-1 ${
                    isDark ? "text-red-400" : "text-sky-600"
                  }`}
                >
                  {item.year}
                </p>
                <h3
                  className={`text-xl font-bold ${
                    isDark ? "text-red-500" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>
                {item.company && (
                  <p
                    className={`font-semibold mb-2 ${
                      isDark ? "text-red-400" : "text-sky-600"
                    }`}
                  >
                    {item.company}
                  </p>
                )}
                {item.details && (
                  <ul
                    className={`list-disc list-inside ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div key={i} className="relative pl-4">
                <p
                  className={`font-semibold mb-1 ${
                    isDark ? "text-red-400" : "text-sky-600"
                  }`}
                >
                  {item.year}
                </p>
                <h3
                  className={`text-lg font-semibold italic ${
                    isDark ? "text-red-500" : "text-blue-900"
                  }`}
                >
                  {item.name}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
