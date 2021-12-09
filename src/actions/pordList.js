import { db } from "../firebase/firebaseConfig";
import { getDocs, collection, query, where } from "@firebase/firestore"
import { typesProduct } from "../types/types";

// list docs

//sync action
export const list = (products) => {
    return {
        type: typesProduct.list,
        payload: products
    }
}

//async action
export const listProducts = () => {
    return async (dispatch) => {
        const prodData = await getDocs(collection(db, 'products'))
        let productsArray = []
        console.log('raw data from db', prodData)
        prodData.forEach((doc) => {
            console.log('doc from db', doc.data())
            productsArray.push({
                ...doc.data()
            })
        })
        dispatch(list(productsArray))
    }
}


//search
export const searchAsyn = (search) => {

    return async (dispatch) => {
       
        const productCollections = collection(db,"products");
        console.log('search query', search.query)
        const q = query(productCollections,where("title","==",search.query))
        const datos = await getDocs(q);
        console.log('search dada return',datos)
        const productsArrSearch = [];
        datos.forEach((docu) => {
            productsArrSearch.push(docu.data())
        }) 
        console.log(productsArrSearch)
        dispatch(searchSync(productsArrSearch))
    }
}

export const searchSync = (search) => {
    return{
        type: typesProduct.search,
        payload: search
    }
}
