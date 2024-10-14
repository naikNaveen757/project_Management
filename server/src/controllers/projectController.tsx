import { Request,response } from "express";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
    
export const getProjects =  async (
    req:Request, 
    res: Response
    ):Promise<void> =>{
        try{
            const projetcs = await prisma.project.findMany();
            res.json(projetcs);
        }catch(error){
            res.status(500).json({message: "Error retriving projects"});
        }
    };