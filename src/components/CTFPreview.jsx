import { Link } from "react-router-dom";

export default function CTFPreview({ isDark }) {
    return (
        <section
            id="ctf-preview"
            className={`w-full py-20 font-roboto transition-colors duration-500 ${isDark ? "bg-zinc-800 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            <div className="max-w-4xl mx-auto px-8">
                {/* Título */}
                <div className="flex items-center mb-10 relative">
                    <h2
                        className={`text-5xl font-extrabold tracking-tight transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"
                            }`}
                        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
                    >
                        Ls
                    </h2>
                </div>


               {/* Description */}
                <p className="text-xl leading-relaxed mb-8 max-w-prose">
                    In this section, I collect my{" "}
                    <span
                        className={`font-semibold ${isDark ? "text-red-500" : "text-blue-950"}`}
                    >
                        learning notes
                    </span>{" "}
                    from different areas, including{" "}
                    <span
                        className={`font-semibold ${isDark ? "text-red-400" : "text-blue-900"}`}
                    >
                        CTF challenges
                    </span>
                    ,{" "}
                    <span
                        className={`font-semibold ${isDark ? "text-red-400" : "text-blue-900"}`}
                    >
                        artificial intelligence
                    </span>
                    ,{" "}
                    <span
                        className={`font-semibold ${isDark ? "text-red-400" : "text-blue-900"}`}
                    >
                        certifications
                    </span>
                    , and other technical topics related to cybersecurity and computing.
                </p>

                <p className="text-lg leading-relaxed mb-10 max-w-prose">
                    Here you can find{" "}
                    <span
                        className={`font-semibold ${isDark ? "text-red-400" : "text-blue-900"}`}
                    >
                        writeups, explanations, and personal notes
                    </span>{" "}
                    that document my learning process and problem-solving approach.
                </p>



                {/* Botón */}
                <Link
                    to="/ctf"
                    className={`inline-block px-6 py-3 rounded-xl font-semibold shadow-md transition-colors duration-300 ${isDark
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-sky-600 text-white hover:bg-blue-800"
                        }`}
                >
                    Show more →
                </Link>
            </div>
        </section>
    );
}
