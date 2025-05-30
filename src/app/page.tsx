import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Next.js Boilerplate
        </h1>
        <p className="text-center mb-8">
          This is a clean starter template with Next.js, Tailwind CSS, and TypeScript
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="default">
            Get Started
          </Button>
          <Button variant="outline">
            Documentation
          </Button>
        </div>
      </div>
    </main>
  );
}
