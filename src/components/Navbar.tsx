import { Logo } from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="border-b border-secondary px-2 py-2 flex justify-between items-center">
      <Logo />
      <div className="flex gap-3">
        <Button variant="secondary">
          <Link href={"/signin"}>SignIn</Link>
        </Button>

        {/*<Link
          href={"/signup"}
          className="border border-gray-500 bg-gray-300 rounded-sm px-2 py-1"
        >
          SignUp
        </Link>*/}
      </div>
    </div>
  );
}
