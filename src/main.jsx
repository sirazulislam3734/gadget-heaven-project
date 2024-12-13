import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "../src/components/Home"
import Statistics from "../src/components/Statistics"
import Dashboard from "../src/components/Dashboard"
import App from "../src/App"
import ViewProductDetails from "../src/components/ViewProductDetails/ViewProductDetails"
import { createBrowserRouter,Navigate,RouterProvider,} from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { HelmetProvider } from "react-helmet-async";
import DashboardCard from "./components/DashboardCard";
import DashboardWish from "./components/DashboardWish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/All%20Products"}></Navigate>
      },
      {
        path: "/",
        element: <Home></Home>,
        loader:async () => {
          const catgoryData = await fetch('../categories.json')
          const categorys = await catgoryData.json()
          const productData = await fetch('../allProducts.json')
          const products = await productData.json();
          return {categorys, products}
        },
        children: [
          {
            path: "/category/:category",
            element: <AllProducts />,
            loader: () => fetch('allProducts.json'),
          },
        ]
      },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
    loader: () => fetch('../public/allProducts.json'),
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    
  },
  {
    path: "/show/:id",
    element: <ViewProductDetails></ViewProductDetails>,
    loader:async ({params}) => {
      const res = await fetch("../allProducts.json")
      const data = await res.json()
      const newData = data.find(product => product.product_id === params.id);
      return newData;
    }
  },
],},
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
