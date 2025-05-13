import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div>
      <header style={{ padding: "20px", background: "#222", color: "#fff" }}>
        <h1>The Centrabyte</h1>
        <nav>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/blog" style={{ margin: "0 10px" }}>Blog</Link>
          <Link to="/projects" style={{ margin: "0 10px" }}>Projects</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        </nav>
      </header>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to The Centrabyte</h2>
      <p>
        A hub for insights on law, compliance, modern workplace, and media
        trends influenced by technology.
      </p>
    </div>
  );
}
