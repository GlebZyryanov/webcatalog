import React, {useContext, useEffect, useState} from "react";
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import {Context} from "../index";
import {fetchBases, fetchBrands, fetchOneTechs, fetchTechs, fetchTypes} from "../http/techAPI";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";

const TechPage = observer(() => {
  const {tech} = useContext(Context);
    const [techState, setTechesState] = useState({info: []});
    //const [bases, setBases] = useState({info: []});
    const {id} = useParams();


  useEffect(()=>{
    fetchOneTechs(id).then(data => setTechesState(data))
    fetchBases().then(data => tech.setBases(data))
  },[])

  // const teches = {
  //   id: 1,
  //   name: "ЗМЛК-3М",
  //   year: 2002,
  //   price: 40000,
  //   img: "https://dvscan.ru/wp-content/uploads/2014/10/af0d32cd39a1524c_org.jpg",
  // };
  //
  // const bases = {
  //   id: 1,
  //   Наименование: "Урал 4320",
  //   Мощность: 999,
  //   Грузоподъемность: 7000,
  //   Скорость: 70,
  //   Расход: 40,
  //   Масса: 2000,
  // };
  return (
    <Container
      className="mt-2 "
      style={{
        fontSize: "30px",
        fontFamily: "Montserrat",
      }}
    >
      <Row>
        <Col lg={6}>
          <Image
            src={process.env.REACT_APP_API_URL  + techState.img}
            width="450"
            height="300"
            style={{ borderRadius: "10px" }}
          />
        </Col>
        <Col lg={6}>
          <Row className="flex-column mt-2">
            <h3 style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" , background:"#D3D3D3", borderRadius:"5px"}}>
              Наименование: {techState.name}
            </h3>
            <h3 style={{background:"#C0C0C0",borderRadius:"5px"}}>Год выпуска: {techState.year}</h3>
            <h3 style={{background:"#D3D3D3",borderRadius:"5px"}}>Стоимость: {techState.price} Руб.</h3>
          </Row>
          <Card>
            <Button variant="outline-success" >Посмотреть номер организации</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-2">
        <h1>Характеристики базы</h1>
        <ListGroup>
          {tech.bases.map((base) => {
            if (base.id === techState.basedPlatformId) {
              return (
                  <ListGroup.Item key={base.id}>
                    Название:{base.Name}
                    <ListGroup.Item>Мощность:{base.Power}</ListGroup.Item>
                    <ListGroup.Item>Грузоподъемность:{base.Weightlift}</ListGroup.Item>
                    <ListGroup.Item>Скорость:{base.Speed}</ListGroup.Item>
                    <ListGroup.Item>Расход:{base.Fuel}</ListGroup.Item>
                    <ListGroup.Item>Масса:{base.Weight}</ListGroup.Item>
                  </ListGroup.Item>
              );
            }
            return null; // Если base.id не равно techState.basedPlatformId, то возвращаем null
          })}
        </ListGroup>
        {/*{Object.entries(bases)*/}
        {/*  .filter(([key]) => key !== "id")*/}
        {/*  .map(([key, value], index) => (*/}
        {/*    <Row className="mt-1"*/}
        {/*      key={techContext.}*/}
        {/*      style={{ */}
        {/*        */}
        {/*        background: index % 2 === 0 ? "#D3D3D3" : "#C0C0C0" , borderRadius:"5px"}}*/}
        {/*    >*/}
        {/*      {key}: {value}*/}
        {/*    </Row>*/}
        {/*  ))}*/}

      </Row>
    </Container>
  );
});

export default TechPage;
