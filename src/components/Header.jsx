import React from "react";
import logo from "../assets/icons/logo-white.svg";
import search from "../assets/icons/search-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { title: "News", path: "news" },
  { title: "Business", path: "business" },
  { title: "Sport", path: "sport" },
  { title: "Life", path: "life" },
  { title: "Tech", path: "tech" },
  { title: "Travel", path: "travel" },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (e) => {
    setActiveCategory(e.target.id);
  };

  return (
    <div>
      <div className="upper-header-row">
        <div className="wrapper">
          <div className="inner-wrapper">
            <Link to="/">
              <div className="logo-wrapper">
                <div className="logo-background">
                  <img src={logo} alt="logo" className="logo" />
                </div>
                <h2>Kenaz</h2>
              </div>
            </Link>

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
                <Link to={`/${category.path}`} key={category.path}>
                  <li
                    className={
                      category.title == activeCategory
                        ? `active-category-${index + 1}`
                        : `category-${index + 1}`
                    }
                    onClick={handleCategoryClick}
                    id={category.title}
                  >
                    {category.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
