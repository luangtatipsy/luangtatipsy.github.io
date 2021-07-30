import Navbar from "./modules/Navbar";
import Hero from "./modules/Hero";
import Education from "./modules/Education";
import Experience from "./modules/Experience";
import Certificate from "./modules/Certificate";
import Footer from "./modules/Footer";
import { Element } from "react-scroll";
import FadeIn from "react-fade-in";

const App = () => {
  return (
    <div>
      <Navbar />
      <FadeIn delay="500" transitionDuration="1000">
        <Hero />
      </FadeIn>
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
