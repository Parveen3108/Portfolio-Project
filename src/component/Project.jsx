/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/img/Filpkart.png";
import project2 from "../../public/img/Music Player.png";
import project3 from "../../public/img/Student.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      URL: "https://parveen3108.github.io/Flipkart-Clone/",
      title: "Flipkart Clone",
      img: project1,
      description:
        "A responsive e-commerce website inspired by Flipkart. Built using React, Tailwind CSS, and dummy product APIs for browsing and cart management.",
    },
    {
      id: 2,
      title: "Music Player",
      URL:"https://parveen3108.github.io/Music-Player/",
      img: project2,
      description:
        "A web-based music player that allows users to play, pause, and skip tracks. Developed with HTML, CSS, and JavaScript for a seamless audio experience.",
    },
    {
      id: 3,
      title: "Student Teacher appointment System",
      URL: "https://parveen3108.github.io/Student-Teacher-Booking/",
      img: project3,
      description:
        "A web application for scheduling appointments between students and teachers. Built using React for the frontend and Firebase for the backend.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12"
      >
        My Projects
      </motion.h2>

      {/* Project Gallery */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-indigo-500/30 hover:scale-105 transition transform"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-indigo-400 hover:text-pink-400 font-medium transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
