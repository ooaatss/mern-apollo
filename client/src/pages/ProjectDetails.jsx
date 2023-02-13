import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../graphql/Projects";
const ProjectDetails = () => {
  const { projectId } = useParams();

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: projectId,
    },
  });
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { project } = data;

  console.log(project.tasks);
  return (
    <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
      <a className="block rounded-xl bg-white p-6 sm:p-8" href="">
        <div className="mt-16 sm:pr-8">
          <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectDetails;
