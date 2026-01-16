import Canvas from "@/components/pages/Canvas";
import { auth } from "@/lib/auth";
import { getCanvasById } from "@/services/canvas";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/sigin");
  }

  const canvas = await getCanvasById(id);

  if (!canvas) {
    redirect("/");
  }

  if (canvas.createdBy !== session.user.id) {
    redirect("/");
  }

  return <Canvas canvas={canvas} />;
}
