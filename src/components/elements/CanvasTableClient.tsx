"use client";

import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Canvas = {
  id: string;
  name: string;
};

export function CanvasTableClient({ canvas }: { canvas: Canvas[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  const allSelected = selected.length === canvas.length && canvas.length > 0;

  const toggleAll = () => {
    setSelected(allSelected ? [] : canvas.map((c) => c.id));
  };

  const toggleOne = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-muted">
          <tr className="border-b">
            <th className="w-12 px-4 py-3 text-left">
              <Checkbox checked={allSelected} onCheckedChange={toggleAll} />
            </th>
            <th className="px-4 py-3 text-left font-medium">Name</th>
            <th className="px-8 py-3 text-right font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {canvas.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="px-4 py-4">
                <Checkbox
                  checked={selected.includes(row.id)}
                  onCheckedChange={() => toggleOne(row.id)}
                />
              </td>
              <td className="px-4 font-semibold">{row.name}</td>
              <td className="text-right px-4">
                <Button
                  onClick={() => {
                    router.push(`/canvas/${row.id}`);
                  }}
                >
                  Open
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
