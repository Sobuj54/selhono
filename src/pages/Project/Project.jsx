import { useEffect, useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import IndividualProject from "./IndividualProject/IndividualProject";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const url =
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <>
      <MiniHero text="Our Project" img={url} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-24">
        {projects.map((project, index) => (
          <IndividualProject key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default Project;
