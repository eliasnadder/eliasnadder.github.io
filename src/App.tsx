import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import Projects from "./pages/Projects";
import GithubProjects from "./pages/GithubProjects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import StatusBar from "./components/StatusBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/github" element={<GithubProjects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <StatusBar/>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
