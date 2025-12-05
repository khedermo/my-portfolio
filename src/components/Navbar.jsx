import { useState } from "react";
import "./Navbar.css";


export default function Navbar() {
  const [checked, setChecked] = useState("");
  function handleOpenClick() {
    setChecked("show");
  }
  function handleCloseClick() {
    setChecked("");
  }
  function scroll(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <button className="openNavBar" onClick={() => handleOpenClick()}></button>
      <nav className={checked} id="nav">
        <button
          className="closeNavBar"
          onClick={() => handleCloseClick()}
        ></button>
        <h1>Kheder Mohamad</h1>
        <ul>
          <li>
            <button
              className="navBtn"
              onClick={() => {
                scroll("about");
                handleCloseClick();
              }}
            >
              about me
            </button>
          </li>
          <li>
            <button
              className="navBtn"
              onClick={() => {
                scroll("skills");
                handleCloseClick();
              }}
            >
              skills and tools
            </button>
          </li>
          <li>
            <button
              className="navBtn"
              onClick={() => {
                scroll("portfolio");
                handleCloseClick();
              }}
            >
              portfolio
            </button>
          </li>
          <li>
            <button
              className="navBtn"
              onClick={() => {
                scroll("contact");
                handleCloseClick();
              }}
            >
              contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
