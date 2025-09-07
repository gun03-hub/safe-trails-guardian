import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Shield, AlertTriangle, Users, Navigation, Phone } from "lucide-react";
import Map from "@/components/Map";

const TouristMap = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Tourist Map</h1>
          <p className="text-muted-foreground">Real-time tourist tracking and safety monitoring</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Navigation className="w-4 h-4 mr-2" />
            Track Tourist
          </Button>
          <Button>
            <Phone className="w-4 h-4 mr-2" />
            Emergency Response
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Live Tourist Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Map height="h-[600px]" center={[77.2090, 28.6139]} zoom={12} />
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Active Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="destructive">Panic Alert</Badge>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <p className="text-sm">Tourist ID: T-4521</p>
                <p className="text-xs text-muted-foreground">Location: Connaught Place</p>
              </div>
              
              <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-warning text-warning-foreground">Geo-fence</Badge>
                  <span className="text-xs text-muted-foreground">5 min ago</span>
                </div>
                <p className="text-sm">Tourist ID: T-7832</p>
                <p className="text-xs text-muted-foreground">Entered restricted zone</p>
              </div>
            </CardContent>
          </Card>

          {/* Live Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                Live Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Active Tourists</span>
                <Badge className="bg-success text-success-foreground">1,247</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">In Safe Zones</span>
                <Badge className="bg-success text-success-foreground">1,201</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Alerts Today</span>
                <Badge variant="outline">18</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Response Time</span>
                <Badge className="bg-primary text-primary-foreground">3.2 min</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Safe Zones */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Safe Zones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">India Gate</span>
                <Badge className="bg-success text-success-foreground">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">Red Fort</span>
                <Badge className="bg-success text-success-foreground">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">Lotus Temple</span>
                <Badge className="bg-success text-success-foreground">Active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TouristMap;