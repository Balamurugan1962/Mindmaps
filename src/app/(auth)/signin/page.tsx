"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Signin() {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Button onClick={signIn}>Signin with Google</Button>
    </div>
  );
}
