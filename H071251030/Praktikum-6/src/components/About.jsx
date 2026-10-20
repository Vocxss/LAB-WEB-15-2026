const hobbies = [
  {
    id: 1,
    name: "Sleep",
    rotate: "rotate-4",
  },
  {
    id: 2,
    name: "Eat",
    rotate: "-rotate-2",
  },
  {
    id: 3,
    name: "Breath",
    rotate: "rotate-8",
  },
  {
    id: 4,
    name: "Sleep",
    rotate: "rotate-4",
  },
  {
    id: 5,
    name: "Eat",
    rotate: "-rotate-2",
  },
  {
    id: 6,
    name: "Breath",
    rotate: "rotate-8",
  },
];

const About = () => {
  return (
    <section id="about" className="md:min-h-dvh">
      <div className="relative min-h-dvh flex flex-col gap-12 justify-center items-center overflow-hidden">
        <img
          className="md:-rotate-48 -rotate-24 object-cover md:w-48 w-24 aspect-square absolute top-4 md:right-8 right-2"
          src="/otaksenku.png"
          alt="gambar tangan gwjh"
        />
        <img
          className="md:rotate-24 -rotate-24 object-cover md:w-48 w-24 aspect-square absolute bottom-4 md:left-8 left-2"
          src="/otaksenku.png"
          alt="gambar tangan gwjh"
        />
        <p className="md:text-4xl md:mx-48 mx-12 text-center text-2xl mb-2 text-white">
          I'm <span className="text-foreground font-bold">Muh Tsaqif</span>
          &nbsp;
          <img
            loading="lazy"
            src="/gwjh.png"
            className="inline-block align-middle rounded-sm hover:scale-[5] 2xl:hover:scale-[6] hover:relative ease-out transition-transform w-12 aspect-4/3 object-cover object-top"
            alt=""
          />
          - a{" "}
          <span className="font-bold text-foreground">Frontend Developer </span>
          focused on creating digital experiences that are
          <span className="font-bold text-foreground">
            &nbsp; interactive, visually engaging, and comfortable to use.
          </span>
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="">His Hobby:</p>
          <div className="flex md:flex-nowrap flex-wrap justify-center items-center gap-4">
            {hobbies.map((hobby) => (
              <span
                key={hobby.id}
                className={`py-4 px-6 bg-white text-background hover:bg-foreground transition-transform duration-300 cursor-pointer font-bold rounded-full text-xl w-max ${hobby.rotate} hover:rotate-0`}
              >
                {hobby.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
