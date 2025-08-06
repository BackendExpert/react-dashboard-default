import React from 'react'
import { FaBell } from 'react-icons/fa6'

const Notifications = () => {
    return (
        <div>
            <div className="flex">
                <div className="p-2 rounded bg-violet-400">
                    <FaBell className='fill-white' />
                </div>
                <div className="">
                    <h1 className="font-bold text-xl ml-2">Notifications</h1>
                </div>
            </div>
        </div>
    )
}

export default Notifications