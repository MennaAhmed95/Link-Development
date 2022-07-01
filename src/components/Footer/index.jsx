import { Col, Row } from "antd";
import logo from "./../../assets/images/logo.png";
import face from "./../../assets/images/face.png";
import insta from "./../../assets/images/insta.png";
import twit from "./../../assets/images/twit.png";
import gog from "./../../assets/images/gog.png";
import apple from "./../../assets/images/apple.png";

const Footer = () => {
  return (
    <footer className="footer contain">
      <div className="top-footer">
        <Row>
          <Col span={4} xs={24} sm={24} md={24} lg={6}>
            <div className="footer-logo">
              <img src={logo} width="150" alt="Logo" />
              <p className="tagline">
                We make technology produce
                <br /> productive, adaptable and <br />
                sustainable business experiences.
              </p>
            </div>
          </Col>
          <Col span={4} xs={24} sm={24} md={8} lg={4}>
            <h4>Company</h4>
            <ul className="footer-link">
              <li>
                <a href="/" title="Home">
                  About
                </a>
              </li>
              <li>
                <a href="/" title="Home">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" title="Home">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col span={4} xs={24} sm={24} md={8} lg={4}>
            <h4>Contact</h4>
            <ul className="footer-link">
              <li>
                <a href="/" title="Faq">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="/" title="Blog">
                  Press
                </a>
              </li>
              <li>
                <a href="/" title="Blog">
                  Affilates
                </a>
              </li>
            </ul>
          </Col>
          <Col span={4} xs={24} sm={24} md={8} lg={4}>
            <h4>Media</h4>
            <ul className="footer-link">
              <li>
                <a href="/" title="Contact">
                  News
                </a>
              </li>
              <li>
                <a href="/" title="Contact">
                  Photo
                </a>
              </li>
              <li>
                <a href="/" title="Contact">
                  Video
                </a>
              </li>
            </ul>
          </Col>
          <Col span={4} xs={24} sm={24} md={24} lg={6}>
            <ul className="footer-link">
              <li>
                <div className="icons">
                  <span className="icons__cont">
                    <img src={face} alt="face" />
                  </span>
                  <span className="icons__cont">
                    <img src={insta} alt="insta" />
                  </span>
                  <span className="icons__cont">
                    <img src={twit} alt="wit" />
                  </span>
                </div>
              </li>
              <li className="Discover">Discover our app</li>
              <li className="btnsCont">
                <button className="btn">
                  <img src={gog} alt="" />
                  GET IT ON
                  <br /> GOOGLE PLAY
                </button>
                <button className="btn">
                  <img src={apple} alt="" />
                  Avalible on the
                  <br />
                  Apple Store
                </button>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="bottom-footer">
        <Row justify="center">
          <p className="copyright">All rights reserved@Linkdevelopment.com</p>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
