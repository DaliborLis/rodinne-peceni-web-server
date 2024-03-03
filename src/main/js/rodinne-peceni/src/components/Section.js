import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { sections_data } from "./data.js";

function Section(props) {

    const items = sections_data[props.origin].items;

    useEffect(() => {
        console.log("componentDidMount");
    }, []);

    const renderItems = () => {
        if (items === undefined) {
            return null;
        }
        return (
            items.map((item, index) => (
                <>
                    <hr className="featurette-divider" />
                    <Row key={index} className='featurette'>
                        <div className={"col-md-7" + (index % 2 === 0 ? "" : " order-md-2")}>
                            <h5 className="featurette-heading fw-normal lh-1">{item.name}<span className="text-body-secondary">{item.secondary}</span></h5>
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
            <h1 className="display-2">{sections_data[props.origin].title}</h1>
            {
                renderItems()
            }
        </Container>
    );
}

export default Section;