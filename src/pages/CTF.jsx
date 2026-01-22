import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CTFPage({ isDark = false }) {
  const ctfProjects = [
    {
      id: "bandit",
      title: "Bandit",
      platform: "OverTheWire",
      year: "2025",
      description:
        "OverTheWire wargame to learn basic Linux and security through progressive challenges, solving exercises to obtain the next level’s password.",
    },
    {
      id: "natas",
      title: "Natas",
      platform: "OverTheWire",
      year: "2025",
      description:
        "OverTheWire wargame to learn web security and vulnerabilities through progressive challenges, solving exercises to obtain the next level’s password.",
    },
    {
      id: "network",
      title: "Network Intrusion Analyzer",
      platform: "OverTheWire",
      year: "2022",
      description:
        "Built an AI-based network traffic analyzer to detect anomalies in real time during CTF competitions.",
    },
    {
      id: "stego",
      title: "StegoHunter",
      platform: "TryHackMe",
      year: "2021",
      description:
        "Automated steganography detection tools for images and audio.",
    },
  ];

  // Estados
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  // Filtrado
  const filteredProjects = ctfProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesYear = yearFilter === "all" || p.year === yearFilter;
    const matchesPlatform =
      platformFilter === "all" || p.platform === platformFilter;
    return matchesSearch && matchesYear && matchesPlatform;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  );
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const visible = filteredProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("auto");

  useEffect(() => {
    if (containerRef.current) setContainerHeight(containerRef.current.scrollHeight);
  }, [page, filteredProjects]);

  const years = Array.from(new Set(ctfProjects.map((p) => p.year))).sort(
    (a, b) => b - a
  );
  const platforms = Array.from(
    new Set(ctfProjects.map((p) => p.platform))
  ).sort();

  return (
    <section
      id="ctf"
      className={`w-full py-20 font-roboto transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8">
        <h1
          className={`text-5xl font-extrabold mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          CTF Finder
        </h1>

        {/* Filtros con diseño restaurado */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search for project or description..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className={`w-full md:w-1/2 px-4 py-3 rounded-xl border shadow-sm transition-colors duration-300 ${
              isDark
                ? "bg-zinc-900 border-zinc-700 text-white placeholder-gray-400 focus:border-red-500"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-600"
            }`}
          />

          <select
            value={yearFilter}
            onChange={(e) => {
              setYearFilter(e.target.value);
              setPage(1);
            }}
            className={`w-full md:w-1/4 px-4 py-3 rounded-xl border shadow-sm transition-colors duration-300 ${
              isDark
                ? "bg-zinc-900 border-zinc-700 text-white focus:border-red-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-blue-600"
            }`}
          >
            <option value="all">All years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={platformFilter}
            onChange={(e) => {
              setPlatformFilter(e.target.value);
              setPage(1);
            }}
            className={`w-full md:w-1/4 px-4 py-3 rounded-xl border shadow-sm transition-colors duration-300 ${
              isDark
                ? "bg-zinc-900 border-zinc-700 text-white focus:border-red-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-blue-600"
            }`}
          >
            <option value="all">All platforms</option>
            {platforms.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Tabla con diseño restaurado */}
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: containerHeight + "px" }}
        >
          <div ref={containerRef} className="overflow-x-auto">
            <table
              className={`w-full border-collapse rounded-xl overflow-hidden shadow-lg ${
                isDark ? "bg-zinc-900" : "bg-gray-50"
              }`}
            >
              <thead>
                <tr
                  className={`${
                    isDark ? "bg-red-600 text-white" : "bg-blue-600 text-white"
                  }`}
                >
                  <th className="p-4 text-left text-lg font-semibold">Project</th>
                  <th className="p-4 text-left text-lg font-semibold">Platform</th>
                  <th className="p-4 text-left text-lg font-semibold">Year</th>
                  <th className="p-4 text-left text-lg font-semibold">Description</th>
                  <th className="p-4 text-left text-lg font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {visible.map((p) => (
                  <tr
                    key={p.id}
                    className={`transition-colors duration-300 ${
                      isDark
                        ? "border-b border-zinc-700 hover:bg-zinc-800"
                        : "border-b border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <td className={`p-4 font-bold ${isDark ? "text-red-400" : "text-blue-900"}`}>
                      {p.title}
                    </td>
                    <td className={`p-4 font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                      {p.platform}
                    </td>
                    <td className={`p-4 ${isDark ? "text-gray-200" : "text-gray-700"}`}>{p.year}</td>
                    <td className={`p-4 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                      {p.description}
                    </td>
                    <td className="p-4">
                      <Link
                        to={`/ctf/writeup/${p.id}`}
                        className={`font-semibold underline focus:outline-none ${
                          isDark
                            ? "text-red-400 hover:text-red-600"
                            : "text-sky-600 hover:text-blue-900"
                        }`}
                      >
                        See writeup
                      </Link>
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className={`p-6 text-center ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      No results were found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Paginación */}
        <div className="flex items-center justify-between mt-8">
          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Showing {startIdx + 1}-
            {Math.min(startIdx + ITEMS_PER_PAGE, filteredProjects.length)} of{" "}
            {filteredProjects.length}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1 rounded-md font-semibold focus:outline-none ${
                isDark
                  ? page === 1
                    ? "text-gray-500"
                    : "text-red-400 hover:text-red-600"
                  : page === 1
                  ? "text-gray-300"
                  : "text-sky-600 hover:text-blue-900"
              }`}
            >
              Previous
            </button>

            <div className={`px-3 py-1 rounded-md ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {page} / {totalPages}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-md font-semibold focus:outline-none ${
                isDark
                  ? page === totalPages
                    ? "text-gray-500"
                    : "text-red-400 hover:text-red-600"
                  : page === totalPages
                  ? "text-gray-300"
                  : "text-sky-600 hover:text-blue-900"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
