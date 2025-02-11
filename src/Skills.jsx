import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import js from "./assets/javascript_icon_130900.png";

export function Skills() {
  const initialSkills = [
    {
      id: 1,
      title: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
      color: "#FFA500",
    },
    {
      id: 2,
      title: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      color: "#007BFF",
    },
    {
      id: 3,
      title: "Javascript",
      image: js,
      color: "#d1bf45",
    },
    {
      id: 4,
      title: "React",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      color: "#61DBFB",
    },
    {
      id: 5,
      title: "Tailwind",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      color: "#38B2AC",
    },
    {
      id: 6,
      title: "NodeJs",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
      color: "#68A063",
    },
    {
      id: 7,
      title: "Bootstrap",
      image:
        "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
      color: "#7952B3",
    },
    {
      id: 8,
      title: "SASS",
      image: "https://img.icons8.com/color/512/sass.png",
      color: "#CF649A",
    },
    {
      id: 9,
      title: "NPM",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
      color: "#c74830",
    },
    {
      id: 10,
      title: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      color: "#e83615",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pb-1">
      <div data-aos="fade-up" className="flex justify-center pt-3">
        <h2 className="text-amber-50 text-2xl font-semibold my-6 inline-block">
          Skills
          <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
        </h2>
      </div>
      <ul className="mx-6 sm:flex sm:flex-col sm:gap-2 md:grid md:grid-cols-2 md:gap-4 ">
        {initialSkills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <li
      data-aos="zoom-in-up"
      data-aos-delay="500"
      data-aos-duration="500"
      className="py-6  text-xl border border-amber-300 rounded-sm text-yellow-50 flex justify-center hover:scale-105 duration-300"
      style={{
        transition: "background-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = skill.color;
        e.currentTarget.style.color = "#18181b";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "rgb(255, 240, 178)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img className="w-6 mr-1" src={skill.image} alt={skill.title} />
      <span>{skill.title}</span>
    </li>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
};
