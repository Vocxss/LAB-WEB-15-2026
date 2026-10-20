function Hero() {
  return (
    <section
      className="relative flex justify-center items-center py-8 px-8 z-10 md:min-h-dvh h-[80vh] overflow-hidden"
      id="hero"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-bold md:text-base text-sm text-white text-center">
          Meet your ANTI VIBE CODING Developer
        </p>
        <h2 className="md:text-[128px] text-7xl font-bold text-center">
          Muh Tsaqif Hafidz
        </h2>
        <button
          className="py-4 px-6 bg-white text-background hover:bg-foreground transition-colors cursor-pointer font-bold rounded-full text-xl w-max"
          onClick={() => console.log("Hello taskippp!!")}
        >
          Say hi to me!
        </button>
      </div>
      <img
        className="md:-rotate-48 -rotate-24 object-cover md:w-48 w-24 aspect-square absolute top-12 md:right-8 right-2"
        src="/hand.png"
        alt="gambar tangan gwjh"
      />
      <img
        className="-scale-x-100 -rotate-24 object-cover md:w-48 w-24 aspect-square absolute bottom-12 left-4"
        src="/hand.png"
        alt="gambar tangan gwjh"
      />
    </section>
  );
}

export default Hero;
