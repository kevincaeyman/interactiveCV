/* eslint-disable react/no-unescaped-entities */
import "../styles/github.css";

function GitHub() {
  return (
    <div className="github">
      <h1>GitHub</h1>
      <div className="content">
        <img src="./GitHub.svg" alt="" />
        <p>
          Ready to dive into the intricate labyrinth of my code? 🕵️‍♂️ <br />{" "}
          <br /> Take a stroll through my GitHub wonderland and witness the
          magic unfold. <br /> <br />
          Don't worry, I promise there are no dragons, just some well-organized
          repositories waiting to impress! 👾 <br />
          <br />
          Explore away!
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
  );
}

export default GitHub;
