import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center p-10">
      <div className="self-end">
        <ModeToggle />
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
        <h1 className="font-bold text-5xl tracking-tighter">
          Bienvenue à la page de connexion
        </h1>
          <Button>
            <Link href="/login">
              Login
            </Link>
          </Button>
      </div>
    </main>
  );
}
