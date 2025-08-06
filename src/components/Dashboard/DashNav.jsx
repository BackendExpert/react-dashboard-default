import React from 'react'
import { FaBell } from 'react-icons/fa6'
import { MdMessage, MdSearch } from 'react-icons/md'

const DashNav = () => {
    return (
        <div className="w-full border-b border-violet-200 bg-white px-6 py-3">
            <div className="flex justify-between items-center">
                
                {/* Search */}
                <form action="" method="post" className="w-1/3">
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-violet-300 transition">
                        <MdSearch className="h-5 w-5 text-violet-600" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none ml-2 w-full text-gray-700 placeholder-gray-400"
                        />
                    </div>
                </form>

                {/* Right section */}
                <div className="flex items-center space-x-6">
                    {/* Icons */}
                    <button className="relative p-2 rounded-full hover:bg-violet-50 transition">
                        <MdMessage className="h-5 w-5 text-gray-600" />
                        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>

                    <button className="relative p-2 rounded-full hover:bg-violet-50 transition">
                        <FaBell className="h-5 w-5 text-gray-600" />
                        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Profile */}
                    <div className="flex items-center space-x-3 cursor-pointer hover:bg-violet-50 px-3 py-2 rounded-full transition">
                        <img
                            src="https://demo.bootstrapdash.com/purple-admin-free/dist/themes/assets/images/faces/face1.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full border border-violet-300"
                        />
                        <div className="leading-tight">
                            <h2 className="text-sm font-semibold text-gray-800">
                                David Gray, H
                            </h2>
                            <p className="text-xs text-gray-500">Project Manager</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashNav
