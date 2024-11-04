import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const response = await prisma.note.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getNote = async (req: Request, res: Response) => {
    try {
        const response = await prisma.note.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const addNote = async (req: Request, res: Response) => {
    try {
        const response = await prisma.note.create({ data: req.body });
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateNote = async (req: Request, res: Response) => {
    try {
        const response = await prisma.note.update({
            where: {
                id: parseInt(req.params.id),
            },
            data: req.body
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    try {
        await prisma.note.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(null);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};