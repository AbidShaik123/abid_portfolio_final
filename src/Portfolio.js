
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans scroll-smooth pt-16">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center p-4">
        <motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Abid Shaik
        </motion.h1>
        <motion.p className="text-xl text-gray-400 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Software Engineer | IT Graduate Student | Tech Explorer
        </motion.p>
        <motion.div className="flex flex-wrap gap-6 text-2xl items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <a href="https://www.linkedin.com/in/abid-shaik-b48723257/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400">
            <FaLinkedin /><span className="text-base hidden sm:inline">LinkedIn</span>
          </a>
          <a href="https://github.com/abidshaik" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-400">
            <FaGithub /><span className="text-base hidden sm:inline">GitHub</span>
          </a>
          <a href="mailto:abidshaik.dev@gmail.com" className="flex items-center gap-2 hover:text-red-400">
            <FaEnvelope /><span className="text-base hidden sm:inline">Email</span>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="p-8 max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m Abid Shaik, a Master's student in Information Technology and Management at Webster University with a background in software engineering. I bring over three years of industry experience, specializing in Java, Python, SQL, and enterprise systems like OpenText Media Management. I enjoy building scalable systems and exploring new technologies that create real-world impact.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-8 max-w-4xl mx-auto" id="projects">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Projects</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>Application Traceability Tool:</strong> Designed a matrix-based validation tool to map application features directly to business requirements, ensuring traceable and testable development workflows.
          </li>
          <li>
            <strong>OpenText Media Management Enhancements:</strong> Improved digital asset workflows for enterprise users by integrating metadata automation and optimizing API-based interactions with OTMM.
          </li>
          <li>
            <strong>Resume Ranking App:</strong> Developed a web-based tool using Python and JavaScript to automatically rank and score resumes based on relevance to job descriptions using keyword density and scoring algorithms.
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="p-8 max-w-4xl mx-auto" id="skills">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Skills & Tools</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-300">
          <li>Java & Spring Boot</li>
          <li>Python</li>
          <li>SQL & PL/SQL</li>
          <li>RESTful API Development</li>
          <li>OpenText Media Management</li>
          <li>Git & GitHub</li>
          <li>Agile & Scrum</li>
          <li>React & Frontend Basics</li>
        </ul>
      </section>

      {/* Blog Section */}
      <section className="p-8 max-w-4xl mx-auto" id="blog">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Blog</h2>
        <div className="space-y-4 text-gray-300">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Transitioning from Industry to Graduate School</h3>
            <p className="text-sm">How I adapted my technical background to academic research and advanced learning in the U.S. education system.</p>
            <a className="text-blue-400 hover:underline" href="#">Read More</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Why Learning APIs Changed My Development Approach</h3>
            <p className="text-sm">Leveraging modular architecture and external APIs helped scale and simplify how I build applications today.</p>
            <a className="text-blue-400 hover:underline" href="#">Read More</a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="p-8 max-w-4xl mx-auto text-center">
        <a
          href="/ABID_SHAIK"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
          download
        >
          Download Resume
        </a>
      </section>

      {/* Contact Form Section */}
      <section className="p-8 max-w-4xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Contact</h2>
        <form
          action="https://formsubmit.co/abidshaik.dev@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-2 rounded bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} Abid Shaik. All rights reserved.
      </footer>
    </div>
  );
}
