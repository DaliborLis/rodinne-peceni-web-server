import Menu from "./Menu";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <>
            <Menu />
            <main>
                <Container>
                    <Carousel data-bs-theme="light">
                        <Carousel.Item>
                            {/* <img
                            className="d-block w-100"
                            src="ny.jpg"
                            alt="First slide"
                        /> */}
                            <Image src="dort-gimp-backgroud.png" className="d-block w-100" />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image src="dort-ovoce-gimp-backgroud.png" className="d-block w-100" />
                            {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image src="tarteletky-gimp-background.png" className="d-block w-100" />
                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </main>
        </>
    );
}

export default App;