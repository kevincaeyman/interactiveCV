/* eslint-disable react/no-unescaped-entities */
import {Element} from "react-scroll";
import "../styles/github.css";

function GitHub() {
  return (
    <Element name="github">
      <div className="github">
        <h1>GitHub</h1>
        <div className="content">
          <a
            href="https://github.com/kevincaeyman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./GitHub.svg" alt="GitHub" />
          </a>
          <p>
            Ready to explore the depths of my codebase? 🕵️‍♂️ <br /> <br /> Take a
            journey through my GitHub repository wonderland and witness the
            magic unfold. <br /> <br /> Rest assured, there are no dragons here,
            just well-organized repositories waiting to impress! 👾 <br />{" "}
            <br /> Feel free to explore!
          </p>
        </div>
        <a
          className="bottom-text"
          href="https://github.com/kevincaeyman"
          target=" _blank"
        >
          Psssst! Over here: 📍
        </a>
      </div>
    </Element>
  );
}

export default GitHub;
