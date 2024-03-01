import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Section(props) {

    const items = [
        { name: "Dort potahovaný. ", secondary: "Lesní motiv.", image: "dort.png" },
        { name: "Dort ovocný. ", secondary: "Lesní ovoce.", image: "dort-ovoce.png" }
    ];

    const renderItems = () => {
        return (
            items.map((item, index) => (
                <>
                    <hr className="featurette-divider" />
                    <Row key={index} className='featurette'>
                        <div className={"col-md-7" + (index % 2 === 0 ? "" : " order-md-2")}>
                            <h5 className="featurette-heading fw-normal lh-1">{item.name}<span class="text-body-secondary">{item.secondary}</span></h5>
                            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        </div>
                        <div className={"col-md-5" + (index % 2 === 0 ? "" : " order-md-1")}>
                            <Image className="featurette-image img-fluid mx-auto" src={item.image} width={500} height={500} />
                        </div>
                    </Row>
                </>
            ))
        );
    };

    return (
        <Container className='marketing'>
            <h1 class="display-2">{props.title}</h1>
            {
                renderItems()
            }
        </Container>
    );
}

export default Section;