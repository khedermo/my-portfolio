import "./AboutMe.css";

export default function AboutMe({ scroll }) {
  return (
    <div className="myInfo" id="about">
      <h1>FRONTEND DEVELOPER</h1>
      <div className="imgContainer"></div>
      <p>
        I’m Kheder Mohamad, a <span>frontend developer</span> passionate about creating
        clean, modern, and responsive user interfaces. I work with JavaScript,
        React, and Tailwind CSS to build smooth, user-focused digital
        experiences. I enjoy turning ideas into functional designs and
        continuously improving my skills to stay aligned with modern web
        technologies.
      </p>
      <button onClick={() => scroll("portfolio")}>VIEW MY WORK</button>
    </div>
  );
}
