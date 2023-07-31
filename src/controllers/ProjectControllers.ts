import {Request,Response} from 'express';

//Get all Projects
export const getAllProjects = async(req: Request,res: Response) => {
    res.status(200).json({mssg: "Get All Projects available in Database"});
}

//Get a single Project
export const getProject = async(req: Request,res: Response) => {
    res.status(200).json({mssg: "Get a single Project"});
}

//Create a new Project
export const createProject = async(req: Request, res: Response) => {
    res.status(200).json({mssg: "Creat a new Project"});
}

//Delete a single Project
export const deleteProject = async(req: Request, res: Response) => {
    res.status(200).json({mssg: "Delete a Project"});
}

//Update a single Project
export const updateProject = async(req: Request,res: Response) => {
    res.status(200).json({mssg: "Update a Project"});
}