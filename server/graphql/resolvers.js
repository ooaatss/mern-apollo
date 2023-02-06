import {
  createProject,
  findProjects,
  findOneProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controllers.js";
import {
  createTask,
  deleteTask,
  findOneTask,
  findTasks,
  updateTask,
} from "../controllers/task.controllers.js";

export const resolvers = {
  Query: {
    // * Projects Operation
    projects: async () => {
      const projects = await findProjects();
      return projects;
    },
    project: async (_, args) => {
      const { _id } = args;

      const project = await findOneProject(_id);

      return project;
    },

    // * Task Operations
    tasks: async () => {
      const tasks = findTasks();
      return tasks;
    },
    task: async (_, args) => {
      const { _id } = args;

      const findTask = findOneTask(_id);

      return findTask;
    },
  },

  Mutation: {
    //  * Projects Operations
    createProject: async (_, args) => {
      const project = await createProject(args);
      return project;
    },

    updateProject: async (_, args) => {
      const { projectId } = args;

      const updatedProject = await updateProject(projectId, { ...args });

      return updatedProject;
    },

    deleteProject: async (_, args) => {
      const { projectId } = args;

      const deletedProject = await deleteProject(projectId);

      return deletedProject;
    },

    // * Task Operations
    createTask: async (_, args) => {
      const task = await createTask(args);
      return task;
    },
    deleteTask: async (_, args) => {
      const { taskId } = args;

      const taskDeleted = deleteTask(taskId);

      return taskDeleted;
    },
    updateTask: async (_, args) => {
      const { taskId } = args;

      const taskUpdated = updateTask(taskId, { ...args });

      return taskUpdated;
    },
  },

  //  * Relations
  Project: {
    tasks: async (parent) => {
      const { _id } = parent;

      const tasks = await findTasks(_id);

      return tasks;
    },
  },

  Task: {
    project: async (parent) => {
      const { projectId } = parent;

      const project = await findOneProject(projectId);

      return project;
    },
  },
};
