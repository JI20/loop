import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Navigation } from "../navigation/Navigation";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet />
          <Navigation />
        </>
      ),
      errorElement: <h1>Error!</h1>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/explore",
          element: <h1>Explore!</h1>,
          children: [],
        },
        {
          path: "/friends",
          element: <h1>Friends</h1>,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
