import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import githubLogo from "./assets/githubLogo.png";
import linkedinLogo from "./assets/iconmonstr-linkedin-3.svg";

// fundir navbar e footer para responsividade(pq nao pensei nisso antes?)
export function NavbarMobile() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <nav className="flex justify-center p-8">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="100"
        className="text-2xl pt-2 mr-2 font-semibold text-ambar"
      >
        victorSouza();
      </h1>
      <a
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="300"
        href="https://github.com/SouzaMVictor"
      >
        <img src={githubLogo} alt="github" className="w-12 rounded-full mx-2" />
      </a>
      <a
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="400"
        href="https://www.linkedin.com/in/victor-msouza/"
      >
        <img
          src={linkedinLogo}
          alt="linkedin"
          className="w-12 rounded-full bg-white"
        />
      </a>
    </nav>
  );
}
