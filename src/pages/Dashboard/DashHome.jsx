import React from 'react'
import { MdPeople, MdAssessment, MdMessage, MdShoppingCart } from 'react-icons/md'
import { FaDollarSign, FaChartLine } from 'react-icons/fa'

const DashHome = () => {
    const stats = [
        {
            title: 'Users',
            value: '1,250',
            icon: <MdPeople className="h-8 w-8 text-violet-600" />,
            desc: 'Active this month'
        },
        {
            title: 'Revenue',
            value: '$12,500',
            icon: <FaDollarSign className="h-8 w-8 text-green-600" />,
            desc: 'Total earnings'
        },
        {
            title: 'Sales',
            value: '320',
            icon: <MdShoppingCart className="h-8 w-8 text-orange-500" />,
            desc: 'Orders completed'
        },
        {
            title: 'Reports',
            value: '45',
            icon: <MdAssessment className="h-8 w-8 text-blue-600" />,
            desc: 'Pending reviews'
        },
        {
            title: 'Messages',
            value: '87',
            icon: <MdMessage className="h-8 w-8 text-pink-500" />,
            desc: 'Unread messages'
        },
        {
            title: 'Growth',
            value: '+12%',
            icon: <FaChartLine className="h-8 w-8 text-emerald-600" />,
            desc: 'Monthly increase'
        },
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex items-center p-5 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition cursor-pointer"
                    >
                        <div className="p-3 bg-gray-100 rounded-full">
                            {stat.icon}
                        </div>
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-gray-700">{stat.title}</h2>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashHome
