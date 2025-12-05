import gitImg from "../assets/icons8-git-240.png";
import cssImg from "../assets/icons8-css-240.png";
import githubImg from "../assets/icons8-github-logo-240.png";
import htmlImg from "../assets/icons8-html-240.png";
import jsImg from "../assets/icons8-js-240.png";
import reactImg from "../assets/icons8-react-native-240.png";
import "./SkillsAndTools.css";
import tailwindImg from "../assets/icons8-tailwind-css-240.png";
export default function SkillsAndTools() {
  return (
    <section id="skills">
      <h1 className="skillsText">SKILLS & LANGUAGES</h1>

      <div className="skillsContainer">
        <div className="tecContainer">
          <p>The skills, tools and technologies I use:</p>
          <div className="technologies">
            <img src={htmlImg} alt="" />
            <img src={cssImg} alt="" />
            <img src={tailwindImg} alt="" />
            <img src={jsImg} alt="" />
            <img src={reactImg} alt="" />
            <img src={githubImg} alt="" />
            <img src={gitImg} alt="" />
          </div>
        </div>
        <div className="border"></div>
        <div className="languages">
          <p className="arabic">Arabic</p>
          <div className="arabicBar"></div>

          <p>English</p>
          <div className="englishBar"></div>

          <p>German</p>
          <div className="germanBar"></div>
        </div>
      </div>
    </section>
  );
}
