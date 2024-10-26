import { Models } from "node-appwrite";

export enum TaskStatus {
  BACKLOG = "BACKLOG",
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  IN_REVIEW = "IN_REVIEW",
  DONE = "DONE",
}

export type Task = Models.Document & {
  name: string;
  position: number;
  status: TaskStatus;
  workspaceId: string;
  projectId: string;
  dueDate: string;
  assigneeId: string;
  description?: string;
};
