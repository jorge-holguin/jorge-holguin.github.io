import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  //Feedbacks,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
  Videos,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
      <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Videos />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
