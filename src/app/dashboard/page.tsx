import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            Welcome to your dashboard. Here you can manage your account and view your activity.
          </p>
          <Button>View Details</Button>
        </div>
        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
          <p className="text-muted-foreground mb-4">
            Track your progress and view important metrics.
          </p>
          <Button variant="outline">View Stats</Button>
        </div>
        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-muted-foreground mb-4">
            Stay up to date with your latest actions and updates.
          </p>
          <Button variant="outline">View Activity</Button>
        </div>
      </div>
    </div>
  );
} 