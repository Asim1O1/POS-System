import { createBrowserRouter } from "react-router";
import App from "@/App.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

export default routes;
