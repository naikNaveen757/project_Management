import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProjects = async (
  req: Request, 
  res: Response
): Promise<void> => {
    const {name, descrition , startdate, enddate} = req.body;
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving projects" });
  }
};

export const createProjects = async (
    req: Request, 
    res: Response
  ): Promise<void> => {
    try {
      const projects = await prisma.project.findMany();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving projects" });
    }
  };