const skillItems = [
  {
    name: "Frontend Dev",
    techs: "HTML, CSS, Javascript",
  },
  {
    name: "Backend Dev",
    techs: "Javascript, Javascript, Javascript",
  },
  {
    name: "UI/UX",
    techs: "Figma, Canva, Miro",
  },
  {
    name: "Graphics Design",
    techs: "Photoshop, Illustrator, Aseprite",
  },
];

export default function Skills() {
  return (
    <section className="min-h-dvh relative flex md:flex-row flex-col justify-center gap-8 scrollbar-hide py-4">
      <div className="px-8 rounded-full bg-white py-6 md:w-1/3 w-full h-max flex justify-center items-center">
        <p className="text-wrap md:text-7xl text-2xl text-background font-bold">
          Skills
        </p>
      </div>
      <div className="grid grid-rows-auto divide-y divide-white/10 w-full">
        {skillItems.map((skill, i) => (
          <div
            key={skill.name}
            className="flex md:flex-row flex-col justify-between group hover:bg-white hover:text-background hover:rotate-4 hover:rounded-full duration-300 transition-all md:items-end px-8 md:py-2 py-4"
          >
            <div className="flex md:flex-row flex-col gap-8 md:items-center">
              <p className="text-xs text-white/50 group-hover:text-background">
                0{i + 1}
              </p>
              <p className="md:text-7xl text-5xl font-bold">{skill.name}</p>
            </div>
            <p className="text-xl font-medium text-white group-hover:text-foreground-darker">
              {skill.techs}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
