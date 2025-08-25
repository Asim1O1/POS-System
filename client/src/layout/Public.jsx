import React from 'react'
import Navbar from '../sections/Navbar'
import { Outlet } from 'react-router'

function Public() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Public