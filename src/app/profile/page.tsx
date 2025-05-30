import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Profile</h1>
        <div className="bg-card rounded-lg shadow p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Bio</h3>
              <p className="text-muted-foreground">
                Software developer with a passion for building great user experiences.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Member Since</h3>
              <p className="text-muted-foreground">January 2024</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button>Edit Profile</Button>
          <Button variant="outline">Change Password</Button>
        </div>
      </div>
    </div>
  );
} 