import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DownloadCV } from "./DownloadCV";

export function MainTextComponent() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="800"
      data-aos-easing="ease-in-sine"
      className="flex flex-col justify-center items-center space-y-2 md:space-y-4"
    >
      <p className="text-lg text-amber-200">Hello World! I&apos;m</p>
      <h1 className="text-4xl font-bold text-amber-50">Victor Souza</h1>
      <div className="text-amber-50 md:text-sm">
        <TypeAnimation
          sequence={[
            "React Developer",
            1000,
            "Front-End Engineer",
            1000,
            "Tech Enthusiast",
            1000,
            "Self-Taught",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div className="text-amber-50 text-xl font-semibold inline-block pb-6">
        Welcome to my portfolio website!
        <p className="animate-wiggle-animation inline-block">👋🏻</p>
      </div>
      <DownloadCV />
    </div>
  );
}
