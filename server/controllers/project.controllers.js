import Project from "../models/Project.js";
import Task from "../models/Task.js";
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

export const updateProject = async (projectId = "", newProject = {}) => {
  if (!isValidObjectId(projectId)) throw Error("the projectId is a invalid id");

  const updateProject = Project.findOneAndUpdate(
    { _id: projectId },
    { ...newProject },
    { new: true }
  );

  if (!updateProject) throw Error("Project not found!");

  return updateProject;
};

export const deleteProject = async (projectId = "") => {
  if (!isValidObjectId(projectId)) throw Error("the projectId is a invalid id");

  const deleteProject = await Project.findOneAndDelete(projectId);

  if (!deleteProject) throw Error("Project not found!");

  await Task.deleteMany({ projectId: projectId });

  return deleteProject;
};
