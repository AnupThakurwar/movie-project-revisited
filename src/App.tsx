import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">
            Welcome to shadcn/ui + Vite!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Modern stack • Tailwind v4 • React 19 ready • TypeScript
          </p>
          <Button size="lg" className="w-full">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
