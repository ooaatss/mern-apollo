import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../graphql/Projects.js";

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      {data.projects.map((item, index) => (
        <ul key={index}>{item.name} - {item.description}</ul>
      ))}
    </div>
  );
};

export default ProjectList;
