import ProjectModel from "../models/projects";

export default defineEventHandler(async () => {
  try {
    const result = (await ProjectModel.find()) as [];
    return result;
  } catch (error) {
    return { error };
  }
});
