import "../styles/index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Experience from "./Experience";
import Services from "./Services";
import GitHub from "./GitHub";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Services />
      <GitHub />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
