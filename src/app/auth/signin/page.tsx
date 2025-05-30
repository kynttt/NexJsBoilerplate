import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <div className="bg-card rounded-lg shadow p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Button className="w-full">Sign In</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <a href="/auth/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 