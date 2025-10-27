/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import profilePic from "../../public/img/Parveen.jpeg"; // Update image path
import { Link } from "react-router-dom";
import Projects from "./Project";
import About from "./About";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6"
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md py-4 flex justify-center gap-10 text-lg font-semibold z-50">
        <Link
          to={"/About"}
          className="hover:text-indigo-400 transition duration-200"
        >
          About
        </Link>
        <Link
          to={"/Projects"}
          className="hover:text-indigo-400 transition duration-200"
        >
          Projects
        </Link>
        <Link
          to={"/Contact"}
          className="hover:text-indigo-400 transition duration-200"
        >
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20 md:mt-28 text-center md:text-left">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-indigo-400 shadow-2xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Parveen Solath 👋
          </h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
            I’m a{" "}
            <span className="text-indigo-400 font-semibold">
              Frontend Developer
            </span>{" "}
            who loves building clean, modern, and responsive web applications
            using <span className="text-indigo-400">React</span> and{" "}
            <span className="text-indigo-400">Tailwind CSS</span>. I enjoy
            crafting interactive experiences that bring ideas to life.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link
              to={"/Projects"}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
            >
              View My Work
            </Link>
            <Link
              to={"/Contact"}
              className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg font-semibold transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <p className="text-gray-400 text-sm">Scroll Down</p>
        <FaArrowDown className="animate-bounce text-indigo-400 text-xl" />
      </motion.div>
      <Projects />
      <About />
      <Contact />
    </section>
  );
}
