"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ReactFlow, Background, Controls, MiniMap, Panel } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { changeCanvasName } from "@/services/canvas";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  canvas: {
    id: string;
    name: string;
    createdBy: string;
  };
};

export function Canvas({ canvas }: Props) {
  const [name, setName] = useState(canvas.name);
  const [isSaving, setIsSaving] = useState(false);

  const isNameChanged = name.trim() !== canvas.name;

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleSave = async () => {
    if (!isNameChanged) return;

    try {
      setIsSaving(true);
      const result = await changeCanvasName(canvas.id, name);

      if (!result) {
        throw new Error("Failed to save canvas name");
      }

      canvas.name = result.name;
      setName(result.name);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-screen h-screen">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Panel className="top-left">
          <div className="flex items-center gap-2 bg-white">
            <Link href={"/"}>
              <Button variant="outline" size="icon" aria-label="Submit">
                <ArrowLeft />
              </Button>
            </Link>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Canvas name"
            />
            <Button onClick={handleSave} disabled={!isNameChanged || isSaving}>
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </Panel>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
