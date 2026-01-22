export default function Pwn({ isDark }) {
    return (
      <section
        id="pwn"
        className={`w-full py-20 font-roboto transition-colors duration-500 ${
          isDark ? "bg-zinc-800 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-4xl mx-auto px-8">
          {/* Title */}
          <div className="flex items-center mb-6 relative">
            <h2
              className={`text-5xl font-extrabold tracking-tight transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
            >
              Pwn
            </h2>
          </div>
  
          {/* Content */}
          <p className="text-xl leading-relaxed mb-6 max-w-prose">
            I am currently in <span className={`font-semibold ${isDark ? "text-red-500" : "text-blue-950"}`}>active job search</span> in the fields of{" "}
            <span className={`font-semibold ${isDark ? "text-red-500" : "text-blue-950"}`}>Cybersecurity</span> and{" "}
            <span className={`font-semibold ${isDark ? "text-red-500" : "text-blue-950"}`}>Artificial Intelligence</span>.  
            In addition, this year I have started my university studies in{" "}
            <span className={`font-semibold ${isDark ? "text-red-400" : "text-blue-900"}`}>Computer Engineering</span> at UOC.
          </p>
  
          {/* Inspirational quote */}
          <blockquote
            className={`border-l-4 pl-6 italic text-lg max-w-prose transition-colors duration-500 ${
              isDark ? "border-red-500 text-red-400" : "border-blue-900 text-blue-900"
            }`}
          >
            “Learning, exploring, and creating are the pillars for advancing in the world of cybersecurity and artificial intelligence.”
          </blockquote>
        </div>
      </section>
    );
  }
  