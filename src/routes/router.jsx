import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Spinner from "../components/Spinner/Spinner";
import PageNotFound from "../pages/404/PageNotFound";
const Services = lazy(() => import("../pages/Services/Services"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing"));
const Project = lazy(() => import("../pages/Project/Project"));
const ProjectDetails = lazy(() =>
  import("../pages/ProjectDetails/ProjectDetails")
);
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <PageNotFound />,
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
      {
        path: "blog",
        element: (
          <Suspense fallback={<Spinner />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "blog-details/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <BlogDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
