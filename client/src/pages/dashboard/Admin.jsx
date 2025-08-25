import React from 'react'
import { useUser } from '../../hooks/useUser'

function Admin() {
    const { data } = useUser()
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export default Admin