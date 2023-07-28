import HomePage from "../views/HomePage";
// import DetailPage from "../views/DetailPage";
import Layout from "../components/Layout";

import { createBrowserRouter, redirect } from "react-router-dom";
import DetailPage from "../views/DetailPage";
import LoginForm from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import ListProduct from "../views/ListProduct";
import ListStores from "../views/ListStores";
import ListTransactions from "../views/ListTransactions";

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
      },
      {
        path: "/liststore",
        element: <ListStores />,
      },
      {
        path: "/listdress",
        element: <ListProduct />,
      },

      {
        path: "/transaction",
        element: <ListTransactions />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
