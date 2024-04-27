import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut=()=>{
      user.setUser({});
      user.setIsAuth(false);
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ textDecoration: "none" }}>
          <div
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "30px",
              fontFamily: "Montserrat",
            }}
          >
            RentRig
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "15px",
              textDecoration: "none",
              color: "white",
            }}
          >
            Магазин спецтехники
          </div>
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => {
                navigate(ADMIN_ROUTE);
              }}
            >
              Админ Панель
            </Button>
            <Button
              variant="outline-light"
              onClick={() => {
                logOut();
              }}
              className="ms-2"
              style={{ fontFamily: "Montserrat" }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              variant="outline-light"
              onClick={() => navigate(LOGIN_ROUTE)}
              style={{ fontFamily: "Montserrat" }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
