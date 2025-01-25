import { NavbarMobile } from "./NavbarMobile";
import { MainImage } from "./MainImage";
import { MainTextComponent } from "./MainTextComponent";
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
      <MainImage />
      <MainTextComponent />
      <AboutApp />
      <Skills />
      <Porfolio />
      <ContactMe />
    </div>
  );
}
export default App;
