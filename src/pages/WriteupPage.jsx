import { useParams, Link } from "react-router-dom";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { writeups } from "../data/writeups";

export default function WriteupPage() {
  const { id } = useParams();
  const writeup = writeups[id];

  if (!writeup) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Writeup not found</h1>
        <Link to="/ctf" className="text-blue-600 underline">
          ← Back to Writeups Finder
        </Link>
      </div>
    );
  }

  // --- Estilos controlados para todos los elementos Markdown ---
  const mdComponents = {
    video: ({ node, ...props }) => (
      <video controls className="rounded-lg my-4 w-full max-w-2xl shadow-md" {...props} />
    ),
    iframe: ({ node, ...props }) => (
      <div className="my-4 aspect-video w-full max-w-3xl">
        <iframe {...props} className="w-full h-full rounded-lg shadow-md" />
      </div>
    ),
    h1: ({ node, ...props }) => (
      <h1 {...props} className={`text-3xl font-extrabold mt-6 mb-4 text-gray-900`} />
    ),
    h2: ({ node, ...props }) => (
      <h2 {...props} className={`text-2xl font-bold mt-5 mb-3 text-gray-900`} />
    ),
    h3: ({ node, ...props }) => (
      <h3 {...props} className={`text-xl font-semibold mt-4 mb-2 text-gray-900`} />
    ),
    h4: ({ node, ...props }) => (
      <h4 {...props} className={`text-lg font-semibold mt-3 mb-2 text-gray-900`} />
    ),
    p: ({ node, ...props }) => <p {...props} className="leading-7 my-2" />,
    strong: ({ node, ...props }) => <strong {...props} className="font-bold" />,
    em: ({ node, ...props }) => <em {...props} className="italic" />,
    blockquote: ({ node, ...props }) => (
      <blockquote {...props} className="border-l-4 pl-4 italic my-4 opacity-80" />
    ),
    ul: ({ node, ...props }) => (
      <ul {...props} className={`list-disc ml-6 my-2 text-gray-800`} />
    ),
    ol: ({ node, ...props }) => (
      <ol {...props} className={`list-decimal ml-6 my-2 text-gray-800`} />
    ),
    li: ({ checked, ...props }) => {
      // Para listas de tareas (GFM)
      if (checked !== null && checked !== undefined) {
        return (
          <li className="flex items-center gap-2 my-1">
            <input type="checkbox" checked={checked} readOnly className="form-checkbox" />
            <span {...props} />
          </li>
        );
      }
      return <li {...props} className="my-1" />;
    },
    a: ({ node, ...props }) => (
      <a
        {...props}
        className="underline font-medium text-blue-600 hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
    img: ({ node, ...props }) => (
      <img {...props} loading="lazy" className="rounded-lg my-4 shadow-md max-w-full h-auto" alt={props.alt || ""} />
    ),
    hr: () => <hr className="my-6 border-t border-gray-300" />,
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-4">
        <table {...props} className="table-auto border-collapse w-full text-sm">
          {props.children}
        </table>
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead {...props} className="font-semibold text-white bg-blue-700" />
    ),
    tbody: ({ node, ...props }) => <tbody {...props} />,
    tr: ({ node, ...props }) => (
      <tr {...props} className="border-b last:border-0 border-gray-200" />
    ),
    th: ({ node, ...props }) => (
      <th {...props} className="px-3 py-2 text-left font-semibold text-white" />
    ),
    td: ({ node, ...props }) => (
      <td {...props} className="px-3 py-2 align-top" />
    ),
    code: ({ inline, className, children, ...props }) => {
      if (inline) {
        return (
          <code
            {...props}
            className="rounded px-1 py-0.5 text-sm font-mono bg-gray-100 text-gray-900"
          >
            {children}
          </code>
        );
      }
      return (
        <pre
          className="rounded overflow-x-auto p-3 my-3 text-sm font-mono bg-gray-900/5 text-gray-900"
        >
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
  };

  return (
    <section
      className="min-h-screen py-20 px-8 font-roboto transition-colors duration-500 bg-white text-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb trail (Ls › Writeups Finder › current writeup), sticky under the navbar */}
        <nav
          aria-label="Breadcrumb"
          className="sticky top-12 md:top-14 z-30 -mx-8 px-8 py-3 mb-6 bg-white/90 backdrop-blur border-b border-gray-200"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
            <li>
              <Link to="/#ctf-preview" className="font-medium text-gray-600 transition-colors duration-300 hover:text-sky-600">
                Ls
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">›</li>
            <li>
              <Link to="/ctf" className="font-medium text-gray-600 transition-colors duration-300 hover:text-sky-600">
                Writeups Finder
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">›</li>
            <li
              aria-current="page"
              title={writeup.title}
              className="font-semibold text-gray-700 truncate max-w-[55vw] sm:max-w-md"
            >
              {writeup.title}
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold mb-6">{writeup.title}</h1>

        <article
          className="prose prose-lg max-w-none space-y-4"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={mdComponents}>
            {writeup.content}
          </ReactMarkdown>
        </article>

        <div className="mt-10">
          <Link
            to="/ctf"
            className="font-semibold underline text-blue-600 hover:text-blue-900"
          >
            ← Back to Writeups Finder
          </Link>
        </div>
      </div>
    </section>
  );
}
