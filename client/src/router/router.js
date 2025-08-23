import { createBrowserRouter } from "react-router";
import App from "@/App.jsx";
import Login from "../pages/auth/Login";
import NotFound from "../pages/error/NotFound";
import PlanSelection from "../pages/auth/selectPlan";
import Home from "../pages/client/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "plan",
        Component: PlanSelection,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default routes;
