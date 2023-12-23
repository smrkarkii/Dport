import { useEffect } from "react";
export default function Project({ state }) {
  // let data = props.data;
  // useEffect(() => {
  //   const { contract } = state;

  //   const projectDetails = async () => {
  //     const projects = await contract.methods.getProjects().call();
  //     console.log(projects);
  //   };
  //   contract && projectDetails();
  // }, [state]);

  return (
    <section id="projects">
      <h2>
        <b>MY PROJECTS</b>
      </h2>
    </section>
  );
}
