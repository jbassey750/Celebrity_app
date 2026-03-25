import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./component/UserAuth/Login";
import Register from "./component/UserAuth/Register";
import Dashboard from "./component/Pages/Dashboard";
import Booking from "./component/Pages/Booking";
import Profile from "./component/Pages/Profile";
import BrowseCelebrities from "./component/Pages/BrowseCelebrities";
import CheckoutPage from "./component/Pages/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<BrowseCelebrities />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;