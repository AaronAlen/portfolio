import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-zinc-950 text-white overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
