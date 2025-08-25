import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-background text-center shadow-lg px-30 py-10 rounded-2xl'>
                <TriangleAlert className='mx-auto mb-4 text-red-500' size={50} />

                <p className='text-xl'>Page Not Found</p>
                <Link to='/' className='text-blue-500 hover:underline mt-4 inline-block'>Go to Home</Link>
            </div>
        </div>
    )
}

export default NotFound