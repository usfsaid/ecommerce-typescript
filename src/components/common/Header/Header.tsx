//Lib
import { Badge, Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//Components
import HeaderBasket from "@components/eCommerce/HeaderBasket/HeaderBasket";

//Styles
import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          {" "}
          <span>Our </span>
          <Badge bg="info">Ecom</Badge>
        </h1>
        {/* basket */}
        <HeaderBasket />
      </div>

      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Catogary
              </Nav.Link>
              {/* <Nav.Link as={NavLink} to="products">
                Products
              </Nav.Link> */}
              <Nav.Link as={NavLink} to="about-us">
                AboutUs
              </Nav.Link>
            </Nav>
            {/* login & signup */}
            <Nav className="">
              <Nav.Link as={NavLink} to="login">
                LogIn
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
