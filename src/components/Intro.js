import pp from "../images/smritikarki.jpg";
import { useState, useEffect } from "react";

export default function Intro(state) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const { contract } = state;
    const imageId = async () => {
      const image = contract.methods.imageLink;
      setImage(image);
    };
    contract && imageId();
  }, [state]);
  return (
    <div className="container-fluid " id="intro">
      <div className="introContainer">
        <div className="row title-row" id="second-content">
          <div className="image-col col col-md-6 col-xs-12">
            <img
              src={`https://gateway.pinata.cloud/ipfs/${image}`}
              style={{}}
            />
          </div>
          <div className="title-col col-md-6 col-xs-12">
            <div className="text-block">
              <p className="title-text" style={{ color: "white" }}>
                Hello, I am
              </p>
              <h5 className="head-10" style={{ color: "black" }}>
                <b>
                  <span className="head-1">Smriti Karki.</span>
                </b>
              </h5>
              <p
                className="title-desc"
                style={{ fontSize: "1.5rem", color: "white" }}
              >
                A Computer Engineering Student and a Tech Enthusiast.
              </p>
            </div>
            <div className="cv-div">
              <button id="cv-download" className="btn btn-outline-success ">
                {" "}
                <i className="fa-solid fa-file-arrow-down"></i>
                <a href="../file/resume.pdf" download target="_blank">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
