import "../styles/index.css";

import Navbar from "./Navbar";
import Home from "./Home";
import Experience from "./Experience";
import Services from "./Services";
import GitHub from "./GitHub";
import Contact from "./Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Services />
      <GitHub />
      <Contact />
    </>
  );
}

export default App;
