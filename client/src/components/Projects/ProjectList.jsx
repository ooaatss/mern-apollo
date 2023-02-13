import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../graphql/Projects.js";
import ProjectCard from "./ProjectCard";
const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      {data.projects.map((item, index) => (
        <ProjectCard key={index} {...item}/>
      ))}
    </div>
  );
};

export default ProjectList;
