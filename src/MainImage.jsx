import imgVictor from "./assets/1725448876725.jpg";

export function MainImage() {
  return (
    <div className="flex justify-center items-center py-14 md:p-12">
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
