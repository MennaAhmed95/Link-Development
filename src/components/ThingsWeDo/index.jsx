import { Row, Col } from "antd";
import TechCard from "../TechCard";
import { toDoList } from "./constants";
const ThingsWeb = () => {
  return (
    <Row className="overlap">
      <Col className="col1">
        <TechCard itm={toDoList[0]} />
      </Col>
      <Col className="col2">
        <TechCard itm={toDoList[1]} />
        <TechCard itm={toDoList[2]} />
      </Col>
      <Col className="col3">
        <TechCard itm={toDoList[3]} />
        <TechCard itm={toDoList[4]} />
      </Col>
      <Col className="divItm">
        <h2>
          We Deliver <br />
          Digital Productivity
        </h2>
        <p>
          We craft technology solutions that digitally bond and transform the
          productivity of our customers and their citizens, workers, consumers
          and partners.
        </p>
      </Col>
    </Row>
  );
};

export default ThingsWeb;
