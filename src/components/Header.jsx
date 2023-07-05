import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/icons/logo-white.svg";
import search from "../assets/icons/search-icon.svg";
import { useState } from "react";

const categories = [
  { title: "News" },
  { title: "Business" },
  { title: "Sport" },
  { title: "Life" },
  { title: "Tech" },
  { title: "Travel" },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState("News");

  return (
    <>
      <div className="upper-header-row">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="logo-wrapper">
              <div className="logo-background">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <h2>Kenaz</h2>
            </div>

            <div className="search-nav">
              <ul>
                <li>Media</li>
                <li>Marketing</li>
                <li>Contact</li>
              </ul>
              <div className="search-background">
                <img src={search} alt="search" className="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-header-row">
        <div className="wrapper">
          <div className="categories-wrapper">
            <ul>
              {categories.map((category, index) => (
                <li
                  key={category.title}
                  className={
                    category.title == activeCategory
                      ? `active-category-${index + 1}`
                      : `category-${index + 1}`
                  }
                  onClick={() => setActiveCategory(category.title)}
                >
                  {category.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
