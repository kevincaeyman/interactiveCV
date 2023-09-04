import "../styles/experience.css";
import {Element} from "react-scroll";

function Experience() {
  return (
    <Element name="experience">
      <div className="title">
        <h1>My Profesional Background</h1>
      </div>
      <div className="experience">
        <img src="./MyExperience.png" />
        <img src="./MyEducation.png" />
      </div>
    </Element>
  );
}

export default Experience;
