"use server";

import { connectToDatabase } from "../../database/mongoose";

// create question
export async function createQuestion(question: any) {
  try {
    await connectToDatabase();
  } catch (error) {}
}
