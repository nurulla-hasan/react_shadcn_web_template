import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/main-layout";
import AuthLayout from "./layout/auth-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: 'about',
    //     element: <About />,
    //   },
    // ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    //   children: [
    //     {
    //       path: 'login',
    //       element: <Login />,
    //     },
    //     {
    //       path: 'signup',
    //       element: <Signup />,
    //     },
    //   ],
  },
]);
