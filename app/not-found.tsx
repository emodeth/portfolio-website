import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuFileX2 } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center h-[calc(100vh-12rem)]">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-muted/30">
        <LuFileX2 className="w-8 h-8 text-muted-foreground" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 ">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button asChild variant="secondary" className="rounded-xl px-6">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
