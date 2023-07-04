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

function index() {
  const [activeCategory, setActiveCategory] = useState("News");

  return (
    <Container fluid>
      <Row className="upper-header-row">
        <div className="wrapper">
          <div className="column-wrapper">
            <Col>
              <div className="logo-wrapper">
                <div className="logo-background">
                  <img src={logo} alt="logo" className="logo" />
                </div>
                <h2 className="logo-title">Kenaz</h2>
              </div>
            </Col>
            <Col>
              <div className="nav-search-wrapper">
                <ul>
                  <li>Media</li>
                  <li>Marketing</li>
                  <li>Contact</li>
                </ul>
                <div className="search-background">
                  <img src={search} alt="search" className="search" />
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Row>
      <Row className="lower-header-row">
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
      </Row>
    </Container>
  );
}

export default index;
