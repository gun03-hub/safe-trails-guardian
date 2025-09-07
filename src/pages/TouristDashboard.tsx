import { User, Shield, Bell, MapPin, AlertTriangle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function TouristDashboard() {
  const safetyTips = [
    "Stay in well-lit areas during nighttime",
    "Keep emergency contacts readily available", 
    "Inform someone about your travel plans",
    "Carry identification at all times"
  ];

  const alerts = [
    { type: "info", message: "Welcome to SafeTrails! Your safety is our priority.", time: "now" },
    { type: "warning", message: "Weather alert: Heavy rain expected", time: "1h ago" },
    { type: "success", message: "You're in a verified safe zone", time: "2h ago" },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tourist Dashboard</h1>
              <p className="text-muted-foreground">Your safety companion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="animate-pulse-glow">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              Safe Zone
            </Badge>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Digital ID Card */}
          <Card className="lg:col-span-1 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Digital ID
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-primary p-6 rounded-lg text-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">John Doe</h3>
                <p className="text-white/80">Tourist ID: ST-2024-001247</p>
                <p className="text-white/80 text-sm mt-2">Valid until: Dec 2024</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nationality:</span>
                  <span className="font-medium">USA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="outline" className="text-xs">Verified</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergency Contact:</span>
                  <span className="font-medium">+1 555-0123</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency & Safety */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Emergency & Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Panic Button */}
              <div className="text-center mb-6">
                <Button 
                  size="lg" 
                  className="w-32 h-32 rounded-full bg-destructive hover:bg-destructive/90 text-white shadow-elevated animate-pulse-glow"
                >
                  <div className="text-center">
                    <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-bold">PANIC</span>
                  </div>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Press for immediate emergency assistance
                </p>
              </div>

              {/* Emergency Contacts */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex-col">
                  <Phone className="w-5 h-5 mb-1" />
                  <span className="text-xs">Emergency: 911</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Shield className="w-5 h-5 mb-1" />
                  <span className="text-xs">Tourist Police</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <MapPin className="w-5 h-5 mb-1" />
                  <span className="text-xs">Share Location</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Bell className="w-5 h-5 mb-1" />
                  <span className="text-xs">Alert Contacts</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Safety Tips */}
          <Card className="lg:col-span-1 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Safety Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Tips
              </Button>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${
                      alert.type === 'success' ? 'bg-success' :
                      alert.type === 'warning' ? 'bg-warning' : 'bg-primary'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {alert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Status */}
        <Card className="mt-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm font-medium">Safe Zone</p>
                <p className="text-xs text-muted-foreground">Downtown Area</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-xs text-muted-foreground">City Center</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Bell className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm font-medium">Notifications</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Phone className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm font-medium">Emergency</p>
                <p className="text-xs text-muted-foreground">Ready</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}