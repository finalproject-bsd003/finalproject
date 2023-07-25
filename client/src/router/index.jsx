import HomePage from "../views/HomePage";
// import DetailPage from "../views/DetailPage";
import Layout from "../components/Layout";

import { createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
