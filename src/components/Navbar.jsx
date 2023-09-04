import {useState} from "react";
import {FaBars} from "react-icons/fa";
import {Link} from "react-scroll";
import "../styles/navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    console.log(activeLink);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className={activeLink === "experience" ? "active" : ""}
            onClick={() => handleLinkClick("experience")}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className={activeLink === "services" ? "active" : ""}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="github"
            smooth={true}
            duration={500}
            className={activeLink === "github" ? "active" : ""}
            onClick={() => handleLinkClick("github")}
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
