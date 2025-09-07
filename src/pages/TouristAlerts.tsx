import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Shield, MapPin, Clock, CheckCircle, X } from "lucide-react";

const TouristAlerts = () => {
  const alerts = [
    {
      id: "TA-001",
      type: "Weather Alert",
      title: "Heavy Rain Expected",
      message: "Heavy rainfall expected in your area. Avoid outdoor activities and stay in safe locations.",
      severity: "Medium",
      location: "New Delhi",
      timestamp: "5 minutes ago",
      status: "Active",
      actionRequired: false,
    },
    {
      id: "TA-002", 
      type: "Safety Alert",
      title: "Crowded Area Warning",
      message: "High crowd density detected at India Gate. Consider visiting alternative locations.",
      severity: "Low",
      location: "India Gate",
      timestamp: "12 minutes ago",
      status: "Active",
      actionRequired: false,
    },
    {
      id: "TA-003",
      type: "Security Alert",
      title: "Area Temporarily Restricted",
      message: "The area near Red Fort is temporarily restricted due to a security exercise. Please avoid this zone.",
      severity: "High",
      location: "Red Fort Area",
      timestamp: "25 minutes ago",
      status: "Active",
      actionRequired: true,
    },
    {
      id: "TA-004",
      type: "Health Alert",
      title: "Health Advisory",
      message: "Air quality is poor today. Sensitive individuals should limit outdoor exposure.",
      severity: "Medium",
      location: "Central Delhi",
      timestamp: "1 hour ago",
      status: "Acknowledged",
      actionRequired: false,
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  const getSeverityIcon = (type: string) => {
    switch (type) {
      case "Security Alert": return AlertTriangle;
      case "Safety Alert": return Shield;
      case "Weather Alert": return MapPin;
      case "Health Alert": return Bell;
      default: return Bell;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Safety Alerts</h1>
          <p className="text-muted-foreground">Real-time safety alerts and notifications for your area</p>
        </div>
        <Button>
          <Bell className="w-4 h-4 mr-2" />
          Alert Settings
        </Button>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Active Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Action Required</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Resolved Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">Safe</p>
                <p className="text-sm text-muted-foreground">Current Status</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => {
              const IconComponent = getSeverityIcon(alert.type);
              return (
                <div key={alert.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 flex-1">
                      <div className="p-2 bg-muted rounded-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{alert.title}</h3>
                          <Badge variant={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                          <Badge variant="outline">{alert.type}</Badge>
                          {alert.actionRequired && (
                            <Badge variant="destructive">Action Required</Badge>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {alert.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {alert.timestamp}
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Status: {alert.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      {alert.status === "Active" && (
                        <>
                          <Button size="sm" variant="outline">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Acknowledge
                          </Button>
                          {alert.actionRequired && (
                            <Button size="sm">
                              Take Action
                            </Button>
                          )}
                        </>
                      )}
                      <Button size="sm" variant="outline">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Alert Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Alert Types</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Security Alerts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Weather Warnings</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Safety Notifications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Traffic Updates</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Health Advisories</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Notification Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Push Notifications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">SMS Alerts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Email Notifications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Emergency Contacts</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <Button>
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TouristAlerts;