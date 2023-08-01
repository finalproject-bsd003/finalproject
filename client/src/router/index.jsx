import HomePage from "../views/HomePage";
// import DetailPage from "../views/DetailPage";
import Layout from "../components/Layout";

import { createBrowserRouter, redirect, useLocation } from "react-router-dom";
import DetailPage from "../views/DetailPage";
import LoginForm from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import ListProduct from "../views/ListProduct";
import ListStores from "../views/ListStores";
import ListTransactions from "../views/ListTransactions";
import AddDressPage from "../views/AddDressPage";
import EditDressPage from "../views/EditDressPage";
import StoreDetail from "../views/StoreDetail";
import PaymentPage from "../views/PaymentPage";
import PaymentSuccess from "../views/PaymentSuccessPage";
import PaymentCancelPending from "../views/PaymentCancelPending";
import ListCategory from "../views/ListCategories";
import AddCategory from "../views/AddCategoryPage";
import FavoritePage from "../views/FavoritePage";
import { useEffect } from "react";

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
        path: "liststore",
        element: <ListStores />,
      },
      {
        path: "detail-store/:id",
        element: <StoreDetail />,
      },
      {
        path: "listdress",
        element: <ListProduct />,
      },
      {
        path: "transaction",
        element: <ListTransactions />,
      },
      {
        path: "add-dress",
        element: <AddDressPage />,
      },
      {
        path: "edit-dress/:id",
        element: <EditDressPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "categories",
        element: <ListCategory />,
      },
      {
        path: "categories/:id",
        element: <ListCategory />,
      },
      {
        path: "add-categories",
        element: <AddCategory />,
      },
      {
        path: "favorite",
        element: <FavoritePage />,
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
  {
    path: "/thank-you-page",
    element: <PaymentSuccess />,
  },
  {
    path: "/failed-page",
    element: <PaymentCancelPending />,
  },
]);

export default router;
