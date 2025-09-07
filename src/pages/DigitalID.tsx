import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QrCode, Download, Edit, Shield, MapPin, Clock, Phone, Mail, CreditCard } from "lucide-react";

const DigitalID = () => {
  const touristData = {
    id: "T-4521",
    name: "Sarah Johnson",
    nationality: "United States",
    passport: "US123456789",
    email: "sarah.johnson@email.com",
    phone: "+1-555-0123",
    emergencyContact: "+1-555-9876",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-01-22",
    hotel: "The Imperial Hotel",
    status: "Active",
    lastSeen: "2 minutes ago",
    currentLocation: "Connaught Place",
    safetyScore: 98,
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Digital Tourist ID</h1>
          <p className="text-muted-foreground">Secure digital identity and travel documentation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download QR
          </Button>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main ID Card */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20 border-4 border-white/20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-primary text-xl">{touristData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{touristData.name}</h2>
                    <p className="text-primary-foreground/80">Tourist ID: {touristData.id}</p>
                    <p className="text-primary-foreground/80">{touristData.nationality}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-white/20 text-primary-foreground border-white/30">
                    {touristData.status}
                  </Badge>
                  <div className="mt-2 p-4 bg-white rounded-lg">
                    <QrCode className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Travel Details
                  </h3>
                  <div className="space-y-2 text-sm text-primary-foreground/90">
                    <div>
                      <span className="block font-medium">Passport:</span>
                      {touristData.passport}
                    </div>
                    <div>
                      <span className="block font-medium">Check-in:</span>
                      {touristData.checkInDate}
                    </div>
                    <div>
                      <span className="block font-medium">Check-out:</span>
                      {touristData.checkOutDate}
                    </div>
                    <div>
                      <span className="block font-medium">Hotel:</span>
                      {touristData.hotel}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-sm text-primary-foreground/90">
                    <div>
                      <span className="block font-medium">Email:</span>
                      {touristData.email}
                    </div>
                    <div>
                      <span className="block font-medium">Phone:</span>
                      {touristData.phone}
                    </div>
                    <div>
                      <span className="block font-medium">Emergency:</span>
                      {touristData.emergencyContact}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Safety Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Safety Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">{touristData.safetyScore}%</div>
                <p className="text-sm text-muted-foreground">Excellent Safety Rating</p>
                <div className="mt-4 bg-muted rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-300"
                    style={{ width: `${touristData.safetyScore}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Location:</span>
                <span className="text-sm font-medium">{touristData.currentLocation}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Last Seen:</span>
                <span className="text-sm font-medium">{touristData.lastSeen}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Zone Status:</span>
                <Badge className="bg-success text-success-foreground">Safe Zone</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <QrCode className="w-4 h-4 mr-2" />
                Show QR Code
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download ID
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Shield className="w-4 h-4 mr-2" />
                Safety Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Blockchain Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Blockchain Verification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Identity Hash</h3>
              <p className="text-xs font-mono bg-background p-2 rounded break-all">
                0x1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Block Number</h3>
              <p className="text-2xl font-bold text-primary">#2,847,391</p>
              <p className="text-sm text-muted-foreground">Confirmed</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Verification Status</h3>
              <Badge className="bg-success text-success-foreground">Verified</Badge>
              <p className="text-sm text-muted-foreground mt-1">Cross-border ready</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalID;