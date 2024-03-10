import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

function Layout() {

    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/" href='/'><Image src='vojteska.png' fluid alt='rodinne-peceni-vojteska' style={{ with: "30px", height: "30px" }} /> Rodinné pečení</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Nabídka" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="dorty" href="dorty">Dorty</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="zakusky" href="zakusky">Zákusky</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="fr_zakusky" href="fr_zakusky">Francouzské zákusky</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="chlebicky" href="chlebicky">Chlebíčky</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="cukrovi" href="cukrovi">Cukroví</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="kolace" href="kolace">Koláče</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="footer" href="#pricing">O nás</Nav.Link>
                                <Nav.Link href="#pricing">Kontakt</Nav.Link>
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