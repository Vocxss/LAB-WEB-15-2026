import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto relative isolate flex flex-col md:gap-24">
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
