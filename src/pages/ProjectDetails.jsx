import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { projects } from "../data/projectsDetails";
import WorkInProgress from "../components/WorkInProgress";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-4">Available project ids:</p>
        <pre style={{ whiteSpace: "pre-wrap", marginTop: 8 }}>{Object.keys(projects).join("\n")}</pre>
        <Link to="/#projects" className="text-blue-600 underline mt-6 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Componente mapping para forzar estilos en los elementos Markdown
  // ------------------------------------------------------------------
  const mdComponents = {
    video: ({ node, ...props }) => (
      <video controls className="rounded-lg my-4 w-full max-w-2xl shadow-md" {...props} />
    ),
    iframe: ({ node, ...props }) => (
      <div className="my-4 aspect-video w-full max-w-3xl">
        <iframe {...props} className="w-full h-full rounded-lg shadow-md" />
      </div>
    ),
    img: ({ node, ...props }) => (
      <img {...props} loading="lazy" className="rounded-lg my-4 shadow-md max-w-full h-auto" alt={props.alt || ""} />
    ),
    h1: ({ node, ...props }) => (
      <h1
        {...props}
        className={`text-3xl font-extrabold mt-2 mb-4 text-gray-900`}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        {...props}
        className={`text-2xl font-bold mt-4 mb-2 text-gray-900`}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3 {...props} className={`text-xl font-semibold mt-3 mb-2 text-gray-900`} />
    ),
    p: ({ node, ...props }) => <p {...props} className="leading-7 my-2" />,
    ul: ({ node, ...props }) => <ul {...props} className={`list-disc ml-6 my-2 text-gray-800`} />,
    ol: ({ node, ...props }) => <ol {...props} className={`list-decimal ml-6 my-2 text-gray-800`} />,
    li: ({ node, ...props }) => <li {...props} className="my-1" />,
    blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 pl-4 italic my-2" />,
    code: ({ inline, className, children, ...props }) => {
      if (inline) {
        return (
          <code
            {...props}
            className="rounded px-1 py-0.5 text-sm bg-gray-100"
          >
            {children}
          </code>
        );
      }
      // block code
      return (
        <pre className="rounded overflow-x-auto p-3 my-3 bg-gray-900/5 text-gray-900">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
  };

  // ------------------------------------------------------------------
  // Ref + debug: contar qué etiquetas ha generado ReactMarkdown
  // ------------------------------------------------------------------
  const articleRef = useRef(null);
  const [tagSummary, setTagSummary] = useState([]);

  useEffect(() => {
    const el = articleRef.current;
    if (!el) return;
    // contamos tags dentro del artículo
    const counts = {};
    el.querySelectorAll("*").forEach((node) => {
      const tag = node.tagName.toLowerCase();
      counts[tag] = (counts[tag] || 0) + 1;
    });
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setTagSummary(entries.map(([t, n]) => `${t}: ${n}`));
  }, [project.content]); // re-evalúa cuando cambie el contenido

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------
  return (
    <section
      className="min-h-screen py-20 px-8 font-roboto transition-colors duration-500 bg-white text-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">{project.title}</h1>

        {project.wip && <WorkInProgress />}

        {/* Nota: he dejado 'prose' en caso de que quieras mantenerlo; si sospechas que 'prose' es el problema, cámbialo a 'max-w-none' */}
        <article
          ref={articleRef}
          className="prose prose-lg max-w-none space-y-4"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={mdComponents}>
            {project.content}
          </ReactMarkdown>
        </article>

        <div className="mt-10">
          <Link
            to="/#projects"
            className="font-semibold underline text-blue-600 hover:text-blue-900"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
