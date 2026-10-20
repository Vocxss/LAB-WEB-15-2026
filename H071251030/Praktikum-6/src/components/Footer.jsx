export default function Footer() {
  return (
    <footer className="w-full md:px-12 md:pt-12 px-8 pt-8 pb-2 flex flex-col gap-8 bg-foreground rounded-t-4xl text-background">
      <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-x-8 gap-y-12 md:justify-between justify-center md:items-end">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">Section Pages</p>
          <div className="flex flex-col gap-2 font-sans text-xs text-background">
            <a
              className="hover:translate-x-1 transition-transform"
              href="#home"
            >
              Home
            </a>
            <a
              className="hover:translate-x-1 transition-transform"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:translate-x-1 transition-transform"
              href="#skills"
            >
              Skills
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">Social Media</p>
          <div className="flex flex-col gap-2 font-sans text-xs text-background">
            <a
              className="hover:translate-x-1 transition-transform"
              href="https://github.com/Vocxss"
            >
              Github
            </a>
            <a
              className="hover:translate-x-1 transition-transform"
              href="https://instagram.com/tsaaqifh"
            >
              Instagram
            </a>
            <a
              className="hover:translate-x-1 transition-transform"
              href="https://linkedin.com"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <a
          href="mailto:tsqf.h29@gmail.com"
          className="text-background text-xs font-sans hover:translate-x-1 transition-transform"
        >
          tsqf.h29@gmail.com
        </a>
      </div>
      <p className="footer-headline md:text-[8.5rem] text-3xl lg:text-[10.5rem] font-black text-center">
        Muh Tsaqif
      </p>
      <div className="flex justify-between items-center pt-2 pb-4 border-t text-xs text-background">
        <p>© 2026 · All rights reserved.</p>
        <p>made by zifh, not Claude</p>
      </div>
    </footer>
  );
}
