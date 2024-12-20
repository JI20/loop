import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Navigation } from "../navigation/Navigation";
import Friends from "../../pages/friends/Friends";
import Register from "../../Register";
import { Event } from "../../pages/event/Event";
import { Explore } from "../../pages/explore/Explore";

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
          element: <Register />,
        },
        {
          path: "/map",
          element: <Home />,
        },
        {
          path: "/explore",
          element: <Explore />,
          children: [],
        },
        {
          path: "/friends",
          element: <Friends />,
          children: [],
        },
        {
          path: "/event",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>Events</h1> },
            { path: ":id", element: <Event /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
