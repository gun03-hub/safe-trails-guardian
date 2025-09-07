import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Clock, Filter, Search, MessageSquare, CheckCircle, XCircle } from "lucide-react";

const AlertsManagement = () => {
  const alerts = [
    {
      id: "A-001",
      type: "Panic Alert",
      touristId: "T-4521",
      location: "Connaught Place",
      timestamp: "2 min ago",
      status: "Active",
      priority: "High",
      description: "Tourist pressed panic button",
    },
    {
      id: "A-002", 
      type: "Geo-fence Violation",
      touristId: "T-7832",
      location: "Restricted Zone Alpha",
      timestamp: "5 min ago",
      status: "Under Review",
      priority: "Medium",
      description: "Tourist entered unauthorized area",
    },
    {
      id: "A-003",
      type: "Anomaly Detection",
      touristId: "T-9124",
      location: "Chandni Chowk",
      timestamp: "12 min ago",
      status: "Resolved",
      priority: "Low",
      description: "Unusual movement pattern detected",
    },
    {
      id: "A-004",
      type: "Emergency Contact",
      touristId: "T-3456",
      location: "Janpath",
      timestamp: "18 min ago",
      status: "Active",
      priority: "High",
      description: "Tourist reported lost",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "destructive";
      case "Under Review": return "default";
      case "Resolved": return "outline";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "default"; 
      case "Low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Alerts Management</h1>
          <p className="text-muted-foreground">Monitor and respond to tourist safety alerts</p>
        </div>
        <Button>
          <MessageSquare className="w-4 h-4 mr-2" />
          Send Alert
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
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
                <p className="text-2xl font-bold">3.2</p>
                <p className="text-sm text-muted-foreground">Avg Response (min)</p>
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
                <p className="text-2xl font-bold">94</p>
                <p className="text-sm text-muted-foreground">Resolved Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <XCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">99.2%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search alerts..." className="pl-10" />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alerts List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{alert.type}</h3>
                      <Badge variant={getStatusColor(alert.status)}>{alert.status}</Badge>
                      <Badge variant={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Alert ID:</span> {alert.id}
                      </div>
                      <div>
                        <span className="font-medium">Tourist:</span> {alert.touristId}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {alert.location}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span> {alert.timestamp}
                      </div>
                    </div>
                    <p className="text-sm">{alert.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {alert.status === "Active" && (
                      <Button size="sm">
                        Respond
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsManagement;