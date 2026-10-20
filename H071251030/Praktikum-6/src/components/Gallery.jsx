const images = [
  {
    alt: "image1",
    filePath: "/gwjh.png",
  },
  {
    alt: "image2",
    filePath: "/gwjh.png",
  },
  {
    alt: "image3",
    filePath: "/gwjh.png",
  },
  {
    alt: "image4",
    filePath: "/gwjh.png",
  },
  {
    alt: "image5",
    filePath: "/gwjh.png",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative flex justify-center items-center py-8 px-8 z-10 md:min-h-dvh h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <div key={image.alt}>
          <p>{index + 1}</p>
          <img src={image.filePath} alt={image.alt} />
        </div>
      ))}
    </section>
  );
}
