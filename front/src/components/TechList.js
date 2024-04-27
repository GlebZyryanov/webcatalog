import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import TechItem from "./TechItem";

const TechList = observer(() => {
  const { tech } = useContext(Context);
  return (
    <Row className="d-flex">
      {tech.teches.map((tech) => (
        <TechItem key={tech.id} tech={tech} />
      ))}
    </Row>
  );
});

export default TechList;
