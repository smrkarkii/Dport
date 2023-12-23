import React from "react";
import prastabImage1 from "../images/prastab.jpg";
import prastabImage2 from "../images/prastab2.jpg";

export default function Achievement(props) {
  let data = props.data;

  return (
    <section id="achievements">
      <div className="achievementHeader">
        <h2>
          <b style={{ color: "white" }}>ACHIEVEMENT</b>
        </h2>
      </div>

      <div className="gridAchievements">
        {data.achievements.map((achievement, index) => (
          <a
            href={achievement.link}
            target="_blank"
            key={index}
            style={{ textDecoration: "none" }}
          >
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

              <h2 style={{ color: "white" }}>{achievement.title}</h2>
              <h5 style={{ color: "rgb(138 138 138)", fontStyle: "italic" }}>
                {achievement.event}
              </h5>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
