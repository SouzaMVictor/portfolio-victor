import { useEffect } from "react";
import imgVictor2 from "./assets/imgvictor2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
//corrigir espaçamentos
//criar componente reutilizavel para títulos
export function AboutApp() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="min-h-screen bg-zinc-900 mx-6 rounded-xl py-6">
        <div data-aos="fade-up" className="flex justify-center pt-3">
          <h2 className="text-amber-50 text-2xl font-semibold my-6 inline-block">
            About Me
            <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center items-center py-14 md:p-12"
        >
          <figure>
            <img
              src={imgVictor2}
              alt="VictorSouza();"
              className="w-80 rounded-full border-4 border-ambar shadow-xl shadow-ambar/50"
            />
          </figure>
        </div>

        <p
          data-aos="fade-up"
          className="text-amber-50 text-2xl mx-9 text-justify"
        >
          Hey! My name is Victor Souza, I&apos;m 25 years old and I&apos;m a
          React Developer! I began my studies in Front End Development in the
          middle of 2024 because of a carreer change. I realize being a
          veterinary doctor &#40;graduated in 2023&#41; would not be enough to
          conquer my dreams and decided to migrate to the IT section. Crazy,
          right?
        </p>
        <br />
        <br />
        <p
          data-aos="fade-up"
          className="text-amber-50 text-2xl mx-9 text-justify"
        >
          Now, I want be part of a team of developers in a tech company and
          achieve my dreamed position as a Front End Developer Junior! Keep
          scrolling to see all my projects and feel free to contact me anytime.
        </p>
      </div>
    </section>
  );
}
