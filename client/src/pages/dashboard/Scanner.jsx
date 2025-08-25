import React from 'react'
import BarCodeScanner from 'barcode-react-scanner';

const PRODUCT = [
    { id: "12345678", name: 'Coca Cola', price: 1.5 },
    { id: "0036000291452", name: 'Pepsi', price: 1.5 },
]

function Scanner({ setCode }) {
    return (
        <BarCodeScanner onUpdate={(err, resp) => {
            if (resp) {
                const code = resp.getText();
                const product = PRODUCT.find((p) => p.id === code);
                setCode(product)
            }
        }}
        />
    )
}

export default Scanner