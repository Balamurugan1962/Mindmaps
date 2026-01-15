import { NavBar } from "../Navbar";
import { Footer } from "../Footer";
import { Button } from "../ui/button";
import Link from "next/link";

export function Landing() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col justify-center items-center gap-9">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold">Welcome to Mindmaps</h1>
          <p className="text-xl">
            Learn fast by making mindmaps quick and easy.
          </p>
        </div>
        <Button variant="outline" size={"lg"}>
          <Link href={"/signin"}>Lets Start!</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
