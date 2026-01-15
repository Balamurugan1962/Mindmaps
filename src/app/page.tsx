import { Dashboard } from "@/components/pages/Dashboard";
import { Landing } from "@/components/pages/Landing";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession();

  if (!session) {
    return <Landing />;
  }
  return <Dashboard />;
}
