import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [])

    return (
        <Outlet />
    )
}

export default Dashboard