import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Project } from "next/dist/build/swc";

export interface Projects {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export enum Status {
  ToDo = "To Do",
  workInProgress = "work in Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

export enum Priority {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}
export interface User {
  userId: number;
  username: String;
  email: String;
  profilePictureUrl?: string;
  cognitoId: string;
  teamId: number;
}

export interface Attachment {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}
export interface Task {
  id: number;
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: String;
  startDate?: string;
  dueDate?: string;
  points?: string;
  projectId?: string;
  authorUserId?: string;
  assignedUserId?: string;

  author?: User;
  assignedd?: User;
  comments: Comment[];
  attachments?: Attachment[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [Projects],
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => "projects",
      providesTags:["Projects"],
    }),
    createProject: build.mutation<Project, Partial<project>>({

    })
  }),
});

export const {} = api;
