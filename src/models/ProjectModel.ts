import {Schema,model} from "mongoose";

//An interface representing a document in mongoDB
interface Project {
    ProjectName: String,
    GitRepoURL: String,
    LiveURL: String,
    Description: String,
    Stack: String[],
    ProjectSnap: {
        data: Buffer,
        contentType: String
    }
}

const ProjectSchema = new Schema<Project>({
    ProjectName: String,
    GitRepoURL: String,
    LiveURL: String,
    Description: String,
    Stack: [],
    ProjectSnap: {
        data: Buffer,
        contentType: String
    }
});

export const ProjectModel = model<Project>('Project',ProjectSchema);