import React from "react";
import blueLogo from "../../assets/icons/logo-blue.svg";
import rss from "../../assets/icons/rss_v2.svg";
import facebook from "../../assets/icons/facebook_v2.svg";
import twitter from "../../assets/icons/twitter_v2.svg";
import dribble from "../../assets/icons/dribble_v2.svg";
import linkedin from "../../assets/icons/linkedin_v2.svg";
import youtube from "../../assets/icons/youtube_v2.svg";
import skype from "../../assets/icons/skype_v2.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { articles } from "../../assets/dummy-posts";
import { Link } from "react-router-dom";
import smallTwitterLogo from "../../assets/icons/small-twitter-logo.svg";
import FooterPost from "./FooterArticle";

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

const twitterPosts = [
  {
    id: 1,
    authorName: "Evanto",
    authorTag: "@envato",
    content:
      "Is this your typical million dollar day in the park? http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy",
  },
  {
    id: 2,
    authorName: "Evanto",
    authorTag: "@envato",
    content: "Happy TrueThemes Day http://enva.to/1dRzgLD",
  },
  {
    id: 3,
    authorName: "Evanto",
    authorTag: "@envato",
    content:
      "@robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC",
  },
];

const featuredArticles = articles.slice(0, 3);
const randomArticles = articles.slice(3, 6);

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
          <Row className="gap-3">
            {/* Logo column */}
            <Col className="footer-column pe-0">
              <Link to="/">
                <div className="footer-logo-wrapper">
                  <img src={blueLogo} alt="logo" />
                  <h2>Kenaz</h2>
                </div>
              </Link>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              <div className="d-flex justify-content-between w-100">
                <img src={rss} alt="rss" className="footer-icon" />
                <img src={facebook} alt="facebook" className="footer-icon" />
                <img src={twitter} alt="twitter" className="footer-icon" />
                <img src={dribble} alt="dribble" className="footer-icon" />
                <img src={linkedin} alt="linkedin" className="footer-icon" />
                <img src={youtube} alt="youtube" className="footer-icon" />
                <img src={skype} alt="skype" className="footer-icon" />
              </div>
            </Col>
            {/* Newsletter column */}
            <Col className="footer-column px-0">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                leo ante...
              </p>
              <div className="newsletter-input ">
                <input type="text" placeholder="Your mail" />
                <button>Subscribe</button>
              </div>
            </Col>
            {/* Tags column */}
            <Col className="footer-column ps-0">
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
            {/* Featured posts column */}
            <Col className="footer-column">
              <h2>Featured</h2>
              <div className="featured-articles ">
                {featuredArticles.map((article, index) => (
                  <FooterPost
                    article={article}
                    index={index}
                    articleLength={featuredArticles.length}
                    key={article.id}
                  />
                ))}
              </div>
            </Col>
            {/* Random posts column */}
            <Col className="footer-column">
              <h2>Random Posts</h2>
              <div className="featured-articles ">
                {featuredArticles.map((article, index) => (
                  <FooterPost
                    article={article}
                    index={index}
                    articleLength={featuredArticles.length}
                    key={article.id}
                  />
                ))}
              </div>
            </Col>
            {/* Twitter feed column */}
            <Col className="footer-column">
              <h2>Twitter Feed</h2>
              <div className="d-flex flex-column gap-5">
                {twitterPosts.map((post) => (
                  <div className="twitter-feed-wrapper" key={post.id}>
                    <div className="d-flex justify-content-start align-items-center gap-1">
                      <img src={smallTwitterLogo} alt="twitter" />
                      <p className="p-0 m-0">{post.authorName}</p>
                      <p className="p-0 m-0">{post.authorTag}</p>
                    </div>
                    <p className="p-0 m-0 twitter-post-content">
                      {post.content}
                    </p>
                  </div>
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
