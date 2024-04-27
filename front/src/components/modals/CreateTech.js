import React, {useContext, useEffect, useState} from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "C:/Users/Gleb/Desktop/ОтчетыПолитех/4 курс/1 семестр/Современные средства разработки WEB приложений/Лаб1/front/src/index.js";
import {createTech, fetchBases, fetchBrands, fetchTechs, fetchTypes} from "../../http/techAPI";
import {observer} from "mobx-react-lite";

 //Добавление базы сделать не так как у него массив характеристик, а сделать выбор из течстора
 //еще нужно добавление базы сделать из админ панели но это потом
const CreateTech = observer(({ show, onHide }) => {
  const { tech } = useContext(Context);
  const [name,setName] = useState('');
  const [year,setYear] = useState('');
  const [price,setPrice] = useState('0');
  const [file,setFile] = useState(null);

  useEffect(()=>{
    fetchTypes().then(data=>tech.setTypes(data))
    fetchBrands().then(data=>tech.setBrands(data))
    fetchBases().then(data=>tech.setBases(data))
    //fetchTechs().then(data=>tech.setTeches(data.rows))

  },[])


  const selectFile = (e) =>{
    setFile(e.target.files[0]);
  }

  const addTech = () =>{
    const formData = new FormData();
    formData.append('name',name);
    formData.append('year',year);
    formData.append('price', `${price}`);
    formData.append('img',file);
    formData.append('typeId',tech.selectedType.id);
    formData.append('brandId',tech.selectedBrand.id);
    formData.append('basedPlatformId',tech.selectedBase.id);
    createTech(formData).then(data=>{
        onHide();
    })
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить спецтехнику
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>  
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{tech.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {tech.types.map((type) => (
                <Dropdown.Item onClick={()=>tech.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{tech.selectedBrand.name|| "Выберите производителя"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {tech.brands.map((brand) => (
                <Dropdown.Item onClick={()=>tech.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{tech.selectedBase.Наименование || "Выберите базу"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {tech.bases.map((base) => (
                <Dropdown.Item onClick={()=>tech.setSelectedBase(base)} key={base.id}>{base.Наименование}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control  className="mt-2" placeholder="Введите название спецтехники" value={name} onChange={e => setName(e.target.value)}/>
          <Form.Control  className="mt-2" placeholder="Введите год выпуска спецтехники" type="number" value={year} onChange={e=>setYear(e.target.value)}/>
          <Form.Control  className="mt-2" placeholder="Введите стоимость спецтехники" type="number" value={price} onChange={e=>setPrice(Number(e.target.value))}/>
          <Form.Control  className="mt-2" type="file" onChange={selectFile}/>
          <hr/>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addTech}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateTech;
