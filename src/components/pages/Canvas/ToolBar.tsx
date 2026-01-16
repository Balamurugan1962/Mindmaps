"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Panel } from "@xyflow/react";
import { Plus } from "lucide-react";

type Props = {
  onAddNode: () => void;
};

export const ToolBar = ({ onAddNode }: Props) => {
  return (
    <Panel position="top-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onAddNode} variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Node</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Panel>
  );
};
