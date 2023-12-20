import React from "react";
import prastabImage1 from "../images/prastab.jpg";
import prastabImage2 from "../images/prastab2.jpg";

export default function Achievement(props) {
  let data = props.data;

  return (
    <section id="achievements">
      <h2>
        <b>ACHIEVEMENT</b>
      </h2>
      <div className="gridAchievements">
        {data.achievements.map((achievement, index) => (
          <a href={achievement.link} target="_blank" key={index}>
            <div className="prastab">
              <div className="img-container">
                <img
                  className="img-achievement"
                  width="auto"
                  height="250"
                  src={prastabImage1}
                  alt=""
                />
                <img
                  className="img-achievement"
                  width="auto"
                  height="250"
                  src={prastabImage2}
                  alt=""
                />
              </div>

              <h2>{achievement.title}</h2>
              <h5 style={{ color: "white", textDecoration: "none" }}>
                {achievement.event}
              </h5>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
