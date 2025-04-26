import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import { Banner } from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="">
          <Navbar />
          <Banner />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
