// ProjectsSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 3 projects per page

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-12">Client & Personal Projects</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="list-none"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full bg-gray-800/40 backdrop-blur-xl border border-gray-700 rounded-xl overflow-hidden hover:-translate-y-2 hover:border-indigo-500 transition shadow-lg"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-indigo-400">{p.title}</h3>
                <p className="text-gray-400 text-sm">
                  {p.type} • {p.tech}
                </p>
                <p className="text-gray-300 mt-3 flex-grow">{p.description}</p>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-lg border ${
            currentPage === 1
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : "border-indigo-500 text-indigo-400 hover:bg-indigo-600/20"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : "border-indigo-500 text-indigo-400 hover:bg-indigo-600/20"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
