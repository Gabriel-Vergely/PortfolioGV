export default function WhoAmI({ isDark }) {
  return (
    <section
      id="whoami"
      className={`w-full py-20 font-roboto transition-colors duration-500 ${
        isDark ? "bg-zinc-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Título profesional */}
        <div className="flex items-center mb-10 relative">
          <h2
            className={`text-5xl font-extrabold tracking-tight transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
          >
            Who Am I
          </h2>
        </div>

        {/* Descripción principal */}
        <p className="text-xl leading-relaxed mb-8 max-w-prose">
          I’m{" "}
          <span
            className={`font-bold ${
              isDark ? "text-red-500" : "text-blue-950"
            }`}
          >
            Gabriel Vergel Fernández
          </span>
          , a passionate{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-red-500" : "text-blue-950"
            }`}
          >
            Software Engineer
          </span>{" "}
          specialized in{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-red-500" : "text-blue-950"
            }`}
          >
            Artificial Intelligence
          </span>
          ,{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-red-500" : "text-blue-950"
            }`}
          >
            Big Data
          </span>
          ,{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-red-500" : "text-blue-950"
            }`}
          >
            Full-stack Development
          </span>
          , and{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-red-500" : "text-blue-950"
            }`}
          >
            Cybersecurity
          </span>
          .
          <br className="hidden md:block" />
          I thrive on building{" "}
          <span
            className={`font-medium ${
              isDark ? "text-red-400" : "text-blue-900"
            }`}
          >
            scalable, efficient, and elegant solutions
          </span>{" "}
          that create a real impact.
        </p>

        <p className="text-lg leading-relaxed mb-10 max-w-prose">
          Beyond my engineering work, I actively participate in{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-red-400" : "text-blue-900"
            }`}
          >
            Capture The Flag (CTF)
          </span>{" "}
          competitions, where I constantly sharpen my problem-solving and security
          skills.
        </p>

        {/* Frase inspiradora */}
        <blockquote
          className={`border-l-4 pl-6 italic text-lg max-w-prose transition-colors duration-500 ${
            isDark
              ? "border-red-500 text-red-400"
              : "border-blue-900 text-blue-900"
          }`}
        >
          “Great software is born from curiosity, discipline, and a relentless
          drive to keep learning.”
        </blockquote>
      </div>
    </section>
  );
}
