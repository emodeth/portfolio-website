"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Loader2 } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  const { data: session, isPending: isSessionPending } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session && !isSessionPending) {
      router.push("/dashboard");
    }
  }, [session, isSessionPending, router]);

  if (session || isSessionPending) {
    return (
      <MaxWidthWrapper className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </MaxWidthWrapper>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const res = await signIn.email({
      email,
      password,
      rememberMe,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
      setIsLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <MaxWidthWrapper className="min-h-screen flex items-center justify-center">
      <main className="flex justify-center flex-col mx-auto p-8 space-y-4 text-white border border-border rounded-md">
        <h1 className="text-2xl font-bold mb-2 text-left">Admin Login</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Please sign in to access the admin dashboard.
        </p>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="bg-neutral-900 border-neutral-700 mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              className="bg-neutral-900 border-neutral-700 mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="border-neutral-500 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Remember me
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </main>
    </MaxWidthWrapper>
  );
}
