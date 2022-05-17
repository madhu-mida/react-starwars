import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const StarshipDisplay = (props) => {
    const starShipArray = props.starship.results;
    return (
        <Row className="starship">
            {starShipArray.map((element, index) => {
                return (
                    <Col style={{ marginTop: "20px" }}>
                        <Card className="starship-card" style={{ width: '18rem', height: '180px', backgroundColor: 'darkslategray', color: "white" }}>
                            <Card.Body>
                                <Card.Title>
                                    {element.name}
                                </Card.Title>
                                <Card.Body>
                                    <h9>Model: <i>{element.model}</i></h9><br />
                                    <h9>Consumables: <i>{element.consumables}</i></h9>

                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row >
    );
}

export default StarshipDisplay;