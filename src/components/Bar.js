import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { searchAsyn } from '../actions/pordList';

export const Bar = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            query: ''
        },
        onSubmit: (query) => {
            console.log('formik submit data', query)
            dispatch(searchAsyn(query))
        }
    })

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <form onSubmit={formik.handleSubmit} className="d-flex">
                        <input
                        placeholder="Debes escribir tal cual el nombre"
                            name="query"
                            onChange={formik.handleChange}
                        />
                        <Button type="submit" variant="outline-success">Buscar</Button>
                    </form>
                </Container>
            </Navbar>
        </>
    )
}
