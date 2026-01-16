import { Logo } from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignOut } from "./signOut";

type Props = {
  hasSession: boolean;
};
export function NavBar({ hasSession }: Props) {
  return (
    <div className="border-b border-secondary px-2 py-2 flex justify-between items-center">
      <Logo />
      <div className="flex gap-3">
        {!hasSession && (
          <Button variant="secondary">
            <Link href={"/signin"}>SignIn</Link>
          </Button>
        )}
        {hasSession && <SignOut />}
      </div>
    </div>
  );
}
