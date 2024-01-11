import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">My react-redux app</h1>
      <ul className="flex items-center space-x-4">
        <li>
          <div className="hover:text-blue-400">
            Counter App
          </div>
        </li>
        <li>
          <div className="hover:text-blue-400">
            Todo App
          </div>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Header
