import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

// REESTRUCTURADO: Eliminamos Inicio, "Sobre mí" pasa a ser la raíz y añadimos Conocimientos
const navItems = [
  { path: '/', label: 'Sobre mí', icon: '⟨🖳⟩' },   // Terminal / Desarrollo
  { path: '/skills', label: 'Conocimientos', icon: '⚙' },  // Configuración / Ingeniería
  { path: '/experience', label: 'Experiencia', icon: '🗲' },  // Ejecución / Energía sutil
  { path: '/education', label: 'Formación', icon: '🕮' },   // Documentación / Libro abierto
  { path: '/projects', label: 'Proyectos', icon: '⬔' },   // Bloque modular / Construcción
  { path: '/contact', label: 'Contacto', icon: '✉' },    // Mensaje / Correo
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>

      <nav className={`sidebar ${menuOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <div className="sidebar__avatar">CD</div>
          <div className="sidebar__identity">
            <span className="sidebar__name">Cristóbal Delgado Peñaranda</span>
            <span className="sidebar__role">Software Developer</span>
          </div>
        </div>

        <div className="sidebar__divider" />

        <ul className="sidebar__nav">
          {navItems.map(({ path, label, icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                // 'end' asegura que la ruta raíz '/' solo se marque activa si el path exacto es '/'
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'nav-item--active' : ''}`
                }
              >
                <span className="nav-item__icon">{icon}</span>
                <span className="nav-item__label">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="sidebar__footer">
          <span className="sidebar__status">
            <span className="status-dot"></span>
            Disponible para trabajar
          </span>
        </div>
      </nav>

      {menuOpen && <div className="sidebar__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}