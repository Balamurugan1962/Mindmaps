"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function SignOut() {
  const router = useRouter();
  async function signOut() {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });
    } catch (e) {
      toast.error("Something went wrong!\nRetry again.");
    }
  }
  return (
    <Button variant="destructive" onClick={signOut} className="cursor-pointer">
      SignOut
    </Button>
  );
}
