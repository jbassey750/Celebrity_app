// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout"; 

// Components...
import Login from "./component/UserAuth/Login";
import OtpVerificationPage from "./component/Pages/VerifyOPT"
import Register from "./component/UserAuth/Register";
import Dashboard from "./component/Pages/Dashboard";
import Booking from "./component/Pages/Booking";
import Profile from "./component/Pages/Profile";
import BrowseCelebrities from "./component/Pages/BrowseCelebrities";
import CheckoutPage from "./component/Pages/CheckoutPage";

import AdminDashboard from "./component/Pages/Admin/AdminDashboard";
import AdminCreateUser from "./component/Pages/Admin/AdminCreateUser"; 
import AdminCreateCeleb from "./component/Pages/Admin/AdminCreateCeleb" 
import AdminLogin from "./component/Pages/Admin/adminlogin"
import AdminSignup from "./component/Pages/Admin/AdminSignup"
import ChatPage from "./component/Pages/Messages";
import MembershipLevels from "./component/Pages/MembershipLevels"
import PaymentPage from "./component/Pages/PaymentPage"


function App() {
  return (
    <Router>
      <Routes>
        {/* 1. The Root Route is now Login */}
        <Route path="/" element={<Login />} />
        
        {/* 2. Authentication Routes */}
        <Route path="/auth/signup" element={<Register />} />
        {/* We keep this so existing links don't break, but it redirects to root */}
        <Route path="/auth/login" element={<Navigate to="/" replace />} />
        <Route path="/auth/verify-otp" element={<OtpVerificationPage />} />

        {/* 3. Protected Fan Routes (Inside Layout) */}
        {/* We change the parent path to /user or similar to avoid conflict with / */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* This is now at /app */}
          <Route path="book" element={<Booking />} />
          <Route path="profile" element={<Profile />} />
          <Route path="browse" element={<BrowseCelebrities />} />
          <Route path="checkout" element={<MembershipLevels />} />
         <Route path="payment/:celebrityId" element={<PaymentPage />} />
        </Route>

        {/* 4. Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="create-user" element={<AdminCreateUser />} />
          <Route path="create-celeb" element={<AdminCreateCeleb />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="signup" element={<AdminSignup />} />
          {/* <Route path="messages" element={<ChatPage />} /> */}
        </Route>

        {/* Catch-all: Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;