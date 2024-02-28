import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><Image src='vojteska.png' fluid alt='rodinne-peceni-vojteska' style={{ with: "30px", height: "30px" }} /> Rodinné pečení</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Nabídka" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Dorty</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Zákusky</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Francouzské zákusky</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Chlebíčky</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Cukroví</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Koláče</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="footer" href="#pricing">O nás</Nav.Link>
                                <Nav.Link href="#pricing">Kontakt</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main><Outlet /></main>
        </>
    );
}

export default Menu;