import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold border-b-2 border-indigo-700 pb-2">
          Contact
        </h2>
        <p className="mt-10 leading-loose">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design.
        </p>

        {/* Email */}
        <a
          href="mailto:Parveensolath205@gmail.com"
          className="block mt-4 text-indigo-600 hover:underline"
        >
          Parveensolath205@gmail.com
        </a>

        {/* Social Icons */}
        <div className="flex flex-row gap-4 text-2xl mt-5">
          <a
            href="https://github.com/Parveen3108"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-transform duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/parveen-solath"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
