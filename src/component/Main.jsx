import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../../public/img/Parveen.jpeg";
import project2 from "../../public/img/PersnalPortfolliyo.png";
import project1 from "../../public/img/Filpkart.png";
import { motion } from "framer-motion";

function ProjectCard({ img, title, subtitle }) {
  return (
    <motion.div
      // drag="y"
      // dragConstraints={{ top: -100, bottom: 100 }}

      // whileHover={{ scale: 0.90 }}
      // whileTap={{ scale: 0.95 }}
      //  transition={{ type: "spring", stiffness: 200, damping: 10 }}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, type: "keyframes" }}
       viewport={{ once: true }}
      className="flex gap-5 border p-5 rounded-lg bg-indigo-900/30 md:flex-col items-center overflow-hidden"
    >
      <img
        src={img}
        alt={title}
        className="w-20 h-20 lg:h-32 object-cover rounded-lg"
      />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-300">{subtitle}</div>
      </div>
    </motion.div>
  );
}

export default function Main() {
  const HendleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/files/Parveen-Resume.pdf"; // pdf file link
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row md:gap-10 lg:gap-60 gap-5 items-center justify-center">
        <div className="border w-80 h-80 rounded-full flex justify-center items-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: -20, right: 20 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 200, dumping: 10 }}
            className="w-60 h-60 border-2 rounded-full flex justify-center items-center overflow-hidden"
          >
            <motion.img
              src={profilePic}
              className="w-40 h-40 rounded-full"
              // initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              whileHover={{ scale: 1.7, rotate: 6 }}
              transition={{ duration: 0.5 }}
              alt="Parveen Solath"
              // className="w-full h-full"
            />
          </motion.div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Hello, I'm Parveen Solath...",
                  "Front-End Developer.",
                  "UI Designer.",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 60,
              }}
            />
          </h2>
          <h1 className="mt-5 text-4xl font-bold">
            Judges a book by its cover...
          </h1>

          <div className="mt-10 flex gap-5">
            <button className="bg-white text-indigo-950 font-semibold px-6 py-3 rounded-full hover:bg-indigo-800 hover:text-white border-2 border-indigo-950 duration-500 hover:scale-115">
              <span className="hover-scale-200"> Hire Me</span>
            </button>
            <button
              onClick={HendleDownload}
              className="bg-white text-indigo-950 font-semibold px-6 py-3 rounded-full hover:bg-indigo-800 hover:text-white border-2 border-indigo-950 duration-500
              hover:scale-115"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl">I'm a React JS Developer</h2>
        <p>Currently, I'm a Frontend Developer Intern at Unified Mentor.</p>
        <p className="mt-5 text-lg">
          A passionate Frontend Developer with expertise in React.js, HTML, CSS,
          and JavaScript. I create engaging and user-friendly web applications
          that deliver exceptional user experiences.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold border-b-2 border-indigo-700 pb-2">
          Work Experience
        </h2>

        <div className="mt-5 text-lg font-semibold">
          Frontend Developer Intern at Unified Mentor (Oct 2025 - Present)
        </div>

        <div className="mt-5 flex flex-col md:flex-row   gap-10 border p-5 rounded-lg">
          <ProjectCard
            img={project1}
            title="Flipkart E-commerce Website"
            subtitle="A comprehensive e-commerce platform built with React.js."
          />
          <ProjectCard
            img={project2}
            title="Portfolio Website"
            subtitle="Personal portfolio built with React and Tailwind CSS."
          />
          <ProjectCard
            // img={project1}
            title="GYM Management System"
            subtitle="GYM Management System built with React and Tailwind CSS."
          />
          <ProjectCard
            // img={project1}
            title="Student-Teacher booking "
            subtitle="Student-Teacher booking Appointment built with React and Tailwind CSS."
          />
        </div>
      </div>
    </div>
  );
}
