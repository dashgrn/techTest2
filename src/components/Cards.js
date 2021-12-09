import React from 'react'
import { Row, Col, Card, Button, CardGroup } from 'react-bootstrap'

export const Cards = () => {
    return (
        <>
            <CardGroup>

                <Row xs={1} md={2} className="g-4 m-2">
                    <Col className="container-fluid mt-4">
                        {/* <Card key={index} className="box"> */}
                        <Card style={{ width: "18rem" }} className="box">
                            <Card.Img variant="top" src='https://res.cloudinary.com/diqhctpcx/image/upload/v1639057401/techTest2/img_3_d43q48.png' fluid />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    TITLE
                                </Card.Title>
                                <Card.Text className="text-center ">99.9</Card.Text>

                            </Card.Body>

                            <Card.Footer className="text-center">
                                <Button variant="dark">COMPRAR</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </CardGroup>

        </>
    )
}
