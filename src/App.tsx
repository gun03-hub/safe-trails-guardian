import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { Layout } from "./components/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import TouristDashboard from "./pages/TouristDashboard";
import TouristMap from "./pages/TouristMap";
import AlertsManagement from "./pages/AlertsManagement";
import Reports from "./pages/Reports";
import DigitalID from "./pages/DigitalID";
import SafetyTips from "./pages/SafetyTips";
import TouristAlerts from "./pages/TouristAlerts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="map" element={<TouristMap />} />
            <Route path="alerts" element={<AlertsManagement />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="/tourist" element={<Layout />}>
            <Route index element={<TouristDashboard />} />
            <Route path="id" element={<DigitalID />} />
            <Route path="safety" element={<SafetyTips />} />
            <Route path="alerts" element={<TouristAlerts />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
