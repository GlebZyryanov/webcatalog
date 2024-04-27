import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateTech from "../components/modals/CreateTech";
import CreateBase from "../components/modals/CreateBase";
import UpdateTech from "../components/modals/UpdateTech";
//на этой странице администратор будет добавлять технику, бренды, виды надстроек в каталог
const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);
  const [baseVisible, setBaseVisible] = useState(false);



  const [UpdateCreate,setUpdateCreate] = useState(true);

  return (
    <Container className="d-flex flex-column">
        <Button className="mt-2 p-2" onClick={() => setUpdateCreate(false)}>Изменить данные</Button>
        <Button className="mt-2 p-2" onClick={() => setUpdateCreate(true)}>Добавить данные</Button>
        {UpdateCreate ? (
            <Container className="d-flex flex-column">
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setBrandVisible(true)}
                >
                    Добавить производителя
                </Button>
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </Button>
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setTechVisible(true)}
                >
                    Добавить спецтехнику
                </Button>
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setBaseVisible(true)}
                >
                    Добавить базу
                </Button>

                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <CreateTech show={techVisible} onHide={() => setTechVisible(false)} />
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <CreateBase show={baseVisible} onHide={() => setBaseVisible(false)} />
            </Container>
        ) : (<Container>
            <Container className="d-flex flex-column">
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setBrandVisible(true)}
                >
                    Изменить производителя
                </Button>
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setTypeVisible(true)}
                >
                    Изменить тип
                </Button>
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setTechVisible(true)}
                >
                    Изменить спецтехнику
                </Button>
                <Button
                    variant="outline-dark"
                    className="mt-2 p-2"
                    onClick={() => setBaseVisible(true)}
                >
                    Изменить базу
                </Button>

                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <UpdateTech show={techVisible} onHide={() => setTechVisible(false)} />
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <CreateBase show={baseVisible} onHide={() => setBaseVisible(false)} />
            </Container>
        </Container>)}

    </Container>
  )
};

export default Admin;
