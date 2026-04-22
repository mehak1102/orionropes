

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductIndustryDetail from "./pages/ProductIndustryDetail";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import Applications from "./pages/admin/Applications";
import ProductConstructionDetail from "./pages/ProductConstructionDetail";
import ScrollToTop from "./components/ScrollToTop";



import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
// import AdminProducts from "./pages/admin/Products";
import Enquiries from "./pages/admin/Enquiries";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Contacts from "./pages/admin/Contacts";

// import ProductIndustryDetail from "./pages/ProductIndustryDetail";

function AdminRedirect() {
  const token = localStorage.getItem("adminToken");
  return <Navigate to={token ? "/admin/dashboard" : "/admin/login"} replace />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} /> */}
           {/* <Route path="/products/:slug" element={<ProductIndustryDetail />} /> */}
        {/* <Route path="/products/:slug" element={<ProductDetail />} /> */}
{/* <Route path="/products/:slug/:productSlug" element={<ProductConstructionDetail />} /> */}

<Route path="/products" element={<Products />} />
<Route path="/products/:slug/:productSlug" element={<ProductConstructionDetail />} />
<Route path="/products/:slug" element={<ProductIndustryDetail />} />



        <Route path="/clients" element={<Clients />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<AdminRedirect />} />
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/admin/enquiries"
          element={
            <ProtectedRoute>
              <Enquiries />
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin/applications"
  element={
    <ProtectedRoute>
      <Applications />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/contacts"
  element={
    <ProtectedRoute>
      <Contacts />
    </ProtectedRoute>
  }
/>

<Route
  path="/products/:slug/:productSlug"
  element={<ProductConstructionDetail />}
/>
      </Routes>
    </BrowserRouter>
  );
}