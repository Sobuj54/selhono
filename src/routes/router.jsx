import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Spinner from "../components/Spinner/Spinner";
const Services = lazy(() => import("../pages/Services/Services"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing"));
const Project = lazy(() => import("../pages/Project/Project"));
const ProjectDetails = lazy(() =>
  import("../pages/ProjectDetails/ProjectDetails")
);

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
          <Suspense fallback={<Spinner />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={<Spinner />}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "project",
        element: (
          <Suspense fallback={<Spinner />}>
            <Project />
          </Suspense>
        ),
      },
      {
        path: "project-details/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProjectDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
