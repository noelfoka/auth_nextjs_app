import { ModeToggle } from "@/components/toggle-mode";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center p-10">
      <div className="justify-self-start">
        <ModeToggle />
      </div>

      <div className="w-full h-full flex-col justify-center items-center space-y-6"></div>
    </main>
  );
}
