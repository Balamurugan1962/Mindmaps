import { headers } from "next/headers";
import { NavBar } from "../Navbar";
import { CanvasTable } from "../elements/CanvasTable";
import { CreateCanvas } from "../elements/CreateCanvas";
import { User } from "better-auth";
import { auth } from "@/lib/auth";

export async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return;
  }

  const user = session.user;

  return (
    <div className="flex flex-col gap-3">
      <NavBar hasSession={true} />

      <div className="flex-1 px-12 flex flex-col gap-11">
        <h1 className="font-semibold text-2xl">Hello {user.name}!</h1>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Canvas</h1>
            <CreateCanvas userId={user.id} />
          </div>

          <CanvasTable userId={user.id} />
        </div>
      </div>
    </div>
  );
}
