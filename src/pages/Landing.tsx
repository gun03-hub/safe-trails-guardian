import { Shield, MapPin, Bell, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">SafeTrails</h1>
          <p className="text-sm text-white/80">Smart Tourist Safety</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/admin">
          <Button className="bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60">
  Admin Login
</Button>
        </Link>
        <Link to="/tourist">
          <Button className="bg-white text-black hover:bg-white/90">
            Tourist Portal
          </Button>
        </Link>
      </div>
    </div>
  </div>
</nav>

{/* Hero Section */}
<section
  className="relative h-screen overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/hero1.jpg')" }}
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
  <div className="container mx-auto px-6 relative z-10 pt-32">
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8">
        <Shield className="w-4 h-4 text-blue-300" />
        <span className="text-sm font-medium text-blue-400">
          Smart Tourist Safety Monitoring
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
        Keep Tourists
        <span className="block bg-gradient-primary bg-clip-text text-transparent">
          Safe & Secure
        </span>
      </h1>

      <p className="text-xl text-white mb-8 animate-fade-in">
        Advanced AI-powered monitoring system with real-time tracking, panic
        alerts, and instant incident response for tourist safety worldwide.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
        <Link to="/admin">
          <Button size="lg" className="w-full sm:w-auto">
            Admin Dashboard
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <Link to="/tourist">
          <Button className="bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60">
  Tourist Portal
</Button>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How SafeTrails Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive safety ecosystem protecting tourists through technology and real-time monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor tourist locations with GPS tracking and geofencing for instant alerts when entering unsafe areas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Panic Alerts</h3>
                <p className="text-muted-foreground">
                  One-touch emergency button for tourists with instant notification to authorities and emergency contacts.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Monitoring</h3>
                <p className="text-muted-foreground">
                  Advanced anomaly detection identifies unusual patterns and potential safety threats automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
                <p className="text-muted-foreground">
                  Automated incident reporting and coordination with local authorities for rapid emergency response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">
          Why Choose SafeTrails?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          The most comprehensive tourist safety platform with cutting-edge technology and proven results.
        </p>

        <div className="space-y-4">
          {[
            "Blockchain-secured digital tourist IDs",
            "Cross-border verifiable credentials",
            "Real-time anomaly detection with AI",
            "Instant notifications and alerts",
            "Automated incident reporting",
            "24/7 monitoring and support",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-96 bg-gradient-secondary rounded-2xl flex items-center justify-center">
          <div
            className="relative w-full h-96 rounded-2xl flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/dashboard.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-2xl"></div>
            {/* overlay */}
            <div className="text-center relative z-10">
              <Shield className="w-24 h-24 text-primary mx-auto mb-4 animate-float" />
              <p className="text-lg font-semibold text-primary">SafeTrails Dashboard</p>
              <p className="text-white">Real-time monitoring interface</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     <section
  className="bg-cover bg-center relative"
  style={{ backgroundImage: "url('/hero.jpg')" }}
>
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

  {/* CTA */}
  <div className="container mx-auto px-6 text-center relative z-10 py-16">
    <h2 className="text-4xl font-bold text-white mb-4">
      Ready to Enhance Tourist Safety?
    </h2>
    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
      Join the future of tourist safety monitoring with SafeTrails advanced technology platform.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/admin">
        <Button size="lg" variant="secondary" className="w-full sm:w-auto">
          Start Monitoring
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
      <Button
        size="lg"
        variant="outline"
        className="w-full sm:w-auto border border-white bg-transparent text-white"
      >
        Learn More
      </Button>
    </div>
  </div>

  {/* Footer */}
  <footer className="py-8 relative z-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-white">SafeTrails</span>
        </div>
        <p className="text-white/80 text-center md:text-right">
          © 2025 SafeTrails. Keeping tourists safe worldwide.
        </p>
      </div>
    </div>
  </footer>
</section>
    </div>
  );
}