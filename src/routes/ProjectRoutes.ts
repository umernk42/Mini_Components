import { Router } from "express";
import { getAllProjects, getProject, createProject, deleteProject, updateProject } from "../controllers/ProjectControllers";

const router = Router();

//Route to get all Projects
router.get('/', getAllProjects);

//Route to get a single Project
router.get('/:id', getProject);

//Route to Post a single Project
router.post('/', createProject);

//Route to Delete a single Project
router.delete('/:id', deleteProject);

//Route to update a single Projct
router.patch('/:id', updateProject);

export default router;
