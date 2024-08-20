import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Pricing() {
    return (
        <Container className='text-center'>
            <h1 className='display-4 text-center'>Ceník</h1>
            <object data="cenik.pdf" type="application/pdf" width="100%" height="800px">
                <p>
                    <Button href='cenik.pdf'>Stáhnout ceník</Button>
                </p>
            </object>
        </Container>
    );
}

export default Pricing;