import Shop from "./components/Shop";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./utils/context/CartContext";

const MainLayout = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/product/:productID",
        element: <ProductDetail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
