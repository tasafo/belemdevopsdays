
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import SpeakerDetail from "./pages/SpeakerDetail";
import Sponsors from "./pages/Sponsors";
import CodeOfConduct from "./pages/CodeOfConduct";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import SponsorsSection from "./components/SponsorsSection";
import CallToAction from "./components/CallToAction";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programa" element={<Program />} />
            <Route path="/palestrantes" element={<Speakers />} />
            <Route path="/palestrantes/:id" element={<SpeakerDetail />} />
            <Route path="/patrocinio" element={<Sponsors />} />
            <Route path="/codigo-de-conduta" element={<CodeOfConduct />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SponsorsSection />
          <CallToAction />
          <Footer />
          <ScrollReveal />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
