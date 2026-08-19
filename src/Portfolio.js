import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaIndustry,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Portfolio() {
  const skills = {
    "MES & Manufacturing": [
      "Siemens Opcenter Execution / SIMATIC IT",
      "Manufacturing Execution Systems (MES)",
      "Production Execution",
      "Electronic Batch Records (EBR)",
      "Work Orders & WIP",
      "Recipe Management",
      "Material Tracking",
      "Genealogy & Traceability",
    ],

    "Industrial Integration": [
      "PLC Integration",
      "SCADA Integration",
      "OPC-UA / OPC-DA",
      "Shop-Floor Integration",
      "MES–SCADA Integration",
      "MES–ERP Integration",
      "SAP / ERP Integration",
      "LIMS Integration",
    ],

    "Software Engineering": [
      "Java",
      "Spring Boot",
      "Python",
      "SQL",
      "JavaScript",
      "C# / .NET",
      "REST APIs",
      "Microservices",
    ],

    "Databases & DevOps": [
      "SQL Server",
      "Oracle",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Linux",
      "Git & GitHub",
      "Azure DevOps",
      "Postman",
    ],
  };

 const projects = [
  {
    title: "MES Production Tracking System",
    status: "In Development",
    stack: "Java • Spring Boot • MySQL • REST APIs",
    description:
      "A personal MES simulation project for managing production orders, work orders, equipment status, material consumption, and product genealogy. The application demonstrates core manufacturing execution concepts using Java, Spring Boot, REST APIs, and MySQL.",
  },
  {
    title: "ERP–MES Integration Service",
    status: "In Development",
    stack: "Java • Spring Boot • REST APIs • JSON • SQL",
    description:
      "A lightweight integration project simulating communication between ERP and MES systems. The service receives production orders from an ERP simulator, processes manufacturing data in MES, and sends production confirmations and status updates back to ERP through REST APIs.",
  },
];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
      >
        <motion.p
          className="text-blue-400 font-semibold tracking-widest uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          MES • Manufacturing Systems • Industrial Integration
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-5"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Abid Shaik
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          MES Engineer | Siemens Opcenter | MES Integration
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-3xl leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Building reliable manufacturing solutions by connecting enterprise
          systems, MES applications, databases, and real-time shop-floor
          operations.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-5 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/abid-shaik-b48723257/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/AbidShaik123"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="mailto:abidshaik2498@gmail.com"
            className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 px-5 py-3 rounded-lg transition"
          >
            <FaEnvelope />
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="p-8 max-w-5xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">
          I&apos;m Abid Shaik, an MES and Manufacturing Systems Engineer with
          3+ years of experience working with Siemens Opcenter Execution /
          SIMATIC IT, industrial system integration, and enterprise
          applications. My experience includes MES configuration, production
          workflows, PLC/SCADA integration, OPC-UA/DA connectivity, SAP/ERP
          integration, material tracking, genealogy, traceability, testing,
          deployment, and production support.
        </p>

        <p className="text-gray-300 leading-8 mt-4">
          I also bring a strong software engineering background in Java,
          Spring Boot, Python, SQL, REST APIs, C#/.NET, and database
          technologies. I enjoy solving complex manufacturing challenges by
          connecting enterprise applications with real-time shop-floor systems
          and building reliable, scalable integration solutions.
        </p>
      </section>

      {/* Core Expertise */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-gray-800 p-6 rounded-xl">
            <FaIndustry className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">MES Engineering</h3>
            <p className="text-gray-400 text-sm">
              Siemens Opcenter, production execution, workflows, WIP, genealogy
              and traceability.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <FaNetworkWired className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Industrial Integration
            </h3>
            <p className="text-gray-400 text-sm">
              PLC, SCADA, OPC UA, shop-floor connectivity and MES integration.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <FaCode className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Software Engineering
            </h3>
            <p className="text-gray-400 text-sm">
              Java, Spring Boot, Python, C#/.NET, REST APIs and microservices.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <FaDatabase className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Data & Integration</h3>
            <p className="text-gray-400 text-sm">
              SQL Server, Oracle, MySQL, PostgreSQL, MongoDB and ERP integration.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8 max-w-5xl mx-auto" id="projects">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:-translate-y-1 transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.status && (
                  <span className="text-xs bg-blue-900 text-blue-300 px-3 py-1 rounded-full whitespace-nowrap">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-blue-400 text-sm mt-3 mb-3">
                {project.stack}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-8 max-w-5xl mx-auto" id="skills">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-200 px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Architecture Section */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          Manufacturing Integration Focus
        </h2>

        <div className="bg-gray-800 p-6 md:p-8 rounded-xl text-center">
          <div className="flex flex-col items-center gap-3 text-gray-300">
            <div className="bg-gray-700 px-6 py-3 rounded-lg">
              SAP / ERP
            </div>

            <span className="text-blue-400 text-2xl">↓</span>

            <div className="bg-blue-900 px-8 py-4 rounded-lg font-semibold">
              Siemens Opcenter / MES
            </div>

            <span className="text-blue-400 text-2xl">↓</span>

            <div className="bg-gray-700 px-6 py-3 rounded-lg">
              SCADA / OPC UA
            </div>

            <span className="text-blue-400 text-2xl">↓</span>

            <div className="bg-gray-700 px-6 py-3 rounded-lg">
              PLC & Shop-Floor Equipment
            </div>
          </div>

          <p className="text-gray-400 mt-7 max-w-3xl mx-auto leading-relaxed">
            My focus is connecting enterprise planning systems with real-time
            manufacturing operations through MES, industrial communication,
            equipment integration, production data collection, and scalable
            software solutions.
          </p>
        </div>
      </section>

      {/* Blog / Insights Section */}
      <section className="p-8 max-w-5xl mx-auto" id="blog">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          Engineering Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <span className="text-blue-400 text-sm">MES & Manufacturing</span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              How MES Connects ERP to the Shop Floor
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring how manufacturing execution systems bridge production
              planning, material management, equipment data, production
              execution, and real-time shop-floor operations.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <span className="text-blue-400 text-sm">Industrial Integration</span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Understanding PLC, SCADA, OPC UA & MES Integration
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              A practical look at how shop-floor equipment data flows from PLCs
              and SCADA systems through OPC UA into manufacturing applications
              and MES platforms.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <span className="text-blue-400 text-sm">Software Engineering</span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Building REST APIs for Manufacturing Systems
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              How Java, Spring Boot, REST APIs, SQL, and integration patterns
              can support manufacturing applications and enterprise-system
              communication.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <span className="text-blue-400 text-sm">MES</span>

            <h3 className="text-xl font-semibold mt-2 mb-3">
              Genealogy & Traceability in Manufacturing
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Understanding how MES systems track materials, lots, production
              orders, equipment, and finished products throughout the
              manufacturing lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="p-8 max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Interested in My Experience?
          </h2>

          <p className="text-gray-400 mb-6">
            View my resume for more details about my MES, manufacturing
            integration, and software engineering experience.
          </p>

          <a
            href="/ABID SHAIK.docx"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            download
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 max-w-5xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-3">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I'm interested in opportunities involving MES Engineering,
              Siemens Opcenter, Manufacturing Systems, Industrial Integration,
              MES Development, and Backend Engineering.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:abidshaik.dev@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400"
              >
                <FaEnvelope />
                abidshaik.dev@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/abid-shaik-b48723257/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/abidshaik"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>

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
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-10">
        <div className="max-w-5xl mx-auto px-8 py-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Abid Shaik. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            MES Engineering • Siemens Opcenter • Industrial Integration •
            Software Engineering
          </p>
        </div>
      </footer>
    </div>
  );
}
