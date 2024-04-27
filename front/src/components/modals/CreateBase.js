import React, {useState} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBase } from "../../http/techAPI";

//пропсы show отвечает за то виден компонент или нет, а onHide это функция которая скрывает модальное окно
const CreateBase = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [enginePower, setEnginePower] = useState("");
  const [loadCapacity, setLoadCapacity] = useState("");
  const [speed, setSpeed] = useState("");
  const [fuel, setFuel] = useState("");
  const [mass, setMass] = useState("");
  const addBase = () => {
    createBase({  Name:name, Power:enginePower, Weightlift:loadCapacity, Speed:speed, Fuel:fuel, Weight:mass }).then((data) => {
      setName("");
      setEnginePower("");
      setLoadCapacity("");
      setSpeed("");
      setFuel("");
      setMass("");
      onHide();
    });
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую базу
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            className="mt-2"
            placeholder="Введите название базы"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-2"
            placeholder="Введите мощность двигателя"
            value={enginePower}
            onChange={(e) => setEnginePower(e.target.value)}
          />
          <Form.Control
            className="mt-2"
            placeholder="Введите грузоподъемность"
            value={loadCapacity}
            onChange={(e) => setLoadCapacity(e.target.value)}
          />
          <Form.Control
            className="mt-2"
            placeholder="Введите скорость"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <Form.Control
            className="mt-2"
            placeholder="Введите расход двигателя"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          />
          <Form.Control
            className="mt-2"
            placeholder="Введите массу"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBase}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBase;
