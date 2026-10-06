import { useState, useRef, useEffect } from "react";

export default function ExperienceEstudies() {
  const initialExperiences = [
    {
      year: "Working",
      title: "AI Security Engineer Junior",
      company: "BCNSoluciona",
      details: [
        "Creation of AI systems",
        "Security of AI",
        "AI governance",
        "Automations",
      ],
    },
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
  const [isCollapsing, setIsCollapsing] = useState(false);
  const containerRef = useRef(null);
  const collapsedHeightRef = useRef(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // Mientras colapsa, los ítems extra siguen montados para poder ocultarlos animadamente
  const visibleExperiences =
    showMore || isCollapsing
      ? initialExperiences
      : initialExperiences.slice(0, 2);

  useEffect(() => {
    // Durante el colapso la altura objetivo ya se fijó en handleToggle; no re-medir
    if (isCollapsing) return;
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight;
      setContainerHeight(height);
      if (!showMore) {
        collapsedHeightRef.current = height;
      }
    }
  }, [showMore, isCollapsing]);

  const handleToggle = () => {
    if (!showMore) {
      // Show More: animado (cancela un colapso en curso si lo hay)
      setIsCollapsing(false);
      setIsExpanding(true);
      setShowMore(true);
    } else {
      // Show Less: misma animación a la inversa, hacia la altura colapsada
      setIsExpanding(false);
      setIsCollapsing(true);
      setShowMore(false);
      setContainerHeight(collapsedHeightRef.current);
    }
  };

  const timelineMobile = [
    ...initialExperiences.map((exp) => ({ type: "exp", ...exp })),
    ...certificationsBetween.map((cert) => ({ type: "cert", ...cert })),
  ].sort((a, b) => b.year - a.year);

  return (
    <section
      id="experience"
      className="w-full py-20 font-roboto transition-colors duration-500 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-8">
        <h2
          className="text-6xl font-extrabold tracking-tight leading-tight mb-12 ml-15 text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
        >
          My Timeline
        </h2>

        {/* Timeline Escritorio */}
        <div className="hidden md:block relative mt-20">
          {/* Línea troncal */}
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 border-l-4 ${
              isExpanding || isCollapsing
                ? "transition-all duration-1000 ease-in-out"
                : ""
            } border-black`}
            style={{ height: containerHeight }}
          ></div>

          {/* Contenedor timeline */}
          <div
            ref={containerRef}
            className={`relative overflow-hidden ${
              isExpanding || isCollapsing
                ? "transition-all duration-1000 ease-in-out"
                : ""
            }`}
            style={{ maxHeight: containerHeight }}
            onTransitionEnd={(e) => {
              // Al terminar de encoger, desmontar los ítems ya ocultos
              if (e.target === e.currentTarget && isCollapsing) {
                setIsCollapsing(false);
              }
            }}
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
                      } w-8 h-8 bg-black border-white border-4 rounded-full shadow-md z-10`}
                    ></div>

                    <p
                      className={`font-semibold mb-1 text-sky-600 ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                    >
                      {exp.year}
                    </p>
                    <h3 className="text-2xl font-bold text-black">
                      {exp.title}
                    </h3>
                    <p className="font-semibold mb-2 text-sky-600">
                      {exp.company}
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-900">
                      {exp.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  {index < visibleExperiences.length - 1 &&
                    certificationsBetween[index] && (
                      <div className="relative my-12 mb-40">
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div className="w-6 h-6 border-4 rounded-full shadow-sm bg-white border-blue-900"></div>
                        </div>
                        {/* Certificaciones */}
                        {isLeft ? (
                          <div className="relative mt-[-10px]">
                            <div
                              className="absolute left-1/2 top-3 h-0.5 bg-blue-900"
                              style={{ width: "calc(50% - 150px)" }}
                            ></div>
                            <div
                              className="absolute top-[-10px] left-[600px] transform translate-x-[calc(50%-150px)] px-3 py-1 rounded shadow-md bg-white text-gray-800"
                              style={{ marginLeft: "calc(50% - 150px)" }}
                            >
                              <p className="text-sm font-semibold">
                                {certificationsBetween[index].name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {certificationsBetween[index].year}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="relative mt-[-10px]">
                            <div
                              className="absolute right-1/2 top-3 h-0.5 bg-blue-900"
                              style={{ width: "calc(50% - 150px)" }}
                            ></div>
                            <div
                              className="absolute top-[-10px] right-[600px] transform -translate-x-[calc(50%-150px)] px-3 py-1 rounded shadow-md text-right bg-white text-gray-800"
                              style={{ marginRight: "calc(50% - 150px)" }}
                            >
                              <p className="text-sm font-semibold">
                                {certificationsBetween[index].name}
                              </p>
                              <p className="text-xs text-gray-500">
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
              className="font-semibold underline focus:outline-none text-sky-600 hover:text-blue-900"
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
                <p className="font-semibold mb-1 text-sky-600">{item.year}</p>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                {item.company && (
                  <p className="font-semibold mb-2 text-sky-600">
                    {item.company}
                  </p>
                )}
                {item.details && (
                  <ul className="list-disc list-inside text-gray-900">
                    {item.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div key={i} className="relative pl-4">
                <p className="font-semibold mb-1 text-sky-600">{item.year}</p>
                <h3 className="text-lg font-semibold italic text-blue-900">
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
