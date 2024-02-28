import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer>
            <Container>
                <hr />
                <p className='small' style={{ textAlign: "center" }}>&copy; 2024 Rodinné pečení</p>
            </Container>
        </footer>
    );
}

export default Footer;