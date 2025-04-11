import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-yellow-500">Socio<span className='text-2xl font-bold text-yellow-700'>Tech</span></h1>

    <ul className="flex gap-8 text-gray-700 font-medium text-lg">
      <li>
        <Link to="/topUsers" className="hover:text-blue-500">Top Users</Link>
      </li>
      <li>
        <Link to="/trendingPosts" className="hover:text-blue-500">Trending Posts</Link>
      </li>
      <li>
        <Link to="/feeds" className="hover:text-blue-500">Feed</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar