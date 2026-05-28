import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Bell, Shield, MapPin, Smartphone } from "lucide-react";

export default function Settings() {
  const { toast } = useToast();
  const [currencyToggle, setCurrencyToggle] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white tracking-wide">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and device configuration.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-sidebar border border-border mb-6">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary">Profile</TabsTrigger>
          <TabsTrigger value="device" className="data-[state=active]:bg-primary">Device</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-primary">Notifications</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-primary">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <User className="w-5 h-5 text-primary" /> Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">First Name</Label>
                    <Input defaultValue="John" className="bg-sidebar border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Last Name</Label>
                    <Input defaultValue="Doe" className="bg-sidebar border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Email Address</Label>
                  <Input type="email" defaultValue="john@example.com" className="bg-sidebar border-border" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Phone Number</Label>
                  <Input type="tel" defaultValue="+233 55 123 4567" className="bg-sidebar border-border" />
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Region & Currency
                  </h4>
                  <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
                    <div>
                      <p className="text-white font-medium">Display Currency</p>
                      <p className="text-sm text-muted-foreground">Toggle between NGN and GHS</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span className={!currencyToggle ? "text-primary" : "text-muted-foreground"}>NGN (₦)</span>
                      <Switch checked={currencyToggle} onCheckedChange={setCurrencyToggle} />
                      <span className={currencyToggle ? "text-primary" : "text-muted-foreground"}>GHS (GH₵)</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="bg-primary hover:bg-primary/90">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="device">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Smartphone className="w-5 h-5 text-primary" /> Device Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Device Name</Label>
                  <Input defaultValue="Main House Alpha" className="bg-sidebar border-border" />
                </div>
                
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-white">Alert Thresholds</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground text-xs">High Voltage Cutoff (V)</Label>
                      <Input type="number" defaultValue="250" className="bg-sidebar border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground text-xs">Low Voltage Cutoff (V)</Label>
                      <Input type="number" defaultValue="180" className="bg-sidebar border-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground text-xs">Monthly Budget Warning (Amount)</Label>
                    <Input type="number" defaultValue="45000" className="bg-sidebar border-border" />
                  </div>
                </div>

                <Button type="submit" className="bg-primary hover:bg-primary/90">Update Configuration</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Bell className="w-5 h-5 text-primary" /> Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Real-time alerts for voltage spikes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
                  <div>
                    <p className="text-white font-medium">Email Summaries</p>
                    <p className="text-sm text-muted-foreground">Weekly energy usage reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
                  <div>
                    <p className="text-white font-medium">SMS Alerts</p>
                    <p className="text-sm text-muted-foreground">Critical offline alerts</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-primary" /> Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Current Password</Label>
                  <Input type="password" placeholder="••••••••" className="bg-sidebar border-border" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">New Password</Label>
                  <Input type="password" placeholder="••••••••" className="bg-sidebar border-border" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Confirm New Password</Label>
                  <Input type="password" placeholder="••••••••" className="bg-sidebar border-border" />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Change Password</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
