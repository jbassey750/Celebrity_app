import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../component/widget/Nav";
// import Header from "../component/widget/Header";

function Layout() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // 🔥 Protect routes
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 🔥 TOP NAVBAR */}
      <Nav />
      {/* PAGE CONTENT */}
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;