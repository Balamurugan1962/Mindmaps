import { getAllCanvas } from "@/services/canvas";
import { CanvasTableClient } from "./CanvasTableClient";

type Props = {
  userId: string;
};
export async function CanvasTable({ userId }: Props) {
  const canvas = await getAllCanvas(userId);
  return <CanvasTableClient canvas={canvas} />;
}
