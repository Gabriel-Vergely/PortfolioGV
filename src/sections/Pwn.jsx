
export default function Pwn() {
    return (
      <section
        id="pwn"
        className="w-full py-20 font-roboto transition-colors duration-500 bg-gray-100 text-gray-900"
      >
        <div className="max-w-4xl mx-auto px-8">
          {/* Title */}
          <div className="flex items-center mb-6 relative">
            <h2
              className="text-5xl font-extrabold tracking-tight transition-colors duration-500 text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.1 }}
            >
              Pwn
            </h2>
          </div>
  
          {/* Content */}
          <p className="text-xl leading-relaxed mb-6 max-w-prose">
            Right now I focus on{" "}
            <span className="font-semibold text-blue-950">building and securing AI systems</span>{" "}
            — designing ML pipelines and working on{" "}
            <span className="font-semibold text-blue-950">AI governance and automation</span> at{" "}
            <span className="font-semibold text-blue-950">BCNSoluciona</span>. I'm especially
            passionate about{" "}
            <span className="font-semibold text-blue-950">quantum cryptography</span>, a field I'm
            actively exploring.
          </p>
  
          {/* Inspirational quote */}
          <blockquote
            className="border-l-4 pl-6 italic text-lg max-w-prose transition-colors duration-500 border-blue-900 text-blue-900"
          >
            “Learning, exploring, and creating are the pillars for advancing in the world of cybersecurity and artificial intelligence.”
          </blockquote>
        </div>
      </section>
    );
  }
  