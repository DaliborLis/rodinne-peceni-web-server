import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();
    console.log(location)
    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href='/'><Image src='vojteska.png' fluid alt='rodinne-peceni-vojteska' style={{ with: "30px", height: "30px" }} /> Rodinné pečení</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" href="/" active={location.pathname === "/"}>Nabídka</Nav.Link>
                                <Nav.Link as={Link} to="about" href="about">O nás</Nav.Link>
                                <Nav.Link as={Link} to="pricing" href="pricing">Ceník</Nav.Link>
                                <Nav.Link as={Link} to="contact" href="contact">Kontakt</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </>
    );
}

export default Layout;