import react from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
      <nav className="navbar">
        <Link to='/'>
          <li className={location.pathname === '/' ? 'nav-bar-active' : ''}>
            Home
      </li>
        </Link>

        <Link to='/face'>
          <li className={location.pathname === '/face' ? 'nav-bar-active' : ''}>
            FaceRecogn
      </li>
        </Link>

      </nav>
  )
}