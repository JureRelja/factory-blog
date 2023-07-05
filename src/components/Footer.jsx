import React from "react";
import blueLogo from "../assets/icons/logo-blue.svg";
import rss from "../assets/icons/rss.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import dribble from "../assets/icons/dribble.svg";
import linkedin from "../assets/icons/linkedin.svg";
import youtube from "../assets/icons/youtube.svg";
import skype from "../assets/icons/skype.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  "Branding",
];

function Footer() {
  return (
    <>
      <div className="purple-bar">
        <div className="wrapper">
          <div className="inner-wrapper"></div>
        </div>
      </div>

      <Container fluid className="footer">
        <div className="wrapper">
          <Row>
            <Col className="flex-column-grid">
              <div className="footer-logo-wrapper">
                <img src={blueLogo} alt="logo" />
                <h2>Kenaz</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                leo ante.
              </p>

              <div>
                <img src={rss} alt="rss" className="footer-icon" />
                <img src={facebook} alt="facebook" className="footer-icon" />
                <img src={twitter} alt="twitter" className="footer-icon" />
                <img src={dribble} alt="dribble" className="footer-icon" />
                <img src={linkedin} alt="linkedin" className="footer-icon" />
                <img src={youtube} alt="youtube" className="footer-icon" />
                <img src={skype} alt="skype" className="footer-icon" />
              </div>
            </Col>
            <Col className="flex-column-grid">
              <h2>Newsletter</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus leo ante...
                </p>
              </div>
              <div className="newsletter-input">
                <input type="text" placeholder="Your mail" />
                <button>Subscribe</button>
              </div>
            </Col>

            <Col className="flex-column-grid">
              <h2>Tags Widget</h2>
              <div className="tag-btn-container">
                {dummy_tags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-btn ${tag == "Research" ? "active" : ""}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <div className="lower-footer-row">
              <h2>Content</h2>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Footer;
