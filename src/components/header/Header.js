import './Header.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="logo-link">
        <img src={logo} className="logo" alt="Naked Grit Logo"/>
      </Link>
      <ul className="nav-link-container">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
