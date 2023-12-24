import React, { useState } from "react";
import { useEffect } from "react";
export default function About(state) {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const { contract } = state;
    const description = async () => {
      const descriptionText = await contract.methods.description().call();
      setDesc(descriptionText);
      console.log("line 11", desc);
    };
    contract && description();
  }, [state]);
  return (
    <section id="about-me">
      <div className="aboutMeHeader">
        <h2>
          <b>ABOUT ME</b>{" "}
        </h2>
      </div>
      <div className="header-about">
        <p>{desc}</p>
      </div>

      <div className="edu-exp">
        <div id="educations">
          <div className="ed-row">
            <div className="education-title">
              <h3>
                <b>Educations</b>
              </h3>
            </div>
            <div className="edu-box-main">
              <div className="edu-box">
                <h5>
                  <b>Pulchowk Campus</b>
                </h5>
                <p>
                  <b>2020-Present</b>
                </p>
                <p>Bachelors in Computer Engineering</p>
              </div>
              <div className="edu-box">
                <h5>
                  <b>St. Xavier's College</b>
                </h5>
                <p>
                  <b>2017-2019</b>
                </p>
                <p>+2 Science</p>
              </div>
              <div className="edu-box">
                <h5>
                  <b>Shrijanshil Secondary English School</b>
                </h5>
                <p>
                  <b>2008-2017</b>
                </p>
                <p>School Level</p>
              </div>
            </div>
          </div>
        </div>
        <div id="experiences">
          <div className="ex-row">
            <div className="experience-title">
              <h3>
                <b>Experiences</b>
              </h3>
            </div>
            {/* <div className="ex-box-main">
              {data.experiences
                .map((experience, index) => (
                  <div className="ex-box" key={index}>
                    <h5>
                      <b>{experience.title}</b>
                    </h5>
                    <p>
                      <b>{experience.company}</b> | {experience.date}
                    </p>
                    <p>{experience.desc}</p>
                    {index === 1 && !showAllExperiences && (
                      <button
                        className="btn btn-outline-success projectButton"
                        onClick={() => setShowAllExperiences(true)}
                      >
                        See More
                      </button>
                    )}
                  </div>
                ))
                .slice(0, showAllExperiences ? data.experiences.length : 2)}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
