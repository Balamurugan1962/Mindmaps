// "use client";

// import { useState, useCallback } from "react";
// import { Button } from "@/components/ui/button";
// import { authClient } from "@/lib/auth-client";

// export default function Signin() {
//   const [loading, setLoading] = useState(false);

//   const signUp = useCallback(async () => {
//     try {
//       setLoading(true);

//       await authClient.signUp.social({
//         provider: "google",
//         callbackURL: "/",
//       });

//       // usually you don't need router.push here
//       // OAuth will redirect automatically
//     } catch (err) {
//       console.error("Google sign-in failed:", err);
//       alert("Failed to sign in with Google");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return (
//     <div className="flex w-screen h-screen justify-center items-center">
//       <Button onClick={signIn} disabled={loading}>
//         {loading ? "Signing in..." : "Sign in with Google"}
//       </Button>
//     </div>
//   );
// }
