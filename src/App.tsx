import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { Layout } from "./components/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import TouristDashboard from "./pages/TouristDashboard";
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
            <Route path="map" element={<div className="p-6">Map View - Coming Soon</div>} />
            <Route path="alerts" element={<div className="p-6">Alerts Management - Coming Soon</div>} />
            <Route path="reports" element={<div className="p-6">Reports - Coming Soon</div>} />
          </Route>
          <Route path="/tourist" element={<Layout />}>
            <Route index element={<TouristDashboard />} />
            <Route path="id" element={<div className="p-6">Digital ID - Coming Soon</div>} />
            <Route path="safety" element={<div className="p-6">Safety Tips - Coming Soon</div>} />
            <Route path="alerts" element={<div className="p-6">Tourist Alerts - Coming Soon</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
