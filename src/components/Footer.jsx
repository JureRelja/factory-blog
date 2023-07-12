import React from "react";
import blueLogo from "../assets/icons/logo-blue.svg";
import rss from "../assets/icons/rss_v2.svg";
import facebook from "../assets/icons/facebook_v2.svg";
import twitter from "../assets/icons/twitter_v2.svg";
import dribble from "../assets/icons/dribble_v2.svg";
import linkedin from "../assets/icons/linkedin_v2.svg";
import youtube from "../assets/icons/youtube_v2.svg";
import skype from "../assets/icons/skype_v2.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { posts } from "../assets/dummy-posts";
import { Link } from "react-router-dom";

const dummy_tags = [
  "Design",
  "Branding",
  "Marketing",
  "Development",
  "Photography",
  "Strategy",
  "Research",
  "Web Design",
  "Web Development",
  "UI/UX",
  "SEO",
  "Social Media",
];

const featuredPosts = posts.slice(0, 3);
const randomPosts = posts.slice(3, 6);

function Footer() {
  return (
    <div>
      <div className="purple-bar">
        <div className="wrapper">
          <div className="inner-wrapper"></div>
        </div>
      </div>

      <Container fluid className="footer">
        <div className="wrapper">
          <Row>
            <Col className="flex-column-grid">
              <Link to="/">
                <div className="footer-logo-wrapper logo-header">
                  <img src={blueLogo} alt="logo" />
                  <h2>Kenaz</h2>
                </div>
              </Link>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              <div className="d-flex gap-1">
                <img src={rss} alt="rss" className="footer-icon" />
                <img src={facebook} alt="facebook" className="footer-icon" />
                <img src={twitter} alt="twitter" className="footer-icon" />
                <img src={dribble} alt="dribble" className="footer-icon" />
                <img src={linkedin} alt="linkedin" className="footer-icon" />
                <img src={youtube} alt="youtube" className="footer-icon" />
                <img src={skype} alt="skype" className="footer-icon" />
              </div>
            </Col>
            <Col className="flex-column-grid ">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                leo ante...
              </p>
              <div className="newsletter-input">
                <input type="text" placeholder="Your mail" />
                <button>Subscribe</button>
              </div>
            </Col>

            <Col className="flex-column-grid ">
              <h2>Tags Widget</h2>
              <div className="tag-btn-container">
                {dummy_tags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-btn ${tag == "Research" ? "active" : ""}`}
                    onClick={(e) => {
                      e.target.classList.toggle("active");
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col className="flex-column-grid">
              <h2>Featured</h2>
              <div className="featured-posts">
                {featuredPosts.map((post, index) => (
                  <Link to={`/${post.category}/${post.id}`} key={post.id}>
                    <div
                      className={`featured-post ${
                        index + 1 < featuredPosts.length ? "gray-border" : ""
                      }`}
                      key={post.id}
                    >
                      <div className="date-title ">
                        <div className="d-flex justify-content-between">
                          <p className="p-0 mb-1 meta-text-footer">
                            {post.createdDate}
                          </p>
                          <p className="p-0 m-0">{post.commentsNum}</p>
                        </div>
                        <p className="title">{post.postTitle}</p>
                      </div>
                      <img src={post.featuredImage} alt="featured" />
                    </div>
                  </Link>
                ))}
              </div>
            </Col>
            <Col className="flex-column-grid">
              <h2>Random posts</h2>
              <div className="featured-posts">
                {randomPosts.map((post, index) => (
                  <Link to={`/${post.category}/${post.id}`} key={post.id}>
                    <div
                      className={`featured-post ${
                        index + 1 < randomPosts.length ? "gray-border" : ""
                      }`}
                      key={post.id}
                    >
                      <div className="date-title">
                        <div className="d-flex justify-content-between date-title">
                          <p className="meta-text-footer p-0 mb-1">
                            {post.createdDate}
                          </p>
                          <p className="p-0 m-0">{post.commentsNum}</p>
                        </div>
                        <p className="title">{post.postTitle}</p>
                      </div>
                      <img src={post.featuredImage} alt="featured" />
                    </div>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-bottom">
          <div className="wrapper pt-3">
            <div className="d-flex justify-content-between">
              <p>
                © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
              </p>
              <ul>
                <li>Typography</li>
                <li>- Templates</li>
                <li>- Contact form</li>
                <li>- 404 Page</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
