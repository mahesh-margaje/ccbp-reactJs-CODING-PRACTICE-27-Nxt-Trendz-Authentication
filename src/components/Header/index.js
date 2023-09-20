// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-links">Products</li>
        <li className="nav-links">Cart</li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-icon"
        />
      </button>
    </div>
    <div className="nav-bar">
      <button type="button" className="nav-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-img"
        />
      </button>
      <button type="button" className="nav-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-img"
        />
      </button>
      <button type="button" className="nav-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-img"
        />
      </button>
    </div>
  </nav>
)

export default Header
