import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Calendar, Filter, Search, Eye, Plus } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: "R-2024-001",
      title: "Tourist Safety Incident - Connaught Place",
      type: "Incident Report",
      date: "2024-01-15",
      status: "Completed",
      priority: "High",
      officer: "Inspector Raj Kumar",
      description: "Tourist panic alert response and resolution",
    },
    {
      id: "R-2024-002",
      title: "Daily Safety Summary",
      type: "Daily Report",
      date: "2024-01-15",
      status: "Completed",
      priority: "Medium",
      officer: "System Generated",
      description: "Automated daily safety statistics and alerts summary",
    },
    {
      id: "R-2024-003",
      title: "Geo-fence Violation Analysis",
      type: "Analysis Report",
      date: "2024-01-14",
      status: "Draft",
      priority: "Medium",
      officer: "Constable Priya Singh",
      description: "Analysis of unauthorized zone entries in past week",
    },
    {
      id: "R-2024-004",
      title: "Tourist Assistance Case - Red Fort",
      type: "E-FIR",
      date: "2024-01-14",
      status: "Under Review",
      priority: "High",
      officer: "Sub-Inspector Ahmed",
      description: "Lost tourist assistance and safe return documentation",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "outline";
      case "Draft": return "default";
      case "Under Review": return "default";
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
          <h1 className="text-3xl font-bold text-primary">Reports & E-FIR</h1>
          <p className="text-muted-foreground">Generate and manage incident reports and documentation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Total Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Calendar className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <FileText className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <FileText className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">E-FIR Filed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Report Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="incident">Incident Report</SelectItem>
                <SelectItem value="daily">Daily Report</SelectItem>
                <SelectItem value="analysis">Analysis Report</SelectItem>
                <SelectItem value="efir">E-FIR</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{report.title}</h3>
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge variant={getStatusColor(report.status)}>{report.status}</Badge>
                      <Badge variant={getPriorityColor(report.priority)}>{report.priority}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Report ID:</span> {report.id}
                      </div>
                      <div>
                        <span className="font-medium">Date:</span> {report.date}
                      </div>
                      <div>
                        <span className="font-medium">Officer:</span> {report.officer}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    {report.status === "Draft" && (
                      <Button size="sm">
                        Edit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* E-FIR Quick Access */}
      <Card>
        <CardHeader>
          <CardTitle>E-FIR Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span>New E-FIR</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Download className="w-6 h-6" />
              <span>Download Template</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Eye className="w-6 h-6" />
              <span>View Pending</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;