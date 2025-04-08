import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Upsell from "./components/Upsell";
import IndexMv from "./pages/indexMv";
import routesData from '../routes.json';

const queryClient = new QueryClient();
const routeComponents = { Index, Upsell, IndexMv };

const App = () => (

  <QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
    <Routes>
      {routesData.routes.map((route, index) => {
        const Component = routeComponents[route.element];
        return <Route key={index} path={route.path} element={<Component />} />;
      })}
    </Routes>
    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>
);

export default App;
