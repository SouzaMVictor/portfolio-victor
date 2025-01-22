import githubLogo from "./assets/githubLogo.png";
import linkedinLogo from "./assets/iconmonstr-linkedin-3.svg";
// fundir navbar e footer para responsividade(pq nao pensei nisso antes?)
export function NavbarMobile() {
  return (
    <nav className="flex justify-between p-8">
      <h1 className="text-2xl font-semibold text-ambar">victorSouza();</h1>
      <a href="https://github.com/SouzaMVictor">
        <img src={githubLogo} alt="github" className="w-12 rounded-full" />
      </a>
      <a href="https://www.linkedin.com/in/victor-msouza/">
        <img
          src={linkedinLogo}
          alt="linkedin"
          className="w-12 rounded-full bg-white"
        />
      </a>
    </nav>
  );
}
