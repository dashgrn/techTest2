import React from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { searchAsyn } from '../actions/pordList';

export const Bar = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initalValues: {
            search: ''
        },
        onSubmit: (data) => {
            console.log('formik submit data', data)
            //dispatch(searchAsyn(search))
        }
    })


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <form onSubmit={formik.handleSubmit} className="d-flex">
                        <input
                            name="search"
                            placeholder="Buscar Producto"
                            className="me-2"
                            aria-label="Search"
                            onChange={formik.handleChange}
                        />
                        <Button type="submit" variant="outline-success">Buscar</Button>
                    </form>
                </Container>
            </Navbar>
        </>
    )
}
