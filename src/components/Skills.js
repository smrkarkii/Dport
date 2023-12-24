import { useEffect } from "react";
export default function Skills({ state }) {
  // let skillsData = props.data
  // console.log("state", contract);

  useEffect(() => {
    const { contract } = state;
    const fetchData = async () => {
      const skills = await contract.methods.getSkill().call();
      console.log(skills);
    };
    contract && fetchData();
  }, [state]);
  return (
    <section id="skills">
      <div className="gridSkill">
        <h2 id="skill">
          <b>SKILLS</b>
        </h2>
        {/* <div className="skill-illustrator">
          {skillsData.skills.map((skill) => (
            <>
              <h3>{skill.title}</h3>
              <div
                className="illustrator-bar bar skill-bar"
                style={{ width: skill.level, height: "20px" }}
              >
                <p>{skill.qual}</p>
              </div>
            </>
          ))}
        </div> */}
      </div>
    </section>
  );
}
