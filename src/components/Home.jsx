/* eslint-disable react/no-unescaped-entities */
import "../styles/home.css";
function Home() {
  return (
    <div className="home">
      <div className="text">
        <h1>
          Hey There! <img src="public/assets/Emoji.png" className="emoji" />{" "}
          <br />
          I'm Kevin Caeyman
        </h1>
        <p>Front-End Developer, Gamer and coffee afficionado</p>
        <button>Download CV</button>
      </div>
      <img src="public/assets/portrait.png" alt="Kevin" className="portrait" />
    </div>
  );
}

export default Home;
