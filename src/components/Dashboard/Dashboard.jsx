import React from 'react'
import DashSide from './DashSide'
import { Outlet } from 'react-router-dom'
import DashNav from './DashNav'
import DashFooter from './DashFooter'


const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-[19%]">
                    <DashSide />
                </div>

                <div className="w-full">
                    <div className="w-full">
                        <DashNav />
                    </div>
                    <div className="p-4">
                        <Outlet />
                    </div>
                    <div className="">
                        <DashFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard