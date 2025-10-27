/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../public/img/Parveen.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-indigo-400"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Left - Profile Image */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={profilePic}
          alt="Profile"
          className="w-56 h-56 object-cover rounded-2xl shadow-lg border-4 border-indigo-400"
        />

        {/* Right - Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            Hello! I'm <span className="text-indigo-400 font-semibold">Parveen Solath</span>, 
            a passionate <span className="text-indigo-400">Frontend Developer</span> focused on 
            building user-friendly and visually engaging web applications. I enjoy turning 
            creative ideas into functional and responsive digital experiences.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              🎓 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Bachelor of Computer Applications (BCA) – CRM Jat college</li>
              <li>Full Stack Web Development – KMA Technoware Hisar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              💼 Work Experience
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Frontend Developer Intern – Uified Mentor(3 month)</li>
              <li>Built responsive websites using React, Tailwind CSS, and API integration.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              🎯 Hobbies & Interests
            </h3>
            <p className="text-gray-300">
              When I’m not coding, I enjoy reading tech blogs, playing football, 
              exploring new tools, and working on personal side projects to enhance my skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
