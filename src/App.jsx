import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SkillsAndTools from "./components/SkillsAndTools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar  scroll = {scroll}/>
      <AboutMe scroll={scroll}/>
      <SkillsAndTools />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
