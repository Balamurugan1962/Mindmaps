import { NodeProps, XYPosition } from "@xyflow/react";

type DocNodeType = {
  id: string;
  position: XYPosition;
  data: {
    title: string;
    description: string;
  };
};

export default function DocNode({ id, data }: NodeProps<DocNodeType>) {
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
