import React from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

export const Bar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar Producto"
                            className="me-2"
                            aria-label="Search"
                            name='search'
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}
