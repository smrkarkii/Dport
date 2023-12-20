export default function Project(props) {
  let data = props.data;
  return (
    <section id="projects">
      <h2>
        <b>MY PROJECTS</b>
      </h2>

      <div className="gridContainer">
        {data.projects.map((project) => (
          <div className="gridItems project1">
            <div className="header">
              <h3>{project.title}</h3>
            </div>

            <p className="project-desc">{project.desc}</p>

            <div>
              <h5>Languages Used</h5>
            </div>

            <span className="languages-used">{project.lang}</span>

            <p>
              <b>{project.contrib}</b>
            </p>
            <div className="demo">
              <a href={project.demo} target="_blank">
                <button className="btn btn-success projectButton">
                  {" "}
                  Live Demo
                </button>
              </a>
              <a href={project.source} target="_blank">
                <button className="btn btn-success projectButton">
                  {" "}
                  Source Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
