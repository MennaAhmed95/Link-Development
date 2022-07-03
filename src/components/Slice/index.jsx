import { Row, Col } from "antd";
import a1 from "./../../assets/images/3.png";
import a2 from "./../../assets/images/d3.png";
import a3 from "./../../assets/images/p3.png";
import c1 from "./../../assets/images/1.png";
import c2 from "./../../assets/images/d1.png";
import c3 from "./../../assets/images/p1.png";
import b1 from "./../../assets/images/2.png";
import b2 from "./../../assets/images/d2.png";
import b3 from "./../../assets/images/p2.png";
import icon from "./../../assets/images/play.png";

const Slice = ({ slide }) => {
  return (
    <Row className="roww">
      <Col className="col1">
        <h4 style={{ color: `#${slide?.colorCode}` }}>{slide?.category}</h4>
        <img
          src={slide?.id === 0 ? a1 : slide?.id === 1 ? c1 : b1}
          alt="n1"
          className="she"
        />
        <h2>{slide?.title}</h2>
        <p>{slide?.brief}</p>
        <div className="btnCont">
          <button className="find">Find out more</button>
          <button className="play">
            <img src={icon} alt="play" width="60" />
            Play Demo
          </button>
        </div>
      </Col>
      <Col className="col2">
        <img
          src={slide?.id === 0 ? a2 : slide?.id === 1 ? c2 : b2}
          alt="i3"
          className="backgroung"
        />
        <img src={slide?.id === 0 ? a3 : slide?.id === 1 ? c3 : b3} alt="p1" />
      </Col>
    </Row>
  );
};

export default Slice;
