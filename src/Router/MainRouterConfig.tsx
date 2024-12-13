import { Home } from "Containers/Home";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
import { RouteObject } from "react-router";

export const MAIN_ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
