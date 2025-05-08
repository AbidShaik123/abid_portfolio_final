import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl cursor-pointer" onClick={() => scrollTo("home")}>
          Abid Shaik
        </span>
        <div className="space-x-4 hidden md:block">
          <button onClick={() => scrollTo("about")} className="hover:text-blue-400">About</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-blue-400">Projects</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-blue-400">Skills</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-blue-400">Contact</button>
        </div>
      </div>
    </nav>
  );
}
