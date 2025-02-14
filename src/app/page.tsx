import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Link href="/accounts">
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
