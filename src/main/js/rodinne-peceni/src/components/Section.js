import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { sections_data } from "./data.js";
import { useNavigate } from 'react-router-dom';

function Section(props) {

    const [category, setCategory] = useState(null);

    const navigate = useNavigate();

    const handleCategory = category => {
        setCategory(category);
        window.scrollTo(0, 0);
    };

    const renderItems = items => {
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
                            <p className="lead">
                                <ul>
                                    {item.descriptions && item.descriptions.map(d => (<li>{d}</li>))}
                                </ul>
                            </p>
                        </div>
                        <div className={"col-md-5" + (index % 2 === 0 ? "" : " order-md-1")}>
                            <Image className="featurette-image img-fluid mx-auto" src={item.image} width={500} height={500} />
                        </div>
                    </Row>
                </>
            ))
        );
    };

    const renderCategories = () => {
        const categories = sections_data[props.origin].categories;
        const keys = Object.keys(categories);
        const rows = keys.reduce((accumulator, key, index) => {
            if (index % 3 === 0) { //render 3 columns per row
                const stepKeys = keys.slice(index, index + 3);
                const columns = stepKeys.map(stepKey => {
                    const categoryDetail = categories[stepKey];
                    return (
                        <Col lg={4}>
                            <Image onClick={() => handleCategory(stepKey)} className="clickable" src={categoryDetail.image} width={140} height={140} rounded />
                            <h2 className="fw-normal">{stepKey}</h2>
                            <p><Button onClick={() => handleCategory(stepKey)}>Detail</Button></p>
                        </Col>
                    );
                });
                accumulator.push(
                    <Row className="marketing" style={{ justifyContent: "center" }}>
                        {columns}
                    </Row>
                );
            }
            return accumulator;
        }, []);

        return (
            <Container style={{ marginTop: "3em" }}>
                {rows}
            </Container>
        );
    };

    const renderContent = () => {
        if (Object.keys(sections_data[props.origin].categories).length > 1) {
            if (category !== null) { // render items for selected category
                const items = sections_data[props.origin].categories[category].items;
                return (
                    renderItems(items)
                );
            } else { // render categories
                return (
                    renderCategories()
                );
            }
        } else if (Object.keys(sections_data[props.origin].categories).length === 1) { // only one category exists, render category items
            const firstKey = Object.keys(sections_data[props.origin].categories)[0];
            const items = sections_data[props.origin].categories[firstKey].items;
            return (
                renderItems(items)
            );
        } else { // no categories - no items - render nothing
            return null;
        }
    };

    return (
        <Container className='marketing'>
            <h1 className="display-4" style={{position: "sticky", top: "55px", backgroundColor: "white"}}>
                <span className="clickable" onClick={() => navigate("/")}>Nabídka</span>
                {<span className="clickable" onClick={() => handleCategory(null)}> - {sections_data[props.origin].title}</span>}
                {category && (<span> - {category} </span>)}
            </h1>
            {
                renderContent()
            }
        </Container>
    );
}

export default Section;