import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Phone, MapPin, Clock, Camera, Wifi, Users, Heart, Navigation } from "lucide-react";

const SafetyTips = () => {
  const safetyCategories = [
    {
      icon: Shield,
      title: "Personal Safety",
      color: "success",
      tips: [
        "Always carry your digital ID and emergency contacts",
        "Stay in well-lit, populated areas, especially at night",
        "Trust your instincts - if something feels wrong, leave",
        "Keep your belongings secure and avoid displaying valuables",
        "Share your location with trusted contacts regularly"
      ]
    },
    {
      icon: MapPin,
      title: "Location Awareness",
      color: "primary",
      tips: [
        "Familiarize yourself with safe zones and restricted areas",
        "Use official tourist maps and recommended routes",
        "Stay within designated tourist areas when possible",
        "Know the locations of nearby police stations and hospitals",
        "Avoid isolated or poorly marked areas"
      ]
    },
    {
      icon: Phone,
      title: "Emergency Preparedness",
      color: "destructive",
      tips: [
        "Save emergency numbers: Police (100), Medical (108), Fire (101)",
        "Know how to use the panic button in the app",
        "Keep your phone charged and carry a power bank",
        "Learn basic local phrases for emergencies",
        "Register with your embassy or consulate"
      ]
    },
    {
      icon: Users,
      title: "Social Safety",
      color: "warning",
      tips: [
        "Travel in groups when possible, especially at night",
        "Be cautious when approached by strangers offering help",
        "Don't accept drinks or food from unknown people",
        "Inform someone about your plans and expected return time",
        "Use reputable tour guides and transportation services"
      ]
    }
  ];

  const quickTips = [
    { icon: Camera, text: "Take photos of important documents", priority: "high" },
    { icon: Wifi, text: "Connect to secure WiFi networks only", priority: "medium" },
    { icon: Clock, text: "Check in regularly with family/friends", priority: "high" },
    { icon: Navigation, text: "Use GPS tracking and share location", priority: "high" },
    { icon: Heart, text: "Carry any required medications", priority: "medium" },
  ];

  const emergencyContacts = [
    { service: "Police", number: "100", description: "For crime, theft, or security issues" },
    { service: "Medical Emergency", number: "108", description: "For medical emergencies and ambulance" },
    { service: "Fire Brigade", number: "101", description: "For fire emergencies" },
    { service: "Tourist Helpline", number: "1363", description: "24/7 tourist assistance" },
    { service: "Women Helpline", number: "181", description: "For women in distress" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "success": return "text-success";
      case "primary": return "text-primary";
      case "destructive": return "text-destructive";
      case "warning": return "text-warning";
      default: return "text-primary";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Safety Tips & Guidelines</h1>
          <p className="text-muted-foreground">Essential safety information for tourists</p>
        </div>
        <Button>
          <Phone className="w-4 h-4 mr-2" />
          Emergency Contacts
        </Button>
      </div>

      {/* Quick Safety Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Quick Safety Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <tip.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{tip.text}</span>
                <Badge variant={tip.priority === "high" ? "destructive" : "outline"} className="ml-auto">
                  {tip.priority}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {safetyCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className={`w-5 h-5 ${getColorClasses(category.color)}`} />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-current ${getColorClasses(category.color)}`}></div>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-destructive" />
            Emergency Contact Numbers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{contact.service}</h3>
                  <Badge variant="outline" className="font-mono text-lg">
                    {contact.number}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
                <Button size="sm" className="mt-3 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Safety Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Before Going Out</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Check weather and local advisories</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Inform someone of your plans</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Charge phone and carry power bank</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Carry digital ID and emergency contacts</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">While Exploring</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Stay in designated safe zones</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Regular check-ins via app</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Avoid displaying valuables</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Use reputable transportation</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyTips;