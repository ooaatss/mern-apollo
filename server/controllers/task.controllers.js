import Project from "../models/Project.js";
import Task from "../models/Task.js";
import { isValidObjectId } from "mongoose";
export const createTask = async (args) => {
  const { title, projectId } = args;

  const findProjectExist = await Project.findById(projectId);

  if (!findProjectExist) throw new Error("Project not found!");

  const task = new Task({
    title,
    projectId,
  });

  const savedTask = await task.save();

  return savedTask;
};

export const findTasks = async (projectId = '') => {
  const tasks = await Task.find(isValidObjectId(projectId) ? { projectId: projectId } : {});
  return tasks;
};

export const findOneTask = async (taskId) => {
  const findTask = await Task.findById(taskId).populate("projectId");
  return findTask;
};

export const deleteTask = async (taskId = '') => {
  if (!taskId.length || !isValidObjectId(taskId))
    throw Error(
      `the TaskId is ${!isValidObjectId(taskId) ? "an invalid id" : "required"}`
    );

  const deleteTask = Task.findOneAndDelete(taskId);

  return deleteTask;
};

export const updateTask = async (taskId = "", newTask = {}) => {
  if (!isValidObjectId(taskId))
    throw Error(
      `the TaskId is ${!isValidObjectId(taskId) ? "an invalid id" : "required"}`
  );

  const findTask = await Task.findById(taskId);

  if (!findTask) throw Error("Task not found!");

  const updateTask = await Task.findOneAndUpdate(
    taskId,
    { ...newTask },
    { new: true }
  );

  return updateTask;
};
