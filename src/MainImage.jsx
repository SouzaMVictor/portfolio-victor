import imgVictor from "./assets/1725448876725.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function MainImage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
      className="flex justify-center items-center py-14 md:p-12"
    >
      <figure>
        <img
          src={imgVictor}
          alt="VictorSouza();"
          className="w-80 rounded-full border-4 border-ambar shadow-xl shadow-ambar/50"
        />
      </figure>
    </div>
  );
}
