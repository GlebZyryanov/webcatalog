import React from "react";

import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TECH_ROUTE } from "../utils/consts";

const TechItem = ({ tech}) => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Col
      md={3}
      className="mt-2"
      onClick={() => navigate(TECH_ROUTE + "/" + tech.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + tech.img} />
        <div className="text-black-50 d-flex flex-column mt-2">
          <div className="align-self-start">{tech.brandId.name}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column align-items-start ">
              <div>{tech.year} г.в.</div>
              <div>${tech.price}</div>
            </div>
          </div>
        </div>
        <div>{tech.name}</div>
      </Card>
    </Col>
  );
};

export default TechItem;
