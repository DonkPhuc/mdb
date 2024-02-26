import ProjectModel from "~/server/models/projects";

export default defineEventHandler(async () => {
  try {
    const result = await ProjectModel.find();
    return result || [];
  } catch (error) {
    return { error };
  }
});
