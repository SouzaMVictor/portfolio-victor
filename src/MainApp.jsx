import { MainImage } from "./MainImage";
import { MainTextComponent } from "./MainTextComponent";

export function MainApp() {
  return (
    <div className="md:flex flex-row md:justify-center md:p-12">
      <MainImage />
      <MainTextComponent />
    </div>
  );
}
