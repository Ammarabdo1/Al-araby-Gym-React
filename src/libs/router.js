import ServicePlans from "components/Prices/Plans/ServicePlans";
import Layout from "Layout";
import AboutUs from "pages/AboutUs";
import ContactUsPage from "pages/ContactUs";
import Home from "pages/Home";
import NotFoundPage from "pages/NotFoundPage";
import Prices from "pages/Prices";
import Projects from "pages/Projects";
import { createBrowserRouter as createBR } from "react-router-dom";

const router = createBR([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },

      {
        path: "/projects",
        element: <Projects />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/contact",
        element: <ContactUsPage />,
      },

      {
        path: "/prices",
        element: <Prices />,
        children: [
          {
            path: "",
            element: "",
          },
          {
            path: ":serviceName",
            element: <ServicePlans />,
          },
        ],
      },
    ],
  },
]);

export default router;
