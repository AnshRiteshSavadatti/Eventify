import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import HomePage from "./UI/HomePage";
import Cart from "./features/cart/Cart";
import Shows, { loader as showLoder } from "./features/shows/Shows";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
