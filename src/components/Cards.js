import React from 'react'
import { Row, Col, Card, Button, CardGroup, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'

export const Cards = () => {

    const { products } = useSelector(store => store.productList) //destructuring from STORE
    console.log('products array from store', products)
    products.map((product, index) => (
        console.log('product', index, product)
    ))

    const formik = useFormik({
        initialValues: {
            sort: ''
        },
        onSubmit: (data => {
            console.log('formik submit data', data)
        })
    })


    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Row >
                    <Col xs="auto" className="my-3 mx-3">
                        <Form.Select name='sort'
                            onChange={formik.handleChange}
                            className="me-sm-2"
                            id="inlineFormCustomSelect">
                                <option name='sort'>Ordenar</option>
                                <option name='sort' >Menor precio</option>
                                <option name='sort'>Mayor precio</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>

            <CardGroup>

                {
                    products.map((product, index) => (
                        <Row key={index} xs={1} md={2} className="g-4 m-2">
                            <Col className="container-fluid mt-4">
                                <Card style={{ width: "18rem" }} className="box">
                                    <Card.Img variant="top" src={product.img} fluid="true" />
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            {product.title}
                                        </Card.Title>
                                        <Card.Text className="text-center ">
                                            <span>$R </span>{product.price}
                                        </Card.Text>

                                    </Card.Body>

                                    <Card.Footer className="text-center">
                                        <Button variant="dark">COMPRAR</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    ))
                }

            </CardGroup>

        </>
    )
}
