import { createBrowserRouter } from "react-router";
import App from "@/App.jsx";
import Login from "../pages/auth/Login";
import NotFound from "../pages/error/NotFound";
import PlanSelection from "../pages/auth/selectPlan";
import Home from "../pages/client/Home";
import Dashboard from "../layout/Dashboard";
import Public from "../layout/Public";
import Support from "../pages/client/Support";
import Admin from "../pages/dashboard/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Public,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "support",
            Component: Support,
          },
          {
            path: "plan",
            Component: PlanSelection,
          },
        ],
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          {
            index: true,
            Component: Admin,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default routes;
