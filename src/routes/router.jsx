import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
const Services = lazy(() => import("../pages/Services/Services"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: (
          <Suspense fallback={"loading..."}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={"loading..."}>
            <Pricing />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
