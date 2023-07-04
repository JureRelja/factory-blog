import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
