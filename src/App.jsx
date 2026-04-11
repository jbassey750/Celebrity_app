import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout"; 

// Components...
import Login from "./component/UserAuth/Login";
import Register from "./component/UserAuth/Register";
import Dashboard from "./component/Pages/Dashboard";
import Booking from "./component/Pages/Booking";
import Profile from "./component/Pages/Profile";
import BrowseCelebrities from "./component/Pages/BrowseCelebrities";
import CheckoutPage from "./component/Pages/CheckoutPage";
import AdminDashboard from "./component/Pages/Admin/AdminDashboard";
import AdminCreateUser from "./component/Pages/Admin/AdminCreateUser"; 
import ChatPage from "./component/Pages/Messages";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Public Routes (No Navbar) */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />

        {/* 2. Fan Routes (Uses Fan Navbar inside Layout) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<BrowseCelebrities />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* <Route path="/messages" element={<ChatPage />} /> */}
        </Route>

        {/* 3. Admin Routes (Uses Custom Admin Navbar inside AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="create-user" element={<AdminCreateUser />} />
          {/* Add more admin specific routes here */}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;