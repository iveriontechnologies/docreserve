import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PublicLayout from "../layouts/PublicLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ServicePage from "../features/services/pages/ServicePage";
import BookingPage from "../features/booking/pages/BookingPage";
import ContactPage from "../features/contact/pages/ContactPage";
import AboutPage from "../features/about/pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicePage /> },
      { path: "book", element: <BookingPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router