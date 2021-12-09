import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Bar } from '../components/Bar'
import { Cards } from '../components/Cards'
import { listProducts } from '../actions/pordList'

export const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Bar />
            <Cards />
        </>
    )
}
