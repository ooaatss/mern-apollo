import Project from "../models/Project.js";
import { isValidObjectId } from "mongoose";

export const createProject = async (args) => {
  const { name, description } = args;
  const project = new Project({
    name,
    description,
  });
  const savedProject = await project.save();
  return savedProject;
};

export const findProjects = async () => {
  const projects = await Project.find();
  return projects;
};

export const findOneProject = async (projectId = "") => {
  if (!isValidObjectId(projectId))
    throw Error("the projectId is an invalid id");

  const project = await Project.findById(projectId);

  return project;
};
