import React from 'react'
import { Row, Col, Card, Button, CardGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { sortProductsAsync } from '../actions/pordList'

export const Cards = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(store => store.productList) //destructuring from STORE
    // console.log('products array from store', products)
    // products.map((product, index) => (
    //     console.log('product', index, product)
    // ))

    
    const desHandler = () => {
        dispatch(sortProductsAsync('des'))
    }
    const ascHandler = () => {
        dispatch(sortProductsAsync('asc'))
    }

    return (
        <>
            <Button variant="dark" className="m-3" onClick={() => desHandler()}>
                Mayor precio
            </Button>
            <Button variant="dark" className="m-3" onClick={() => ascHandler()}>
                Menor precio
            </Button>
    
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
