import { auth } from "@/lib/auth";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { headers } from "next/headers";
import { SignOut } from "./signOut";

export async function NavBar() {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <div className="border-b border-secondary px-2 py-2 flex justify-between items-center">
      <Logo />
      <div className="flex gap-3">
        {!session && (
          <Button variant="secondary">
            <Link href={"/signin"}>SignIn</Link>
          </Button>
        )}
        {session && <SignOut />}
      </div>
    </div>
  );
}
