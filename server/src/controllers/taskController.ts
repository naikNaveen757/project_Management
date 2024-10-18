import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (
  req: Request, 
  res: Response
): Promise<void> => {
    const {projectid} = req.query;
  try {
    const tasks = await prisma.task.findMany({
        where:{
            projectId:Number(projectid),
        },
        include:{
            author:true,
            assignee:true,
            comments:true,
            attachments:true,
        },

    })
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: `Error retriving Task: ${error.message}`});
  }
};