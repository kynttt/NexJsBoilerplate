import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">
            Sign up for a new account to get started
          </p>
        </div>
        <div className="bg-card rounded-lg shadow p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <Button className="w-full">Create Account</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <a href="/auth/signin" className="text-primary hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 