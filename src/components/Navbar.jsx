import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/github">GitHub</a>
        </li>
        <li>
          <a href="contact/">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
