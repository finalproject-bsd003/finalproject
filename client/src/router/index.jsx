import HomePage from "../views/HomePage";
// import DetailPage from "../views/DetailPage";
import Layout from "../components/Layout";

import { createBrowserRouter, redirect } from "react-router-dom";
import DetailPage from "../views/DetailPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      }
    ],
  },
]);

export default router;
