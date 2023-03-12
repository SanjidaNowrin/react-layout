import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSide from "./../LeftSide/LeftSide";
const Main = () => {
  return (
    <Row>
      <Col lg={4}>
        <LeftSide />
      </Col>
      <Col lg={8}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Main;
