import { useEffect } from "react";
import Zap from "./assets/icons8-whatsapp (1).svg";
import linkedinLogo from "./assets/icons8-linkedin.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { DownloadCV } from "./DownloadCV";

const contacts = [
  {
    id: 1,
    name: "WhatsApp",
    icon: Zap,
    link: "https://wa.me/5516982167126",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: linkedinLogo,
    link: "https://www.linkedin.com/in/victor-msouza/",
  },
];

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

        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <button className="m-2 border border-amber-300 bg-zinc-800 px-12 py-2 font-normal flex items-center justify-center w-72">
              <img src={contact.icon} alt={contact.name} className="w-6 h-6" />
              <span className="tracking-wide ml-2">{contact.name}</span>
            </button>
          </a>
        ))}
        <DownloadCV />
      </div>
    </div>
  );
}
