import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../../graphql/Projects";

const ProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      'getProjects'
    ],
  });

  const handleChange = (e) => {
    e.preventDefault();
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description } = project;
    createProject({
      variables: {
        name,
        description
      },
    });

    if (!error) {
      setProject({
        name: "",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}

      <input
        type="text"
        name="name"
        placeholder="Insert a name"
        onChange={handleChange}
      />
      <textarea name="description" rows="3" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
