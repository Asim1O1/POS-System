
import { useUser } from '../../hooks/useUser'
import React, { useEffect, useState } from 'react';
import List from './List';
import Scanner from './Scanner';


function Admin() {
    const [code, setCode] = useState('')

    useEffect(() => {
        if (!code) return;
        const timer = setTimeout(() => {
            setCode('')
        }, 1000)
        return () => clearTimeout(timer)
    }, [code])

    // const { data, isLoading } = useUser()
    // if (isLoading) return <div>Loading...</div>

    return (
        <>
            <div className='transform scale-x-[-1] w-full h-1/2'>
                <Scanner setCode={setCode} />
            </div>
            {/* {code && <h1 className='text-3xl font-bold'> Scanned Code: {code} </h1>}
            {code && (
                <p className="bg-amber-300">
                    {PRODUCT.find((p) => p.id === code || "Not Found")}
                </p>
            )} */}
            <List newProduct={code} />
        </>
    )
}

export default Admin