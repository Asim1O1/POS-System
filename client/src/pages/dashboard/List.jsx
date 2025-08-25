import React, { useEffect, useState } from 'react'

function List({ newProduct }) {

    const [product, setPro] = useState([])

    useEffect(() => {
        if (newProduct)
            setPro([...product, newProduct])
    }, [newProduct])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {/* {JSON.stringify(product)} */}
                {product.map(p => (<li>{p.name}</li>))}
            </ul>
        </div>
    )
}

export default List