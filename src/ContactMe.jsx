import { useEffect } from "react";
import Zap from "./assets/icons8-whatsapp (1).svg";
import linkedinLogo from "./assets/icons8-linkedin.svg";
import AOS from "aos";
import "aos/dist/aos.css";
export function ContactMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pb-32">
      <div className="flex justify-center pt-3">
        <h2
          data-aos="fade-up"
          className="text-amber-50 text-2xl font-semibold my-6 inline-block"
        >
          Contact Me
          <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-amber-50 flex flex-col items-center"
      >
        {/* email, zap, linkedin */}
        <h2 className="mb-5">
          Thanks for getting to know me! Feel free to contact me by e-mail,
          WhatsApp or LinkedIn.
        </h2>
        <button>
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-2 px-4 text-center text-white bg-zinc-800 border border-amber-300 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
          />
        </button>
        <a href="#">
          <button className="m-2 border border-amber-300 bg-zinc-800 px-12 py-1 font-normal flex justify-center align-middle items-center">
            <img src={Zap} className="inline" />
            <span className="tracking-wide ml-1"> WhatsApp </span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/victor-msouza/">
          <button className=" border border-amber-300 bg-zinc-800 px-12 py-1 font-normal flex justify-center align-middle items-center">
            <img src={linkedinLogo} className="inline" />
            <span className="tracking-wide ml-1"> LinkedIn </span>
          </button>
        </a>
      </div>
    </div>
  );
}
