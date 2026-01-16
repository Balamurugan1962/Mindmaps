"use client";
import { createCanvas } from "@/services/canvas";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
};

export function CreateCanvas({ userId }: Props) {
  const router = useRouter();

  const createNewCanvas = async () => {
    try {
      const newCanvas = await createCanvas("Untitled", userId);

      if (!newCanvas) {
        throw new Error("create Canvas Error");
      }

      router.push(`/canvas/${newCanvas.id}`);
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong, Try Again.");
    }
  };

  return (
    <Button variant="outline" onClick={createNewCanvas}>
      Create New
    </Button>
  );
}
