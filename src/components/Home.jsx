/* eslint-disable react/no-unescaped-entities */
import "../styles/home.css";
import {Element} from "react-scroll";
function Home() {
  return (
    <Element name="home">
      <div className="home">
        <div className="text">
          <h1>
            Hey There! <img src="./Emoji.png" className="emoji" /> <br />
            I'm Kevin Caeyman
          </h1>
          <p>Front-End Developer, Gamer, and coffee aficionado</p>
          <button>Download CV</button>
        </div>
        <div className="portrait-container">
          <img src="./Portrait.png" alt="Kevin" className="portrait" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
