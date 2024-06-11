import Sidebar from '@/components/Sidebar'
import React from 'react'
import Navigation from './Navigation'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className='w-[95%] md:w-11/12 lg:w-[1024px] mx-auto flex mt-10 gap-9'>
            <Sidebar />
            <div className='w-9/12'>
                <Navigation />
                {children}
            </div>
        </div>
    )
}