export default function Skills(props) {
  let skillsData = props.data;
  return (
    <section id="skills">
      <div className="gridSkill">
        <h2 id="skill">
          <b>SKILLS</b>
        </h2>
        <div className="skill-illustrator">
          {skillsData.skills.map((skill) => (
            <>
              <h3>{skill.title}</h3>
              <div
                className="illustrator-bar bar skill-bar"
                style={{ width: skill.level }}
              >
                <p>{skill.qual}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
