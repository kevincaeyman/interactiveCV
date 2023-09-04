/* eslint-disable react/no-unescaped-entities */
import "../styles/services.css";
import {Element} from "react-scroll";

function Services() {
  function SkillsBar() {
    return (
      <Element name="services">
        <div className="container">
          <div className="skill-box">
            <span className="title">Web Design</span>
            <div className="skill-bar">
              <span className="skill-per html"></span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">React JS</span>
            <div className="skill-bar">
              <span className="skill-per css"></span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">HTML 5</span>
            <div className="skill-bar">
              <span className="skill-per javascript"></span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">CSS 3</span>
            <div className="skill-bar">
              <span className="skill-per nodejs"></span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">TypeScript</span>
            <div className="skill-bar">
              <span className="skill-per reactjs"></span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Testing</span>
            <div className="skill-bar">
              <span className="skill-per expressjs"></span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Bootstrap, Sass, Tailwind...</span>
            <div className="skill-bar">
              <span className="skill-per expressjs"></span>
            </div>
          </div>
        </div>
      </Element>
    );
  }

  return (
    <div className="services">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <p>
            Dedicated customer service professional with 12 years of experience
            in providing exceptional support and building strong client
            relationships. I recently completed a frontend development bootcamp
            with a specialization in React, where I honed my skills in web
            development and programming. <br /> <br /> My background in customer
            service has equipped me with valuable skills, including:
          </p>{" "}
          <br />
          <ul>
            <li>
              <b>Communication:</b> As a customer service representative, I
              perfected my communication skills, both written and verbal. I
              excel at translating complex technical concepts into simple,
              understandable terms for clients and team members.
            </li>
            <li>
              <b>Problem Solving:</b> Over the years, I've developed a strong
              ability to identify and resolve issues efficiently. This
              problem-solving mindset is invaluable in troubleshooting code and
              finding innovative solutions in web development.
            </li>
            <li>
              {" "}
              <b>Client-Centric Focus:</b> Customer satisfaction has always been
              my priority. I understand the importance of user-centered design
              and apply this principle to create intuitive and user-friendly web
              interfaces.
            </li>
            <li>
              {" "}
              <b>Adaptability:</b> My experience working in diverse industries
              and with various software systems has made me adaptable and quick
              to learn. This adaptability translates seamlessly into the
              ever-evolving world of frontend development.
            </li>
            <li>
              <b>Teamwork:</b> Collaborative teamwork is a cornerstone of
              successful development projects. My background in customer service
              has fostered strong teamwork and collaboration skills that I bring
              to every development project.
            </li>
          </ul>{" "}
          <br />
          <p>
            I am passionate about leveraging these skills in the field of
            frontend development with React, where I can create exceptional user
            experiences and contribute to innovative digital solutions. Beyond
            work, you'll often find me exploring virtual worlds in video games.
            I also love coffee. I really love coffee.
          </p>
        </div>
        <SkillsBar />
      </div>
    </div>
  );
}

export default Services;
