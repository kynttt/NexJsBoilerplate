import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Settings</h1>
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Email Notifications</h3>
                <p className="text-muted-foreground mb-2">
                  Manage your email notification preferences.
                </p>
                <Button variant="outline">Configure</Button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Privacy</h3>
                <p className="text-muted-foreground mb-2">
                  Control your privacy settings and data sharing preferences.
                </p>
                <Button variant="outline">Manage Privacy</Button>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Theme</h3>
                <p className="text-muted-foreground mb-2">
                  Choose between light and dark mode.
                </p>
                <Button variant="outline">Change Theme</Button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Language</h3>
                <p className="text-muted-foreground mb-2">
                  Select your preferred language.
                </p>
                <Button variant="outline">Change Language</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 