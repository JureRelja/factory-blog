import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer/Footer.jsx";
import LargeBanner from "./banners/LargeBanner.jsx";
import { ScrollRestoration } from "react-router-dom";
import { articles } from "../assets/dummy-posts";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loadComments } from "../store/commentsSlice.jsx";

function RootLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const allComments = useSelector((state) => state.comments);

  useEffect(() => {
    if (location.pathname === "/") {
      articles.forEach((article) => {
        dispatch(
          loadComments({ articleID: article.id, comments: article.comments })
        );
      });
    } else if (allComments.length === 0) {
      navigate("/");
    }
  }, [articles, location]);

  return (
    <div className="d-flex flex-column gap-4">
      <Header />
      <LargeBanner />
      <div className="wrapper">
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
