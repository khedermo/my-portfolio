import "./Contact.css";
import whatsappImg from "../assets/icons8-whatsapp-64.png";
import chatImg from "../assets/icons8-chat-50.png";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const [validationError, setValidationError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
    if (validationError) {
      setValidationError("");
    }
  }

  async function handleSubmite(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setValidationError("Please fill out all fields.");
      return;
    }
    setValidationError("");
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mzzngllk", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mainContainer" id="contact">
      <div className="infoContainer">
        <h1 className="contactTitle">
          LET’S DISCUSS YOUR
          <br /> PROJECT
        </h1>
        <h1>
          GET IN TOUCH{" "}
          <img src={chatImg} alt="chat sign" className="chatSign"></img>
        </h1>
        <div className="contactInfo">
          <div className="infoBlock">
            <p>Email</p>
            <a href="khoder98@gmail.com">khoder98@gmail.com</a>
          </div>
          <div className="infoBlock">
            <p>Phone</p>
            <a href="tel:+491734367621" className="phoneNumber">
              +49 173 4367621
            </a>
          </div>
        </div>
        <a href="https://wa.me/491734367621" className="whatsapp">
          <img src={whatsappImg} alt="whatsapp logo" className="whatsapp" />
        </a>
      </div>

      <div className="messageContainer">
        <h1 className="contactText">CONTACT FROM</h1>
        <form onSubmit={handleSubmite}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <p>Email</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>Message</p>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "SEND"}
          </button>
          {validationError && (
            <p className="validationError">{validationError}</p>
          )}
          {status === "success" && (
            <p className="successMsg">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
