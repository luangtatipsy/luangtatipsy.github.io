import Navbar from "./modules/Navbar";
import Hero from "./modules/Hero";
import Education from "./modules/Education";
import Experience from "./modules/Experience";
import Certificate from "./modules/Certificate";
import Footer from "./modules/Footer";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Element name="education">
        <Education />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="certificates">
        <Certificate />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
