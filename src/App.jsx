import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-zinc-950 text-white">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
