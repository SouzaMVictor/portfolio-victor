import { NavbarMobile } from "./NavbarMobile";
import { MainApp } from "./MainApp";
import { AboutApp } from "./AboutApp";
import { Skills } from "./Skills";
import { Porfolio } from "./Porfolio";
import { ContactMe } from "./ContactMe";

//responsividade!! --> navbar e footer juntos (nao esquecer)
//target events
//imagens em webp
function App() {
  return (
    <div className="bg-zinc-950 min-h-screen scroll-smooth">
      <NavbarMobile />
      <MainApp />
      <AboutApp />
      <Skills />
      <Porfolio />
      <ContactMe />
    </div>
  );
}
export default App;
