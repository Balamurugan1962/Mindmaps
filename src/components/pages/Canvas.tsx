"use client";

import { useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ToolBar } from "./Canvas/ToolBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { changeCanvasName } from "@/services/canvas";
import { toast } from "sonner";

type Props = {
  canvas: {
    name: string;
    id: string;
    createdBy: string;
  };
};

export default function Canvas({ canvas }: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [canvasName, setCanvasName] = useState(canvas.name);
  const [savedCanvasName, setSavedCanvasName] = useState(canvas.name);

  const changeInCanvasName = canvasName !== savedCanvasName;

  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  const handleAddNode = () => {
    const newNode: Node = {
      id: crypto.randomUUID(),
      data: {
        label: "Home",
      },
      position: {
        x: 100 - Math.random() * 200,
        y: 100 - Math.random() * 200,
      },
    };

    setNodes((nds) => [newNode, ...nds]);
  };

  const handleCanvasNameSave = async () => {
    try {
      await changeCanvasName(canvas.id, canvasName);
      setSavedCanvasName(canvasName);
      toast.success("Canvas name updated");
    } catch (e) {
      toast.error("Something went wrong! Try again");
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll={true}
        selectionOnDrag={true}
        panOnDrag={false}
        fitView
      >
        <Panel position="top-left">
          <div className="flex items-center gap-2">
            <Link href={"/"} className="bg-white">
              <Button
                disabled={changeInCanvasName}
                variant="outline"
                size="icon"
                aria-label="Submit"
              >
                <ArrowLeft />
              </Button>
            </Link>
            <Input
              value={canvasName}
              onChange={(e) => {
                setCanvasName(e.target.value);
              }}
              className="bg-white"
            />
            <Button
              className="cursor-pointer"
              onClick={handleCanvasNameSave}
              disabled={!changeInCanvasName}
            >
              Save
            </Button>
          </div>
        </Panel>
        <ToolBar onAddNode={handleAddNode} />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
