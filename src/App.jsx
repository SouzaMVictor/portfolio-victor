import { FooterMobile } from "./FooterMobile";
import { NavbarMobile } from "./NavbarMobile";
import { MainApp } from "./MainApp";
import { AboutApp } from "./AboutApp";
import { Skills } from "./Skills";
import { Porfolio } from "./Porfolio";
import { ContactMe } from "./ContactMe";
//arrumar organização dos componentes (remover desnecessários{mainapp??})
//responsividade!!
//scroll events: vida ao app
//hover events
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
      <FooterMobile />
    </div>
  );
}
export default App;
