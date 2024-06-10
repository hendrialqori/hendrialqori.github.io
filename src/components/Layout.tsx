import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className='w-[1024px] mx-auto flex mt-10 gap-9'>
            <Sidebar />
            {children}
        </div>
    )
}