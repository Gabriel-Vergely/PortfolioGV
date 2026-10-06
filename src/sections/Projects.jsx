import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: "acrypts",
      title: "ACRYPTS",
      description:
        "Cryptography inventory and compliance tool. It produces a cryptographic CBOM (Cryptography Bill of Materials) and a CAL (Crypto Agility Layer) to make cryptographic migrations easier...",
      timeframe: "2026",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 13v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "flowos",
      title: "FlowOS",
      description:
        "Web platform to build automations with an embedded n8n engine and several AI models, speeding up both the creation and the compliance of workflows...",
      timeframe: "2026",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle cx="5" cy="6" r="2.5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="19" cy="12" r="2.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M7.5 6.9l9 4.1M7.5 17.1l9-4.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "threatlog",
      title: "ThreatLog AI",
      description:
        "Real-time log analyzer (network, system) to detect threats. Different models (RandomForest, DecisionTree) have been trained to detect malicious logs...",
      timeframe: "2025",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 font-roboto transition-colors duration-500 bg-gray-50 text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Título */}
        <div className="flex items-center">
          <h2
            className="text-5xl font-extrabold tracking-tight transition-colors duration-500 text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
          >
            Projects
          </h2>
        </div>

        {/* Rejilla de proyectos */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, timeframe, icon }, idx) => (
            <article
              key={idx}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-sky-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl shadow-md bg-black text-white transition-transform duration-300 group-hover:scale-105">
                  {icon}
                </span>
                <span className="text-sm font-semibold text-sky-600">
                  {timeframe}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>

              <p className="leading-relaxed text-sm text-gray-700 flex-1">
                {description.length > 120
                  ? description.slice(0, 120) + "..."
                  : description}
              </p>

              <Link
                to={`/projects/${id}`}
                className="mt-5 inline-flex items-center gap-1 font-semibold focus:outline-none transition-colors duration-300 text-sky-600 hover:text-blue-900"
              >
                Show more <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
