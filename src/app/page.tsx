import { ModeToggle } from "@/components/toggle-mode";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center p-10">
      <div className="self-end">
        <ModeToggle />
      </div>
    </main>
  );
}
