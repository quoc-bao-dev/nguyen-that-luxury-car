import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AutoScrollToTop from "./components/features/AutoScrollToTop";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Search = lazy(() => import("./pages/Search"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Admin imports (lazy)
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminPosts = lazy(() => import("./pages/admin/Posts"));
const PostEditor = lazy(() => import("./pages/admin/PostEditor"));
const AdminAppointments = lazy(() => import("./pages/admin/Appointments"));
const ProtectedRoute = lazy(() => import("./components/admin/ProtectedRoute"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AutoScrollToTop />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search" element={<Search />} />

              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/posts"
                element={
                  <ProtectedRoute>
                    <AdminPosts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/posts/new"
                element={
                  <ProtectedRoute>
                    <PostEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/appointments"
                element={
                  <ProtectedRoute>
                    <AdminAppointments />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
