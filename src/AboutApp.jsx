import imgVictor2 from "./assets/imgvictor2.jpg";
//corrigir espaçamentos
//criar componente reutilizavel para títulos
export function AboutApp() {
  return (
    <section>
      <div className="min-h-screen bg-zinc-900 mx-6 rounded-xl py-6">
        <div className="flex justify-center pt-3">
          <h2 className="text-amber-50 text-2xl font-semibold my-6 inline-block">
            About Me
            <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
          </h2>
        </div>
        <div className="flex justify-center items-center py-14 md:p-12">
          <figure>
            <img
              src={imgVictor2}
              alt="VictorSouza();"
              className="w-80 rounded-full border-4 border-ambar shadow-xl shadow-ambar/50"
            />
          </figure>
        </div>

        <p className="text-amber-50 text-2xl mx-9 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          asperiores incidunt dicta in distinctio quae eius voluptatibus ratione
          itaque id, beatae iste quis, totam similique! Tempora nulla dicta
          libero ratione?
        </p>
        <br />
        <br />
        <p className="text-amber-50 text-2xl mx-9 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
          debitis vel modi recusandae unde dicta adipisci sunt illo repellendus
          voluptate quo dolor sapiente autem. Dolorem molestias dicta
          perferendis praesentium quod?
        </p>
      </div>
    </section>
  );
}
