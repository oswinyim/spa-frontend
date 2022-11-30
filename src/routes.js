import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Guest from "./pages/guest";
import Service from "./pages/service";
import Staff from "./pages/staff";
import NotFound from "./pages/not-found";
import ProtectedRoute from "./components/UI/ProtectedRoute";
import Logout from "./pages/logout";
import ServiceCreate from "./pages/guest-create";
import GuestCreate from "./pages/guest-create";
import StaffCreate from "./pages/staff-create";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "service",
      element: (
        <ProtectedRoute>
          <Service />
        </ProtectedRoute>
      ),
    },
    {
      path: "service/create",
      element: (
        <ProtectedRoute>
          <ServiceCreate />
        </ProtectedRoute>
      ),
    },
    {
      path: "staff",
      element: (
        <ProtectedRoute>
          <Staff />
        </ProtectedRoute>
      ),
    },
    {
      path: "staff/create",
      element: (
        <ProtectedRoute>
          <StaffCreate />
        </ProtectedRoute>
      ),
    },
    {
      path: "guest",
      element: (
        <ProtectedRoute>
          <Guest />
        </ProtectedRoute>
      ),
    },
    {
      path: "guest/create",
      element: (
        <ProtectedRoute>
          <GuestCreate />
        </ProtectedRoute>
      ),
    },
    {
      path: "404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
