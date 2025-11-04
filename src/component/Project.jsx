import React from "react";

export default function Project() {
  return (
    <div className="p-10 ">
      <h2 className="text-3xl font-bold border-b-4 border-indigo-700 pb-2 inline-block">
        Projects
      </h2>

      <div className="relative mt-10 p-8 rounded-lg overflow-hidden">
        {/* Background Gradient Layers */}
        <div className="absolute inset-0 bg-indigo-700/10 rounded-lg"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-indigo-700/20 rounded-l-full blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4">
            Explore My Projects
          </h3>
          <p className="leading-relaxed mb-8">
            Here are some of my recent projects showcasing my skills and
            expertise in web development.
          </p>

          {/* Projects List */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="p-5 border border-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition duration-300">
              <h4 className="text-xl font-semibold mb-2">Project One</h4>
              <p>
                A web application that allows users to track their tasks and
                manage their time effectively.
              </p>
            </div>

            {/* Project Card 2 */}
            <div className="p-5 border border-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition duration-300">
              <h4 className="text-xl font-semibold mb-2">Flipkart Clone</h4>
              <p>
                A fully responsive e-commerce website built using React and
                Tailwind CSS.
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="p-5 border border-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition duration-300">
              <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
              <p>
                A personal portfolio site highlighting my projects, skills, and
                contact details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
