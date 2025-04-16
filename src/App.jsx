import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import HomePage from "./UI/HomePage";
import Cart from "./features/cart/Cart";
import Shows, { loader as showLoder } from "./features/shows/Shows";
import AdminLogin from "./admin/AdminLogin";
import AdminModifyEvents from "./admin/AdminModifyEvents";
import AdminDeleteItems, {
  loader as adminDeleteLoader,
} from "./admin/AdminDeleteItems";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shows",
        element: <Shows />,
        loader: showLoder,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/modifyevent",
        element: <AdminModifyEvents />,
      },
      {
        path: "/deleteevent",
        element: <AdminDeleteItems />,
        loader: adminDeleteLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
