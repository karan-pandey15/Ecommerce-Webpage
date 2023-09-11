import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="wrapper_Container">
        <div className="wrapper_secondContainer">
          <div className="wrapper_data">
            <h4>
              @Develop By <span> Karan Pandey</span>
            </h4>
            <p className="container_para">
              {" "}
              Student at Bachelor in Computer Applications currently doing
              training in Ducat for a MERN Stack Developer || Good Speaker ||
              Full-Stack Developer.
            </p>
          </div>
          <div className="input_data">
            <input type="text" placeholder="Your E-mail" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
