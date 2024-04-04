import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();
    return (
        <>
            <header style={{position: "sticky", top: "0", zIndex:"100"}}>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href='/'><Image src='vojteska.png' fluid alt='rodinne-peceni-vojteska' style={{ with: "30px", height: "30px" }} /> Rodinné pečení</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" href="/" active={location.pathname === "/"}>Nabídka</Nav.Link>
                                <Nav.Link as={Link} to="onas" href="onas">O nás</Nav.Link>
                                <Nav.Link as={Link} to="cenik" href="cenik">Ceník</Nav.Link>
                                <Nav.Link as={Link} to="kontakt" href="kontakt">Kontakt</Nav.Link>
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