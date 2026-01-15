import { Dashboard } from "@/components/pages/Dashboard";
import { Landing } from "@/components/pages/Landing";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return <Landing />;
  }
  return <Dashboard />;
}
