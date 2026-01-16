"use server";
import { db } from "@/db";
import { canvas } from "@/db/schemas/canvas";
import { eq } from "drizzle-orm";
import { use } from "react";

const c = [
  {
    id: "1",
    name: "Canvas 1",
  },
  {
    id: "2",
    name: "Canvas 2",
  },
  {
    id: "3",
    name: "Canvas 3",
  },
];
export async function getAllCanvas(userId: string) {
  try {
    const data = await db
      .select({ id: canvas.id, name: canvas.name })
      .from(canvas)
      .where(eq(canvas.createdBy, userId));

    console.log(data);

    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function createCanvas(canvasName: string, userId: string) {
  try {
    const data = await db
      .insert(canvas)
      .values({
        name: canvasName,
        createdBy: userId,
      })
      .returning();
    console.log(data);
    return data[0];
  } catch (e) {
    return null;
  }
}

export async function getCanvasById(canvasId: string) {
  try {
    const data = await db.select().from(canvas).where(eq(canvas.id, canvasId));
    return data[0];
  } catch (e) {
    return null;
  }
}

export async function changeCanvasName(canvasId: string, name: string) {
  try {
    const result = await db
      .update(canvas)
      .set({ name })
      .where(eq(canvas.id, canvasId))
      .returning();
    return result[0];
  } catch (e) {
    return null;
  }
}
