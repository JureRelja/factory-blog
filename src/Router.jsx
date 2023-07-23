import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import FullArticle from "./pages/FullArticle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/:category/:articleId",
        element: <FullArticle />,
      },
    ],
  },
]);

export default router;
