import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import TechList from "../components/TechList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {
  fetchBases,
  fetchBrands,
  fetchTechs,
  fetchTypes,
} from "../http/techAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { tech } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => tech.setTypes(data));
    fetchBrands().then((data) => tech.setBrands(data));
    // fetchBases().then(data=>tech.setBases(data))
    // fetchTechs(null, null, 1, 2).then((data) => {
    //   tech.setTeches(data.rows);
    //   tech.setTotalCount(data.count);
    // });
  }, []);

  useEffect(() => {
    fetchTechs(tech.selectedType.id, tech.selectedBrand.id, tech.page, 2).then(
      (data) => {
        tech.setTeches(data.rows);
        tech.setTotalCount(data.count);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tech.page, tech.selectedType, tech.selectedBrand,]);

  return (
    <Container className="mt-3 ">
      <Row className="d-flex ">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
          <TechList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
