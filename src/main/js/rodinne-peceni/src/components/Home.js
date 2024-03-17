import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Carousel data-bs-theme="light">
                <Carousel.Item>
                    {/* <img
                            className="d-block w-100"
                            src="ny.jpg"
                            alt="First slide"
                        /> */}
                    <Image src="dort-gimp-backgroud.png" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="dort-ovoce-gimp-backgroud.png" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="tarteletky-gimp-background.png" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row className="marketing">
                    <Col lg={4}>
                        <Image src="dort.png" width={140} height={140} rounded />
                        <h2 class="fw-normal">Dorty</h2>
                        <p><Button as={Link} to="dorty">Detail</Button></p>
                    </Col>
                    <Col lg={4}>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                        <h2 class="fw-normal">Zákusky</h2>

                        <p><Button as={Link} to="zakusky">Detail</Button></p>
                    </Col>
                    <Col lg={4}>
                        <Image src="eclairs.png" width={140} height={140} roundedCircle />
                        <h2 class="fw-normal">Francouzské zákusky</h2>

                        <p><Button as={Link} to="fr_zakusky">Detail</Button></p>
                    </Col>
                </Row>
                <Row className="marketing">
                    <Col lg={4}>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                        <h2 class="fw-normal">Chlebíčky</h2>

                        <p><Button as={Link} to="chlebicky">Detail</Button></p>
                    </Col>
                    <Col lg={4}>
                        <Image src="cukrovi.png" width={140} height={140} roundedCircle />
                        <h2 class="fw-normal">Cukroví</h2>

                        <p><Button as={Link} to="cukrovi">Detail</Button></p>
                    </Col>
                    <Col lg={4}>
                        <Image src="kolace.png" width={140} height={140} roundedCircle />
                        <h2 class="fw-normal">Koláče</h2>

                        <p><Button as={Link} to="kolace">Detail</Button></p>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default Home;