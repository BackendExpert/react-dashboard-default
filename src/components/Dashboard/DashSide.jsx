import React from 'react'
import {
    MdDashboard,
    MdPeople,
    MdSettings,
    MdAssessment,
    MdEmail,
    MdLogout
} from 'react-icons/md'

const DashSide = () => {
    const menuItems = [
        { name: 'Overview', icon: <MdDashboard />, active: true },
        { name: 'Users', icon: <MdPeople /> },
        { name: 'Reports', icon: <MdAssessment /> },
        { name: 'Messages', icon: <MdEmail /> },
        { name: 'Settings', icon: <MdSettings /> },
        { name: 'Logout', icon: <MdLogout /> },
    ]

    return (
        <aside className="flex flex-col min-h-screen w-64 bg-gradient-to-b from-white via-violet-50 to-violet-100 border-r border-violet-200">
            
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-violet-200">
                <MdDashboard className="h-7 w-7 text-violet-600" />
                <h1 className="text-xl font-bold text-violet-700 tracking-tight">
                    Dashboard
                </h1>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4 px-6 py-6 border-b border-violet-100">
                <img
                    src="https://demo.bootstrapdash.com/purple-admin-free/dist/themes/assets/images/faces/face1.jpg"
                    alt="Profile"
                    className="w-12 h-12 rounded-full border border-violet-300"
                />
                <div>
                    <h2 className="text-sm font-semibold text-gray-800">
                        David Gray, H
                    </h2>
                    <p className="text-xs text-gray-500">Project Manager</p>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="px-3 mt-4 space-y-1 flex-1">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            group flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all
                            relative
                            ${item.active 
                                ? 'bg-violet-50 text-violet-700 font-semibold' 
                                : 'text-gray-600 hover:bg-violet-50 hover:text-violet-700'}
                        `}
                    >
                        {item.active && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-violet-600 rounded-r"></span>
                        )}
                        <span className={`text-lg ${item.active ? 'text-violet-700' : 'text-violet-500 group-hover:text-violet-700'}`}>
                            {item.icon}
                        </span>
                        <span className="text-sm tracking-wide">{item.name}</span>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-4 text-center text-xs text-gray-500 border-t border-violet-100">
                © 2025 YourCompany
            </div>
        </aside>
    )
}

export default DashSide
