// App.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Code-split the heavier sub-pages so the large writeups/projects data
// is only loaded when the user actually visits those routes.
const CTFPage = lazy(() => import("./pages/CTF"));
const WriteupPage = lazy(() => import("./pages/WriteupPage"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetails"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      <div className="h-8 w-8 rounded-full border-2 border-gray-300 border-t-sky-600 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <ScrollToHash />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ctf" element={<CTFPage />} />
          <Route path="/ctf/writeup/:id" element={<WriteupPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}
