import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer>
            <Container>
                <p className="float-end small"><a href="#">Nahoru</a></p>
                <p className='small'>&copy; 2024 Rodinné pečení</p>
            </Container>
        </footer>
    );
}

export default Footer;