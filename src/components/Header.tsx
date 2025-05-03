import React from 'react'
import { NavLink } from 'react-router-dom'
import EditableImage from './editables/EditableImage'
import EditableText from './editables/EditableText'
import logo from '../assets/bbd_logo.png' // Fallback for default logo

const Header: React.FC = () => {
  return (
    <header>
      <div
        className="inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <div
          className="left"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer',
          }}
          onClick={() => (window.location.href = '/')}
        >
          <EditableImage
            contentKey="header.logo"
            defaultValue={logo}
            alt="Logo"
            style={{ width: '180px', height: 'auto' }}
          />
          <h1 style={{ textAlign: 'left', margin: 0 }}>
            <EditableText contentKey="header.title" defaultValue="Beaver Buff" />
            <div style={{ fontSize: '0.6em' }}>
              <EditableText contentKey="header.subtitle" defaultValue="Details" />
            </div>
          </h1>
        </div>

        <nav
          className="main-nav"
          style={{
            position: 'relative',
            padding: '1rem',
            display: 'flex',
            gap: '1rem',
            fontSize: '1.5rem',
            alignItems: 'center',
          }}
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: 'inherit',
              padding: '0 1rem',
              textDecoration: isActive ? 'none' : 'none',
            })}
          >
            Home
          </NavLink>

          <div className="services-menu">
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: 'inherit',
                padding: '0 1rem',
                textDecoration: isActive ? 'none' : 'none',
              })}
            >
              Services &#9662;
            </NavLink>

            <div className="submenu">
              <a href="/services#interior">Interior Detailing</a>
              <a href="/services#exterior">Exterior Detailing</a>
              <a href="/services#paint-correction">Paint Correction</a>
            </div>
          </div>

          <NavLink
            className="button"
            to="/contact"
            style={({ isActive }) => ({
              padding: '0.5em 1em',
              textDecoration: isActive ? 'none' : 'none',
            })}
          >
            Book Now
          </NavLink>
        </nav>
      </div>

      <style>{`
        .services-menu {
          position: relative;
        }

        .submenu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: none;
          flex-direction: column;
          min-width: 260px;
          z-index: 100;
        }

        .services-menu:hover .submenu {
          display: flex;
        }

        .submenu a {
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: black;
        }

        .submenu a:hover {
          background-color: #f2f2f2;
        }
      `}</style>
    </header>
  )
}

export default Header
