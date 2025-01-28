import PropTypes from "prop-types";
import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { initialPortfolio } from "./initialPortfolio";
export function Porfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = useMemo(() => initialPortfolio, []);
  return (
    <div className="pb-1">
      <div className="flex justify-center pt-3">
        <h2
          data-aos="fade-up"
          className="text-amber-50 text-2xl font-semibold my-6 inline-block"
        >
          Portfolio
          <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
        </h2>
      </div>
      <ul className="text-amber-50 mx-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-1">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <li
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="bg-zinc-900 border-2 border-zinc-800 rounded p-4 hover:md:bg-zinc-800 duration-300 cursor-pointer hover:md:scale-105 text-amber-50">
        <img src={project.image} alt={project.title} className="rounded" />
        <span className="flex justify-center font-medium my-3">
          {project.title}
        </span>
        <p className="text-justify font-light m-2 text-zinc-300">
          {expanded
            ? project.description
            : `${project.description.substring(0, 100)}... `}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-amber-300 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </p>
        <h3 className="text-amber-200">{project.tools}</h3>
        <div className="flex justify-end">
          <a className="mr-3" href={project.github} target="_blank">
            <GitHubIcon />
          </a>
          <a href={project.link} target="_blank">
            {/* link */}
            <LinkIcon />
          </a>
        </div>
      </div>
    </li>
  );
}
function GitHubIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
