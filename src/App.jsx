// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CTFPage from "./pages/CTF"; // Tu página con la tabla de CTF
import WriteupPage from "./pages/WriteupPage";
import ProjectDetail from "./pages/ProjectDetails";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/ctf" element={<CTFPage isDark={isDark} />} />
        <Route path="/ctf/writeup/:id" element={<WriteupPage isDark={isDark} />} />
        <Route path="/projects/:id" element={<ProjectDetail isDark={isDark} />} /> {/* Ruta para el detalle del proyecto */}
        {/* Ruta catch-all para 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer isDark={isDark} />
    </div>
  );
}
