import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="flex gap-1 items-center">
      <h1 className="font-semibold text-xl">MindMaps</h1>
    </Link>
  );
}
