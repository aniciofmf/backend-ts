import { Request, Response } from "express";
import { Container } from "typedi";
import KeyService from "@/services/key/key";

const keyService = Container.get(KeyService);

export const login = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export const signup = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export const logout = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export const me = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export const reset = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
