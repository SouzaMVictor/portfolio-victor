import PropTypes from "prop-types";

export function Skills() {
  const initialSkills = [
    {
      id: 1,
      title: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    },
    {
      id: 2,
      title: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 3,
      title: "Javascript",
      image:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    },
    {
      id: 4,
      title: "React",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      id: 5,
      title: "Tailwind",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      id: 6,
      title: "NodeJs",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
    },
    {
      id: 7,
      title: "Bootstrap",
      image:
        "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
    },
    {
      id: 8,
      title: "SASS",
      image: "https://img.icons8.com/color/512/sass.png",
    },
    {
      id: 9,
      title: "NPM",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
    },
    {
      id: 10,
      title: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
  ];
  return (
    <div className="pb-1">
      <div className="flex justify-center pt-3">
        <h2 className="text-amber-50 text-2xl font-semibold my-6 inline-block">
          Skills
          <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
        </h2>
      </div>
      <ul className="mx-6 sm:flex sm:flex-col sm:gap-2 md:grid md:grid-cols-2 md:gap-4">
        {initialSkills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <li className="py-6  text-xl border border-amber-300 rounded-sm text-yellow-50 flex justify-center hover:scale-105 duration-300 ">
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
  }).isRequired,
};
